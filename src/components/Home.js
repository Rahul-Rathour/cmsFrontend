import React from 'react'
import './style.css'
import Navbar from '../assets/navbar'
import Router from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home_body bg-cover bg-center h-screen text-white'>
        <div className='mt-14 text-center font-bold text-4xl'>
          <h1 className='pt-20 '>College Management System</h1>
        </div>
        <p className='p-10 font-bold'>
          The College Management System offers a comprehensive solution for modernizing educational administration through its intuitive and versatile
          digital interface. Designed to cater to the diverse needs of students, faculty, and administrative staff, this platform centralizes all academic
          and operational processes into a single, accessible hub. Users can efficiently manage course schedules, track student progress, facilitate communication,
          and handle administrative tasks such as admissions and billing. Its robust features include real-time updates, secure data storage, and customizable reporting
          tools, all of which contribute to a streamlined and effective management experience. By leveraging the Platform Online College Management System, institutions
          can enhance organizational efficiency, improve engagement, and provide a seamless educational experience that meets the demands of today's fast-paced academic environment.
        </p>
        <div class="w-max">
          <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Hello World</h1>
        </div>
      </div>
    </>
  )
}

export default Home