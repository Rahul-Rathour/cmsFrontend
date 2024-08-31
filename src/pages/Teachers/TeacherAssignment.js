import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherAssignment() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('');
    const [teacher, setTeacher] = useState('');
    const [assignments, setAssignments] = useState([]);
    const [dueDate, setdueDate] = useState([]);

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
                setdueDate('');
            })
            .catch(error => console.error('Error adding assignment:', error));
    };

    return (
        <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Assignment Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Assignment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block text-gray-600 font-medium mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block text-gray-600 font-medium mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="course" className="block text-gray-600 font-medium mb-2">Course</label>
                    <select
                        id="course"
                        name="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option>B.Tech</option>
                        <option>M.Tech</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="teacher" className="block text-gray-600 font-medium mb-2">Teacher</label>
                    <input
                        type="text"
                        id="teacher"
                        name="teacher"
                        value={teacher}
                        onChange={(e) => setTeacher(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="dueDate" className="block text-gray-600 font-medium mb-2">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={dueDate}
                        onChange={(e) => setdueDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Add Assignment
                </button>
            </form>
        </div>

        {/* Assignments List */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Assignments</h2>
            <ul className="space-y-6">
                {assignments.map((assignment) => (
                    <li key={assignment._id} className="p-6 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{assignment.title}</h3>
                        <p className="text-gray-600 mb-1">{assignment.description}</p>
                        <p className="text-gray-500">Course: {assignment.course}</p>
                        <p className="text-gray-500">Teacher: {assignment.teacher}</p>
                        <p className="text-gray-500">Due Date: {assignment.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>

    );
}

export default TeacherAssignment;