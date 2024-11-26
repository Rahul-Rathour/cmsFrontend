//ViewExams
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../assets/navbar';

const Exam = () => {
  const [exams, setExams] = useState([]);
  const course = localStorage.getItem("Course")

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/student/exams?course=${course}`);
        setExams(response.data);
    }catch (error) {    
        console.error(error);
      }
    };

    fetchExams();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="p-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-lg mt-16 h-screen">
  <h2 className="text-3xl font-extrabold mb-8 text-white ">Exams</h2>
  <ul className="space-y-6">
    {exams.map((exam) => (
      <li
        key={exam._id}
        className="p-6 bg-white border border-blue-200 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <h3 className="text-2xl font-bold text-blue-800 flex items-center mb-4">
          <svg
            className="w-6 h-6 mr-3 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c.94 0 1.72.78 1.72 1.72v.56c0 .94-.78 1.72-1.72 1.72-.94 0-1.72-.78-1.72-1.72v-.56C10.28 8.78 11.06 8 12 8z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14v.01M19.07 4.93a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"
            ></path>
          </svg>
          {exam.course}
        </h3>
        <p className="text-gray-800 mb-2">Date: {new Date(exam.date).toLocaleDateString()}</p>
        <p className="text-gray-800">Title: {exam.title}</p>
      </li>
    ))}
  </ul>
</div>
</>

  );
};

export default Exam;
