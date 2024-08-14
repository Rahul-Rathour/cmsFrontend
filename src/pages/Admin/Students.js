import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
    const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', course: '' ,branch: '',email:'', father_name:'' ,mother_name:'', category:'' });
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/vi/students/getall');
            setStudents(response.data.students);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleAddStudent = async (e) => {
        e.preventDefault();
        if (newStudent.name.trim() !== '' && newStudent.registrationNumber.trim() !== '' && newStudent.course.trim() !== '' && newStudent.branch.trim() !=='' && newStudent.email.trim() !== '' && newStudent.father_name.trim() !== '' && newStudent.mother_name.trim() !=='' && newStudent.category.trim() !=='') {
            try {
                const response = await axios.post('http://localhost:4000/api/vi/students', newStudent);
                setStudents([...students, response.data.student]);
                setNewStudent({ name: '', registrationNumber: '', course: '',branch: '',email:'', father_name:'' ,mother_name:'', category:'' });
            } catch (error) {
                console.error('Error adding student:', error);
            }
        }
    };


    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">ADD STUDENT</h1>
                    </div>
                    <div className='mt-3'>
                        <span><input type='text' placeholder='ENTER THE NAME OF STUDENT' name='student' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ' ></input></span>
                        <span><input type='text' placeholder='ENTER REGISTERATION NUMBER' name='registeration' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' ></input></span>
                        <span><input type='text' placeholder='ENTER THE COURSE' name='course' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 pr-64' ></input></span>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-32 mt-7">ADD STUDENT</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Students