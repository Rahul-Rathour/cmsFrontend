import React, { useState } from 'react';
import Navbar from './navbar';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <>
    <Navbar/>
    <div className="mx-auto p-10 bg-white rounded-3xl shadow-2xl mt-10">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-700 underline decoration-dotted decoration-blue-400">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Student Management Service */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-900">
            Student Management
          </h2>
          <p className="text-lg text-gray-600 transition-opacity duration-500 ease-in-out">
            Manage student profiles, academic records, attendance, grades, and more with ease.
          </p>
          <div
            className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedService === 'student-management' ? 'max-h-40' : 'max-h-0'}`}
          >
            <p className="mt-4 text-gray-600">
              This system includes advanced features such as automated alerts, real-time tracking,
              and comprehensive reporting tools to support the educational process.
            </p>
          </div>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => toggleService('student-management')}
          >
            {expandedService === 'student-management' ? 'Show Less' : 'Learn More'}
          </button>
        </div>


        {/* Teacher Management Service */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-900">
            Teacher Management
          </h2>
          <p className="text-lg text-gray-600 transition-opacity duration-500 ease-in-out">
            Organize teacher schedules, assignments, and communication effectively.
          </p>
          <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedService === 'teacher-management' ? 'max-h-40' : 'max-h-0'}`}>
            <p className="mt-4 text-gray-600">
              Teachers can benefit from integrated tools that streamline the management of their
              daily tasks, improving overall efficiency and communication.
            </p>
          </div>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => toggleService('teacher-management')}
          >
            {expandedService === 'teacher-management' ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        {/* Course & Assignment Management Service */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-900">
            Course & Assignment Management
          </h2>
          <p className="text-lg text-gray-600 transition-opacity duration-500 ease-in-out">
            Streamline course creation, assignment distribution, and grading processes.
          </p>
          <div
            className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedService === 'course-assignment-management' ? 'max-h-40' : 'max-h-0'}`}
          >
            <p className="mt-4 text-gray-600">
              Our system simplifies the process of managing courses and assignments, allowing
              teachers to focus more on teaching and less on administration.
            </p>
          </div>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => toggleService('course-assignment-management')}
          >
            {expandedService === 'course-assignment-management' ? 'Show Less' : 'Learn More'}
          </button>
        </div>


        {/* Attendance Management Service */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-900">
            Attendance Management
          </h2>
          <p className="text-lg text-gray-600 transition-opacity duration-500 ease-in-out">
            Simplify attendance tracking and generate reports effortlessly.
          </p>
          <div
            className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedService === 'attendance-management' ? 'max-h-40' : 'max-h-0'}`}
          >
            <p className="mt-4 text-gray-600">
              Our attendance management system provides accurate tracking and reporting, ensuring
              that you can monitor student participation with ease.
            </p>
          </div>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => toggleService('attendance-management')}
          >
            {expandedService === 'attendance-management' ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        {/* Exam Management Service */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-900">
            Exam Management
          </h2>
          <p className="text-lg text-gray-600 transition-opacity duration-500 ease-in-out">
            Efficiently manage exam schedules, administration, and grading.
          </p>
          <div
            className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedService === 'exam-management' ? 'max-h-40' : 'max-h-0'}`}
          >
            <p className="mt-4 text-gray-600">
              Our system simplifies exam management, from scheduling to grading, making the
              process seamless and efficient for both teachers and students.
            </p>
          </div>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => toggleService('exam-management')}
          >
            {expandedService === 'exam-management' ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        {/* Announcements & Notifications Service */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-2xl shadow-xl transition-transform transform hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Announcements & Notifications
          </h2>
          <p className="text-lg text-gray-600">
            Keep everyone informed with timely updates and notifications.
          </p>
          {expandedService === 'announcements-notifications' && (
            <p className="mt-4 text-gray-600">
              Our system ensures that important updates are communicated effectively to all
              stakeholders, enhancing communication within the institution.
            </p>
          )}
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => toggleService('announcements-notifications')}
          >
            {expandedService === 'announcements-notifications' ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>

      <div className="text-center mt-16 bg-gradient-to-r from-blue-700 to-blue-900 p-10 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Ready to Transform Your Institution?
        </h2>
        <p className="text-xl text-blue-100 leading-loose mb-10">
          Explore the full potential of our College Management System today and make education 
          more efficient, organized, and impactful for everyone.
        </p>
        <button
          className="bg-white text-blue-700 px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          onClick={() => toggleService('transform')}
        >
          {expandedService === 'transform' ? 'Show Less' : 'Learn More'}
        </button>
        {expandedService === 'transform' && (
          <p className="mt-4 text-blue-100">
            Our comprehensive system is designed to streamline operations, enhance communication,
            and improve the educational experience for all involved. Discover how we can help
            transform your institution.
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default Services;
