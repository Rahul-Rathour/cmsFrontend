// AddCourse.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    code: '',
    description: ''
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/add-course', courseData);
      alert('Course added successfully!');
    } catch (error) {
      console.error('There was an error adding the course!', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10">
              <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">

      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Add Course</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label  htmlFor="title" className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">Course Code</label>
          <input
            type="text"
            name="code"
            value={courseData.code}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div >
          <label htmlFor="description"  className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
          Add Course
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddCourse;
