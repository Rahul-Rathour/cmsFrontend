import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { json } from 'react-router-dom';

const Announcement = () => {

  // State for managing announcement
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/vi/announcements/getall');
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/vi/announcements', {
        announcement: announcement, // Ensure that the key matches the backend model
      });
      console.log('Announcement sent:', response.data);
      // Display success toast message
      toast.success('Announcement sent successfully');
      // Clear the form
      setAnnouncement('');
      // Fetch announcements again to update the list
      fetchAnnouncements();
    } catch (error) {
      console.error('Error sending announcement:', error);
      // Display error toast message
      toast.error('Error sending announcement');
    }
  };




  return (
    <>
      <div className='flex'>
        <div className='fixed'>
          <Sidebar />
        </div>
        <div className='flex flex-col ml-80'>


          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">ADD ANNOUNCEMENT</h1>
            </div>
            <div className='mt-3'>
              <label className='font-medium'>Announcement</label>

              <span><textarea id="announcement" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} placeholder='ENTER ANNOUNCEMENT' name='password' rows="6" cols="50" className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 pr-64' ></textarea></span>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-32 mt-7">SEND ANNOUNCEMENT</button>
            </div>

          </form>

          <div className='mt-10'>

            {/* Display Announcements */}
            <div className='text-center font-bold text-2xl mb-5 text-gray-500'>
              <h1>LISTED ANNOUNCEMENTS</h1>
            </div>
            {announcements.map((announcement) => {
              return (
                <div className='flex bg-blue-700 p-3 pl-5 mt-4 border border-blue-900 rounded-lg'>
                  <div key={announcement.id} className=" text-white">
                    {announcement.announcement}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>

    </>
  )
}
export default Announcement