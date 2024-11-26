// AddExams
import React, { useState } from 'react';
import axios from 'axios';

const Teachers = () => {
  const [exams, setExams] = useState({
    title: '',
    date: '',
    course: ''
  });

  const handleChange = (e) => {
    setExams({
      ...exams,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/add-exam', exams);
      alert('Exam added successfully!');
    } catch (error) {
      console.error('There was an error adding the exam!', error);
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10 '>
    <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">
    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Add Exam</h2>
    <form onSubmit={handleSubmit} className="space-y-5">
        <div >
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Exam Name</label>
          <input
            type="text"
            name="title"
            value={exams.title}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
            type="date"
            name="date"
            value={exams.date}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div >
        <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
        <input
            type="text"
            name="course"
            value={exams.course}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
          Add Exam
        </button>
      </form>
      </div>
    </div>
  );
};

export default Teachers;
