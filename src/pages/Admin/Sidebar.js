import React, { useState } from 'react'

const Sidebar = () => {
  const [toggle, setToggle] = useState('false');

  const rotate = () => {
    setToggle(!toggle)
  }
  return (
    <>

      <div style={{ width: toggle ? '100px' : '220px'}} className='fixed h-screen bg-gray-800 text-white'>
          <div style={{ rotate: toggle ? '180deg' : '0deg' }} className='text-right cursor-pointer w-full' onClick={rotate} >◀</div>
          <div style={{ width: toggle ? '90px' : '210px'}} className='text-center flex-col text-wrap'>
          <div className='p-3 cursor-pointer border flex text-wrap'><h1>Assignments</h1></div>
          <div className='p-3 cursor-pointer border'><h1>Exams</h1></div>
          <div className='p-3 cursor-pointer border'><h1>Performance</h1></div>
          <div className='p-3 cursor-pointer border'><h1>Attendance</h1></div>
          <div className='p-3 cursor-pointer border'><h1>Library</h1></div>
          <div className='p-3 cursor-pointer border'><h1>Announcements</h1></div>
          <div className='p-3 cursor-pointer border'><h1>Events & Profile</h1></div>
          </div>
      </div>

    </>
  )
}

export default Sidebar