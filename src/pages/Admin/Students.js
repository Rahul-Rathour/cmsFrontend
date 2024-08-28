// frontend/src/components/Admin/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    course: '',
    branch: '',
    email: '',
    father_name: '',
    mother_name: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/add-student', formData);
      alert('Student added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding student.');
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10 '>
      <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Add Student</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="1234567890"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              placeholder="Computer Science"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              placeholder="Engineering"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.branch}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="father_name" className="block text-sm font-medium text-gray-700">Father's Name</label>
            <input
              type="text"
              id="father_name"
              name="father_name"
              placeholder="Mr. Doe"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.father_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="mother_name" className="block text-sm font-medium text-gray-700">Mother's Name</label>
            <input
              type="text"
              id="mother_name"
              name="mother_name"
              placeholder="Mrs. Doe"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.mother_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Undergraduate"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
            Add Student
          </button>
        </form>
      </div>

    </div>

  );
};

export default Students;
