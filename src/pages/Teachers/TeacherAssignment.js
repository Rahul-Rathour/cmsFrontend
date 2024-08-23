import React, { useState } from 'react';
import axios   from 'axios';

function TeacherAssignment() {
  // const [assignment, setAssignment] = useState({
  //   title: '',
  //   description: '',
  //   dueDate: ''
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setAssignment({ ...assignment, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/teacher/addAssignment', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(assignment),
  //   });
  //   const data = await response.json();
  //   if (data.success) {
  //     alert('Assignment added successfully');
  //     setAssignment({ title: '', description: '', dueDate: '' });
  //   } else {
  //     alert('Error adding assignment');
  //   }
  // };

  // return (
  //   <div className="p-6">
  //     <h2 className="text-2xl mb-6">Add Assignment</h2>
  //     <form onSubmit={handleSubmit} className="space-y-4">
  //       <div>
  //         <label className="block">Title</label>
  //         <input
  //           type="text"
  //           name="title"
  //           value={assignment.title}
  //           onChange={handleInputChange}
  //           className="border p-2 w-full rounded"
  //         />
  //       </div>
  //       <div>
  //         <label className="block">Description</label>
  //         <textarea
  //           name="description"
  //           value={assignment.description}
  //           onChange={handleInputChange}
  //           className="border p-2 w-full rounded"
  //         ></textarea>
  //       </div>
  //       <div>
  //         <label className="block">Due Date</label>
  //         <input
  //           type="date"
  //           name="dueDate"
  //           value={assignment.dueDate}
  //           onChange={handleInputChange}
  //           className="border p-2 w-full rounded"
  //         />
  //       </div>
  //       <div>
  //         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
  //           Add Assignment
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
  const [assignmentData, setAssignmentData] = useState({
    title: '',
    description: '',
    dueDate: '',
    courseId: '',
    pdf: null,
  });

  const handleChange = (e) => {
    setAssignmentData({
      ...assignmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setAssignmentData({
      ...assignmentData,
      pdf: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', assignmentData.title);
    formData.append('description', assignmentData.description);
    formData.append('dueDate', assignmentData.dueDate);
    formData.append('courseId', assignmentData.courseId);
    formData.append('pdf', assignmentData.pdf);

    try {
      await axios.post('/api/teacher/add-assignment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Assignment added successfully!');
    } catch (error) {
      console.error('Error adding assignment:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Assignment</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={assignmentData.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={assignmentData.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={assignmentData.dueDate}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course ID</label>
          <input
            type="text"
            name="courseId"
            value={assignmentData.courseId}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
          <input
            type="file"
            name="pdf"
            onChange={handleFileChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Assignment
        </button>
      </form>
    </div>
  );
}

export default TeacherAssignment;