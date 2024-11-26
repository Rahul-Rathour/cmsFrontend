import React, { useEffect, useState } from 'react';
import Navbar from '../../assets/navbar';
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
    <>
      <Navbar />
      <div className="p-8 max-w-xl mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 mt-20">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">Faculty Profile</h2>
        <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg relative overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent opacity-20 z-0"></div>
          <div className="relative z-10">
            <div className="border-t-4 border-blue-500 rounded-t-xl p-4 bg-gray-50 mb-6">
              <p className="text-lg font-semibold text-gray-700">Name: <span className="text-gray-900">{name}</span></p>
              <p className="text-lg font-semibold text-gray-700">Email: <span className="text-gray-900">{Faculty_Email}</span></p>
              <p className="text-lg font-semibold text-gray-700">Subject: <span className="text-gray-900">{Faculty_subject}</span></p>
              <p className="text-lg font-semibold text-gray-700">Empid: <span className="text-gray-900">{Faculty_Empid}</span></p>
              <div className="text-center mt-6">
                <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
