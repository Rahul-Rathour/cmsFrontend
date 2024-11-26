// ViewAnnouncements.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../assets/navbar';

const StudentAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student/announcements');
        setAnnouncements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="p-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-lg mt-16 h-screen">
  <h2 className="text-3xl font-extrabold mb-6 text-white">Announcements</h2>
  <ul className="space-y-6">
    {announcements.map((announcement) => (
      <li 
        key={announcement._id} 
        className="p-6 bg-white border border-blue-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-2">{announcement.title}</h3>
        <p className="text-gray-700 mb-4">{announcement.description}</p>
        {announcement.pdf && (
          <a
            href={`http://localhost:5000/uploads/${announcement.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:text-blue-600 underline transition-colors flex items-center"
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
            View PDF
          </a>
        )}
      </li>
    ))}
  </ul>
</div>
</>

  );
};

export default StudentAnnouncement;
