// Student dashboard

import React from 'react'
import StudentSidebar from './StudentSidebar';

// import EventCalender from './EventCalender';
import axios from 'axios';
import { BsPersonWorkspace, BsPeopleFill }
  from 'react-icons/bs'
import { GiTeacher } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/navbar';
const StudentDashboard = () => {

  const navigate= useNavigate();
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 mt-18">
    <h1 className="text-3xl font-bold text-blue-700 pt-28 ml-6 text-center">Student Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-9">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/student/assignment')}>Assignments</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/student/exam')}>Upcoming Exams</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/student/attendance')}>Attendance</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/student/announcement')}>Announcements</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1"onClick={()=>navigate('/student/profile')}>Profile</div>
      </div>
    </div>
    </>
  )
}

export default StudentDashboard