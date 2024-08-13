// harshita
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChooseUser from './components/ChooseUser';
import Sidebar from './pages/Admin/Sidebar';
import Attendence from './pages/Admin/Attendence';
import Assignment from './pages/Admin/Assignment';
import Announcement from './pages/Admin/Announcement';
import './dash.css';
import Students from './pages/Admin/Students';
import AdminDashboard from './pages/Admin/Dashboard';
import Classes from './pages/Admin/Classes';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/choose" element={<ChooseUser/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/announcement" element={<Announcement/>}/>
          <Route path="/assignment" element={<Assignment/>}/>
          <Route path="/attendence" element={<Attendence/>}/>
          <Route path="/students" element={<Students/>}/>




          <Route path="/class" element={<Classes/>}/>

        </Routes>
       </Router>
    </div>
  );
}

export default App;
