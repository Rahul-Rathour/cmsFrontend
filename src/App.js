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
import Assignment from './pages/Admin/Assignment';
import Announcement from './pages/Admin/Announcement';
import './dash.css';
import Students from './pages/Admin/Students';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="choose" element={<ChooseUser/>}/>
          <Route path="Dashboard" element={<Dashboard/>}/>
          <Route path="Sidebar" element={<Sidebar/>}/>
          <Route path="Announcement" element={<Announcement/>}/>
          <Route path="Assignment" element={<Assignment/>}/>
          <Route path="Attendence" element={<Attendence/>}/>
          <Route path="Students" element={<Students/>}/>

        </Routes>
       </Router>
    </div>
  );
}

export default App;
