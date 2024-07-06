
import React from 'react';


const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We are here to help you with any questions or inquiries you may have. Please feel free to
        reach out to us using the contact information below.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Email:</span> info@domum.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +123 456 7890
            </li>
            <li>
              <span className="font-semibold">Address:</span> 123 Main Street, Abidjan, Ivory Coast
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-xl font-bold mb-2">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
