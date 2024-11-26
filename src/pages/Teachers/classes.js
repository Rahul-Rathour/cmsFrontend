import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../assets/navbar';

const TeacherClasses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teacher/courses');
        console.log(response)
        setCourses(response.data);
      } catch (error) {
        setError('Failed to fetch courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="p-6">Loading courses...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (courses.length === 0) {
    return <div className="p-6">No courses available.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-lg mt-16 h-screen">
        <h2 className="text-3xl font-extrabold mb-6 text-white">Courses</h2>
        <ul className="space-y-6">
          {courses.map((course) => (
            <li
              key={course._id}
              className="p-6 bg-white border border-blue-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeacherClasses;
