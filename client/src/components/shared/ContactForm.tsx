import { useState } from "react";
import { motion } from "framer-motion";
import { isValidEmail } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://protfolio-website-backend.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error sending your message.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-darkBg border-b ${errors[fieldName] ? 'border-red-500' : 'border-secondary'} 
    px-4 py-3 focus:outline-none focus:border-primary text-white transition-colors duration-300
  `;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=" "
          className={inputClasses("name")}
        />
        <label
          htmlFor="name"
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.name ? 'text-xs -top-5 text-primary' : 'top-3 text-secondaryText'
            }`}
        >
          Your Name
        </label>
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-6 relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" "
          className={inputClasses("email")}
        />
        <label
          htmlFor="email"
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.email ? 'text-xs -top-5 text-primary' : 'top-3 text-secondaryText'
            }`}
        >
          Your Email
        </label>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="mb-6 relative">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder=" "
          className={inputClasses("subject")}
        />
        <label
          htmlFor="subject"
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.subject ? 'text-xs -top-5 text-primary' : 'top-3 text-secondaryText'
            }`}
        >
          Subject
        </label>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div className="mb-6 relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder=" "
          className={inputClasses("message")}
        ></textarea>
        <label
          htmlFor="message"
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.message ? 'text-xs -top-5 text-primary' : 'top-3 text-secondaryText'
            }`}
        >
          Your Message
        </label>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        className="bg-primary hover:bg-opacity-80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full flex items-center justify-center disabled:opacity-70"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <span>Send Message</span>
            <i className="fas fa-paper-plane ml-2"></i>
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
