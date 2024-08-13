// harshita
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {  BrowserRouter as Router,
  Route, Routes } from 'react-router-dom';
import ChooseUser from './components/ChooseUser';
import Dashboard from './pages/Admin/Dashboard';
import Sidebar from './pages/Admin/Sidebar';
import Attendence from './pages/Admin/Attendence';
import Announcement from './pages/Admin/Announcement';
import './dash.css';
import Students from './pages/Admin/Students';
import Classes from './pages/Admin/Classes';
import Teachers from './pages/Admin/Teachers';
import EventCalender from './pages/Admin/EventCalender';
import './calender.css';
import SettingsProfile from './pages/Admin/SettingsProfile';


import StudentDashboard from './pages/Student/StudentDashboard';
import StudentSidebar from './pages/Student/StudentSidebar';
import Assignments from './pages/Student/Assignments';
import StudentAnnouncement from './pages/Student/StudentAnnouncement';
import StudentProfile from './pages/Student/StudentProfile';
import StudentLibrary from './pages/Student/StudentLibrary';
import Exam from './pages/Student/Exam';

import TeacherSidebar from './pages/Teachers/TeacherSidebar';
import TeacherDashboard from './pages/Teachers/TeacherDashboard';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/choose" element={<ChooseUser/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/Sidebar" element={<Sidebar/>}/>
          <Route path="/admin/Announcement" element={<Announcement/>}/>
          <Route path="/admin/Students" element={<Students/>}/>
          <Route path="/admin/Classes" element={<Classes/>}/>
          <Route path="/admin/Teachers" element={<Teachers/>}/>
          <Route path="/admin/EventCalender" element={<EventCalender/>}/>
          <Route path="/admin/SettingsProfile" element={<SettingsProfile/>}/>



          <Route path="/teacher/TeacherDashboard" element={<TeacherDashboard/>}/>
          <Route path="/teacher/TeacherSidebar" element={<TeacherSidebar/>}/>








          <Route path="/student/Studentdashboard" element={<StudentDashboard/>}/>
          <Route path="/student/StudentSidebar" element={<StudentSidebar/>}/>
          <Route path="/student/Assignments" element={<Assignments/>}/>
          <Route path="/student/StudentAnnouncement" element={<StudentAnnouncement/>}/>
          <Route path="/student/StudentProfile" element={<StudentProfile/>}/>
          <Route path="/student/StudentLibrary" element={<StudentLibrary/>}/>
          <Route path="/student/Exam" element={<Exam/>}/>





        </Routes>
       </Router>
    </div>
  );
}

export default App;
