import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-slate-700 mb-4">YourBrand</h2>
            <p className="text-gray-400 text-sm">
              Building modern web solutions with creativity and passion.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-slate-700 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-400">Home</a></li>
              <li><a href="#" className="hover:text-slate-400">About</a></li>
              <li><a href="#" className="hover:text-slate-400">Services</a></li>
              <li><a href="#" className="hover:text-slate-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-800 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-700">Web Design</a></li>
              <li><a href="#" className="hover:text-orange-700">Development</a></li>
              <li><a href="#" className="hover:text-orange-700">SEO</a></li>
              <li><a href="#" className="hover:text-orange-700">Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-slate-800 font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 text-slate-400"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-400">Facebook</a>
            <a href="#" className="hover:text-slate-400">Twitter</a>
            <a href="#" className="hover:text-slate-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
