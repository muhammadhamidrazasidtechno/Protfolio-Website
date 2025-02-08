
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CV() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Muhammad Hamid Raza</h1>
            <p className="text-xl text-muted-foreground">Full-Stack Web Developer</p>
          </div>

          {/* Contact Info */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Your Location</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">Portfolio</p>
                  <p className="text-muted-foreground">your-portfolio.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-muted-foreground">
                Passionate Full-Stack Developer with over a year of experience building intuitive, 
                responsive, and feature-rich web applications. Specializing in MERN Stack development 
                with a strong foundation from Saylani Mass IT Training.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">SID Techno</h3>
                  <p className="text-sm text-muted-foreground mb-2">Full Stack Developer • 2 Years</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Led MERN Stack Development Projects</li>
                    <li>Implemented Real-Time Applications</li>
                    <li>Developed responsive and mobile-first web applications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React.js, Next.js</li>
                    <li>Material-UI, Tailwind CSS, Bootstrap</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Backend</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Node.js, Express.js</li>
                    <li>MongoDB, Firebase, PostgreSQL</li>
                    <li>RESTful APIs</li>
                    <li>WebSocket/Socket.io</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div>
                <h3 className="font-medium">Saylani Mass IT Training</h3>
                <p className="text-sm text-muted-foreground">Web Development Certification</p>
              </div>
            </CardContent>
          </Card>

          {/* Download Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => {
                const element = document.createElement("div");
                element.innerHTML = document.querySelector('.max-w-4xl')?.innerHTML || '';
                
                const styles = `
                  body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                  h1 { color: #333; }
                  .card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
                `;
                
                const htmlContent = `
                  <html>
                    <head>
                      <style>${styles}</style>
                    </head>
                    <body>
                      ${element.innerHTML}
                    </body>
                  </html>
                `;
                
                const blob = new Blob([htmlContent], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Muhammad_Hamid_Raza_CV.html';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
