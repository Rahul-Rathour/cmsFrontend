import React from 'react';

const Contactus = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-4 relative overflow-hidden">
      {/* Background Circles for Layered Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

      <div className="relative w-full max-w-lg bg-white bg-opacity-80 rounded-2xl p-10 shadow-2xl backdrop-filter backdrop-blur-lg">
        <form action="https://formspree.io/f/xqazkowr" method="post">
          <h3 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Get in Touch</h3>
          
          <label className="block mb-6 relative">
            <input 
              type="text" 
              name="name" 
              required 
              className="peer block w-full px-4 py-3 text-gray-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-transparent rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              placeholder=" "
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">Your Name</span>
          </label>

          <label className="block mb-6 relative">
            <input 
              type="email" 
              name="mail" 
              required 
              className="peer block w-full px-4 py-3 text-gray-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-transparent rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              placeholder=" "
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">Your Email</span>
          </label>

          <label className="block mb-8 relative">
            <textarea 
              name="message" 
              required 
              className="peer block w-full px-4 py-3 text-gray-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-transparent rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              rows="4"
              placeholder=" "
            ></textarea>
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">Your Message</span>
          </label>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
          >
            Submit 
            <i className="ml-2 zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
