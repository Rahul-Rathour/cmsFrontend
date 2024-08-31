import React, { useEffect, useState } from 'react';

function TeacherProfile() {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const response = await fetch('/api/teacher/profile');
    const data = await response.json();
    setProfile(data.profile);
  };

  const name = localStorage.getItem("Faculty Name")
  const Faculty_Email = localStorage.getItem("Faculty Email")
  const Faculty_subject = localStorage.getItem("Faculty subject")
  const Faculty_Empid = localStorage.getItem("Faculty Empid")
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty Profile</h2>
      <div className="border-t-4 border-blue-500 rounded-lg p-6 bg-gray-50">
        <p className="text-lg font-semibold text-gray-700">Name: <span className="text-gray-900">{name}</span></p>
        <p className="text-lg font-semibold text-gray-700">Email: <span className="text-gray-900">{Faculty_Email}</span></p>
        <p className="text-lg font-semibold text-gray-700">Subject: <span className="text-gray-900">{Faculty_subject}</span></p>
        <p className="text-lg font-semibold text-gray-700">Empid: <span className="text-gray-900">{Faculty_Empid}</span></p>
      </div>
      <div className="text-center mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default TeacherProfile;
