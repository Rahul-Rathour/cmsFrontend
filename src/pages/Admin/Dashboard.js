
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Performance from './Performance';
import Announcement from './Announcement';
import EventCalender from './EventCalender';
import axios from 'axios';
import { BsPersonWorkspace, BsPeopleFill }
  from 'react-icons/bs'
import { GiTeacher } from "react-icons/gi";


const Dashboard = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='main-container'>
          <div className='main-title'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'> DASHBOARD</h3>
          </div>

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>Total Students</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>300</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Total Faculties</h3>
                <BsPersonWorkspace className='card_icon' />
              </div>
              <h1>30</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Total Classes</h3>
                <GiTeacher className='card_icon' />
              </div>
              <h1>20</h1>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard