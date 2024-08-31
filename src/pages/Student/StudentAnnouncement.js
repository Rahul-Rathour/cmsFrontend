// frontend/src/components/Student/ViewAnnouncements.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">Announcements</h2>
  <ul className="space-y-6">
    {announcements.map((announcement) => (
      <li 
        key={announcement._id} 
        className="p-5 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:border-transparent bg-white"
      >
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{announcement.title}</h3>
        <p className="text-gray-600 mb-3">{announcement.description}</p>
        {announcement.pdf && (
          <a
            href={`http://localhost:5000/uploads/${announcement.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:text-blue-700 underline transition-colors"
          >
            View PDF
          </a>
        )}
      </li>
    ))}
  </ul>
</div>

  );
};

export default StudentAnnouncement;
