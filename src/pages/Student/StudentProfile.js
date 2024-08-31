import React, { useEffect, useState } from 'react';

function StudentProfile() {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const response = await fetch('/api/student/profile');
    const data = await response.json();
    setProfile(data.profile);
  };
 
  useEffect(() => {
    fetchProfile();
  }, []);

  const studentName = localStorage.getItem("name");  
  const registrationNumber = localStorage.getItem("Registration Number");
  const course = localStorage.getItem("Course");
  const branch = localStorage.getItem("Branch");
  const email = localStorage.getItem("Email");

  return (
    <div className="p-8 max-w-xl mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
  <h2 className="text-3xl font-extrabold text-center text-white mb-8">Student Profile</h2>
  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg relative overflow-hidden">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent opacity-20 z-0"></div>
    <div className="relative z-10">
      <div className="border-t-4 border-blue-500 rounded-t-xl p-4 bg-gray-50 mb-6">
        <p className="text-lg font-semibold text-gray-800">Name: <span className="text-gray-900">{studentName}</span></p>
        <p className="text-lg font-semibold text-gray-800">Registration Number: <span className="text-gray-900">{registrationNumber}</span></p>
        <p className="text-lg font-semibold text-gray-800">Course: <span className="text-gray-900">{course}</span></p>
        <p className="text-lg font-semibold text-gray-800">Branch: <span className="text-gray-900">{branch}</span></p>
        <p className="text-lg font-semibold text-gray-800">Email: <span className="text-gray-900">{email}</span></p>
      </div>
      <div className="text-center mt-6">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
</div>

  
  );
}

export default StudentProfile;

