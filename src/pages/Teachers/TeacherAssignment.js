import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../assets/navbar';

function TeacherAssignment() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('');
    const [teacher, setTeacher] = useState('');
    const [assignments, setAssignments] = useState([]);
    const [dueDate, setDueDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch assignments from the server
        axios.get('http://localhost:5000/assignments')
            .then(response => setAssignments(response.data))
            .catch(error => console.error('Error fetching assignments:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAssignment = {
            title,
            description,
            course,
            teacher,
            dueDate
        };

        axios.post('http://localhost:5000/api/teacher/add-assignment', newAssignment)
            .then(response => {
                setAssignments([...assignments, response.data]);
                setTitle('');
                setDescription('');
                setCourse('');
                setTeacher('');
                setDueDate(''); 
                setErrorMessage(''); 
            })
            .catch(error => {
                console.error('Error adding assignment:', error);
                setErrorMessage('Error adding assignment. Please try again.'); 
            });
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-blue-50 p-8 mt-16">
                {/* Add Assignment Form */}
                <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col w-1/2">
                    <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Add New Assignment</h2>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Render error message */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div className="mb-5">
                            <label htmlFor="title" className="block text-white font-semibold mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="description" className="block text-white font-semibold mb-2">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="course" className="block text-white font-semibold mb-2">Course</label>
                            <select
                                id="course"
                                name="course"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            >
                                <option value="">Select Course</option>
                                <option>B.Tech</option>
                                <option>M.Tech</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="teacher" className="block text-white font-semibold mb-2">Teacher</label>
                            <input
                                type="text"
                                id="teacher"
                                name="teacher"
                                value={teacher}
                                onChange={(e) => setTeacher(e.target.value)}
                                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="dueDate" className="block text-white font-semibold mb-2">Due Date</label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)} // updated function name
                                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-blue-500 font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        >
                            Add Assignment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TeacherAssignment;
