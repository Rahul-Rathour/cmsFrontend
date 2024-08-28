//khadoos rahulia
import React from 'react'
// import EventCalender from './EventCalender';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import { BsPersonWorkspace, BsPeopleFill }
  from 'react-icons/bs'
import { GiTeacher } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/navbar';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    {/* <div className='flex'>
        <TeacherSidebar/>
        
        <div className='main-container'>
          <div className='main-title'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'> TEACHER DASHBOARD</h3>
          </div>

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>Assignment</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>5</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Performance</h3>
                <BsPersonWorkspace className='card_icon' />
              </div>
              <h1>30</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Terms</h3>
                <GiTeacher className='card_icon' />
              </div>
              <h1>1</h1>
              
            </div>

          </div>
          
        </div>
      </div> */}
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 mt-18">
    <h1 className="text-3xl font-bold text-blue-700 pt-28 ml-6 text-center">Teacher Dashboard</h1>
    <div className="grid grid-cols-3 gap-4 mt-9">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/teacher/classes')}>Courses</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/teacher/assignment')}>Assignments</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/teacher/exam')}>Exams</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/teacher/attendance')}>Attendance</div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1" onClick={()=>navigate('/teacher/announcement')}>Announcements</div>
      </div>
    </div>
    </>
  )
}

export default TeacherDashboard