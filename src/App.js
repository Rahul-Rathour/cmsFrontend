// harshita 9:20
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChooseUser from './components/ChooseUser';
import Sidebar from './pages/Admin/Sidebar';
import Attendence from './pages/Admin/Attendence';
import Announcement from './pages/Admin/Announcement';
import AdminDashboard from './pages/Admin/Dashboard'
import './dash.css';
import Students from './pages/Admin/Students';
import Classes from './pages/Admin/Classes';
import Teachers from './pages/Admin/Teachers';
import EventCalender from './pages/Admin/EventCalender';
import './calender.css';
import SettingsProfile from './pages/Admin/SettingsProfile';
import AdminLibrary from './pages/Admin/Library';
import AdminSignin from './components/AdminSignin';
import AdminRegister from './components/AdminRegister'
import StudentSignin from './components/StudentSignin';
import TeacherSignin from './components/TeacherSignin'

import StudentDashboard from './pages/Student/StudentDashboard';
import StudentSidebar from './pages/Student/StudentSidebar';
import Assignments from './pages/Student/Assignments';
import StudentAnnouncement from './pages/Student/StudentAnnouncement';
import StudentProfile from './pages/Student/StudentProfile';
import StudentLibrary from './pages/Student/StudentLibrary';
import Exam from './pages/Student/Exam';


import TeacherSidebar from './pages/Teachers/TeacherSidebar';
import TeacherDashboard from './pages/Teachers/TeacherDashboard';
import TeacherAnnouncement from './pages/Teachers/TeacherAnnouncement';
import TeacherAttendence from './pages/Teachers/TeacherAttendence';
import TeacherAssignment from './pages/Teachers/TeacherAssignment';
import TeacherProfile from './pages/Teachers/TeacherProfile';
import TeacherLibrary from './pages/Teachers/TeacherLibrary';
import TeacherEventCalender from './pages/Teachers/TeacherEvents';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/choose" element={<ChooseUser/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/> 
          <Route path="/admin/sidebar" element={<Sidebar/>}/>
          <Route path="/admin/announcement" element={<Announcement/>}/>
          <Route path="/admin/students" element={<Students/>}/>
          <Route path="/admin/classes" element={<Classes/>}/>
          <Route path="/admin/teachers" element={<Teachers/>}/>
          <Route path="/admin/event" element={<EventCalender/>}/>
          <Route path="/admin/profile" element={<SettingsProfile/>}/>
          <Route path="/admin/library" element={<AdminLibrary/>}/>



          <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>
          <Route path="/teacher/sidebar" element={<TeacherSidebar/>}/>
          <Route path="/teacher/announcement" element={<TeacherAnnouncement/>}/>
          <Route path="/teacher/attendence" element={<TeacherAttendence/>}/>
          <Route path="/teacher/assignment" element={<TeacherAssignment/>}/>
          <Route path="/teacher/profile" element={<TeacherProfile/>}/>
          <Route path="/teacher/library" element={<TeacherLibrary/>}/>
          <Route path="/teacher/event" element={<TeacherEventCalender/>}/>




          <Route path="/component/chooseuser" element={<ChooseUser/>}/>
          <Route path="/admin/signin" element={<AdminSignin/>}/>
          <Route path="/teacher/signin" element={<TeacherSignin/>}/>
          <Route path="/student/signin" element={<StudentSignin/>}/>




          <Route path="/student/dashboard" element={<StudentDashboard/>}/>
          <Route path="/student/sidebar" element={<StudentSidebar/>}/>
          <Route path="/student/assignment" element={<Assignments/>}/>
          <Route path="/student/announcement" element={<StudentAnnouncement/>}/>
          <Route path="/student/profile" element={<StudentProfile/>}/>
          <Route path="/student/library" element={<StudentLibrary/>}/>
          <Route path="/student/exam" element={<Exam/>}/>
          





        </Routes>
       </Router>
    </div>
  );
}

export default App;
