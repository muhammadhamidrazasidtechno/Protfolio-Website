import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/**
 * Generates a PDF from a specified HTML element
 * @param element The HTML element to convert to PDF
 * @param fileName The name of the PDF file
 */
export const generatePDF = async (
  element: HTMLElement,
  fileName: string = "muhammad-hamid-cv.pdf"
): Promise<void> => {
  try {
    // Add a "generating" class to show a loading state
    element.classList.add("generating-pdf");

    // Capture the HTML element as a canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      logging: false,
      useCORS: true, // Enable CORS for images
      allowTaint: true,
      backgroundColor: "#0A0A14", // Match the dark background
    });

    // Remove the generating class
    element.classList.remove("generating-pdf");

    // Calculate the PDF dimensions (A4 format)
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Create the PDF document
    const pdf = new jsPDF("p", "mm", "a4");
    let currentPage = 0;

    // Add image to the PDF, creating multiple pages if needed
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );
    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft > 0) {
      currentPage++;
      position = -(pageHeight * currentPage);
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save(fileName);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};

/**
 * Triggers the download of the CV as PDF
 */
export const downloadCV = (): void => {
  // Get the CV section element
  const cvSection = document.getElementById("cv-section");

  if (!cvSection) {
    console.error("CV section not found");
    return;
  }

  // Create a clone of the element to avoid modifying the original
  const clonedElement = cvSection.cloneNode(true) as HTMLElement;

  // Temporarily add to the DOM for html2canvas
  clonedElement.style.position = "absolute";
  clonedElement.style.left = "-9999px";
  document.body.appendChild(clonedElement);

  // Generate and download the PDF
  generatePDF(clonedElement, "muhammad-hamid-cv.pdf")
    .then(() => {
      // Clean up
      document.body.removeChild(clonedElement);
    })
    .catch((error) => {
      console.error("Error downloading CV:", error);
      document.body.removeChild(clonedElement);
    });
};
