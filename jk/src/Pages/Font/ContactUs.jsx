import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (API call, email, etc.)
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full md:flex overflow-hidden">
        {/* Left side - Form */}
        <div className="md:w-2/3 p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for reaching out! We'll get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-4 text-indigo-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Your Name
              </label>
            </div>

            {/* Email input */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none"
                placeholder="Your Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-4 text-indigo-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Your Email
              </label>
            </div>

            {/* Message input */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-4 text-indigo-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Contact info */}
        <div className="md:w-1/3 bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 text-white p-10 flex flex-col justify-center space-y-6">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>

          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-pink-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"></path>
              <rect x="3" y="6" width="18" height="12" rx="2" ry="2"></rect>
            </svg>
            <p>support@example.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-pink-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.44 2.39.9 3.5a2 2 0 01-.45 2.11L9.2 10.8a16 16 0 006 6l1.47-1.47a2 2 0 012.11-.45c1.11.46 2.29.77 3.5.9a2 2 0 011.72 2z"></path>
            </svg>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-pink-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 21c-4.418 0-8-3.582-8-8a8 8 0 0116 0c0 4.418-3.582 8-8 8z"></path>
              <path d="M12 7v5l3 3"></path>
            </svg>
            <p>1234 Elm St, Springfield, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
