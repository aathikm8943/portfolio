// File: src/components/ContactSection.tsx
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "your_service_id", // replace with your actual EmailJS service ID
        "your_template_id", // replace with your actual EmailJS template ID
        form,
        "your_public_key" // replace with your actual EmailJS public key
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setIsOpen(false), 2000);
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="py-8 text-white">
      <h2 className="text-3xl font-semibold text-[#C084FC] border-b border-[#C084FC] inline-block pb-1 mb-6">
        #contacts
      </h2>
      <p className="text-gray-400 mb-4 max-w-xl">
        If you’re looking to build a product from scratch or explore new projects, feel free to get in touch for collaboration.
      </p>
      <p className="text-gray-400 mb-4 max-w-xl">
        I’m open to working together in various capacities, and if you have any other requests or questions, don’t hesitate to reach out.
      </p>

      <div className="flex gap-4 mb-6 items-center justify-between">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          📩 Write a Review
        </button>

        <div className="flex gap-6 mt-6 text-2xl text-gray-300">
          <a
            href="mailto:aathi8924@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/aathi-kesava-moorthi-p-4088401a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aathiKM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>


      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2C2F36] p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-white mb-4">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1E1F24] border border-gray-700 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1E1F24] border border-gray-700 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1E1F24] border border-gray-700 rounded h-28"
              ></textarea>
              <button
                type="submit"
                className="bg-[#C084FC] text-white px-6 py-2 rounded hover:bg-[#a45deb] transition"
              >
                Send
              </button>
              {status === "success" && <p className="text-green-400 text-sm">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
