// AddAnnouncement.js
import React, { useState } from 'react';
import axios from 'axios';

const Announcement = () => {
  const [announcementData, setAnnouncementData] = useState({
    title: '',
    description: '',
    pdf: null
  });

  const handleChange = (e) => {
    setAnnouncementData({
      ...announcementData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setAnnouncementData({
      ...announcementData,
      pdf: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', announcementData.title);
    formData.append('description', announcementData.description);
    formData.append('pdf', announcementData.pdf);

    try {
      const response = await axios.post('http://localhost:5000/api/admin/add-announcement', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Announcement added successfully!');
    } catch (error) {
      console.error('There was an error adding the announcement!', error);
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10 '>
              <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">

              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Add Announcements</h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
        <div >
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={announcementData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
          <label htmlFor="decription" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={announcementData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
          <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">Upload PDF</label>
          <input
            type="file"
            name="pdf"
            onChange={handleFileChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
          Add Announcement
        </button>
      </form>
      </div>
    </div>
  );
};

export default Announcement;
