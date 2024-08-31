// AddTeacher.js
import React, { useState } from 'react';
import axios from 'axios';

const Teachers = () => {
  const [teacherData, setTeacherData] = useState({
    name: '',
    email: '',
    subject: '',
    empid:''
  });

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/add-teacher', teacherData);
      alert('Teacher added successfully!');
    } catch (error) {
      console.error('There was an error adding the teacher!', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10 ">
        <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Add Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div >
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            value={teacherData.name}
            onChange={handleChange}
           
            required
          />
        </div>
        <div >
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">EmpId</label>
          <input
            type="text"
            name="empid"
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            value={teacherData.empid}
            onChange={handleChange}
           
            required
          />
        </div>
        <div >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={teacherData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div >
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={teacherData.subject}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
        >
          Add Teacher
        </button>
      </form>
      </div>
    </div>
  );
};

export default Teachers;
