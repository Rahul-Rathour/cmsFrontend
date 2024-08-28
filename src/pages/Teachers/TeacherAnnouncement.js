import React, { useState } from 'react';

function TeacherAnnouncement() {
  const [announcement, setAnnouncement] = useState('');

  const handleInputChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/teacher/addAnnouncement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ announcement }),
    });
    const data = await response.json();
    if (data.success) {
      setAnnouncement('');
      alert('Announcement added successfully');
    } else {
      alert('Error adding announcement');
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 shadow-xl rounded-lg p-10 bg-cover'>
     <div className="p-6 md:p-8 max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg ">

     <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Add Announcements</h2>
     <form onSubmit={handleSubmit} className="space-y-5">
        <div>
        <label htmlFor="announcement" className="block text-sm font-medium text-gray-700">Announcement</label>
          <textarea
            value={announcement}
            onChange={handleInputChange}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:scale-105"
            required
          />
        </div>
        <div>
          <button type="submit"   
           className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105">

            Add Announcement
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default TeacherAnnouncement;
