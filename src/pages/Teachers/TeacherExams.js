// import React, { useState, useEffect } from 'react';

// function TeacherExams() {
//   const [exams, setExams] = useState([]);

//   const fetchExams = async () => {
//     const response = await fetch('/api/teacher/exams');
//     const data = await response.json();
//     setExams(data.exams);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Similar logic to manage exams
//   };

//   useEffect(() => {
//     fetchExams();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl mb-6">Manage Exams</h2>
//       <ul>
//         {exams.map((exam, index) => (
//           <li key={index} className="border p-2 rounded mb-2">
//             {exam.examName} - Date: {exam.date}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TeacherExams;



// ManageExams.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherExams = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('/api/teacher/exams');
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };
    fetchExams();
  }, []);

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };

  const handleUpdateExam = async () => {
    try {
      await axios.put(`/api/teacher/update-exam/${selectedExam._id}`, selectedExam);
      alert('Exam updated successfully!');
    } catch (error) {
      console.error('Error updating exam:', error);
    }
  };

  const handleDeleteExam = async (examId) => {
    try {
      await axios.delete(`/api/teacher/delete-exam/${examId}`);
      setExams(exams.filter((exam) => exam._id !== examId));
      alert('Exam deleted successfully!');
    } catch (error) {
      console.error('Error deleting exam:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Manage Exams</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam._id} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{exam.examTitle}</span>
              <div>
                <button
                  onClick={() => handleExamClick(exam)}
                  className="mr-2 bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteExam(exam._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedExam && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Edit Exam</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Exam Title</label>
            <input
              type="text"
              name="examTitle"
              value={selectedExam.examTitle}
              onChange={(e) =>
                setSelectedExam({ ...selectedExam, examTitle: e.target.value })
              }
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={selectedExam.date}
              onChange={(e) => setSelectedExam({ ...selectedExam, date: e.target.value })}
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <button
            onClick={handleUpdateExam}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Update Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherExams;
