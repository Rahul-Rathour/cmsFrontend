// frontend/src/components/Student/ViewAssignments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../assets/navbar'

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const course = localStorage.getItem("Course")
  useEffect(() => { 
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/student/assignments?course=${course}`);
        setAssignments(response.data);
    }catch (error) {    
        console.error(error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="p-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-lg mt-16 h-screen">
  <h2 className="text-3xl font-extrabold mb-6 text-white">Assignments</h2>
  <ul className="space-y-6">
    {assignments.map((assignment) => (
      <li
        key={assignment._id}
        className="p-6 bg-white border border-blue-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <h3 className="text-2xl font-bold text-blue-700 flex items-center mb-2">
          <svg
            className="w-6 h-6 mr-2 text-blue-500"
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
          {assignment.title}
        </h3>
        <p className="text-gray-700 mb-4">{assignment.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>
            <strong className="text-gray-600">Due Date:</strong>{" "}
            <span>{new Date(assignment.dueDate).toLocaleDateString()}</span>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:underline flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
            View Details
          </a>
        </div>
      </li>
    ))}
  </ul>
</div>
</>

  );
};

export default Assignments;
