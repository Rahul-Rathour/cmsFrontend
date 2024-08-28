import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherClasses;
