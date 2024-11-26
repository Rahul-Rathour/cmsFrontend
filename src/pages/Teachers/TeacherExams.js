import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../assets/navbar';
const TeacherExams = () => {
  const [exams, setExams] = useState([]);
  const [newExam, setNewExam] = useState({
    title: '',
    date: '',
    course: '',
  });
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teacher/exams');
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exams:', error);
        alert('Failed to fetch exams. Please try again later.');
      }
    };
    fetchExams();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExam((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/teacher/add-exam', newExam);
      alert('Exam added successfully!');
      setNewExam({
        title: '',
        date: '',
        course: '',
      });
      const response = await axios.get('http://localhost:5000/api/teacher/exams');
      setExams(response.data);
    } catch (error) {
      console.error('Error adding exam:', error);
      alert('Failed to add exam.');
    }
  };
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10 mt-16'>
    <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">
    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Manage Exams</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Subject</label>
        <input
            type="text"
            name="title"
            value={newExam.title}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Date</label>
        <input
            type="date"
            name="date"
            value={newExam.date}
            onChange={handleChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
        <input
            type="text"
            name="course"
            value={newExam.course}
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
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Exams</h3>
        <ul>
          {exams.length > 0 ? (
            exams.map((exam) => (
              <li key={exam._id} className="mb-4 p-4 border rounded-md shadow-sm">
                <h4 className="text-lg font-semibold">{exam.title}</h4>
                <p className="text-gray-600">Course: {exam.course}</p>
                <p className="text-gray-600">Date: {new Date(exam.date).toLocaleDateString()}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No exams available.</p>
          )}
        </ul>
      </div>
      </div>
    </div>
    </>
  );
};
export default TeacherExams;
