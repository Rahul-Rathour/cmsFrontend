import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AdminRegister from './components/AdminRegister';
import AdminSignin from './components/AdminSignin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentSignin from './components/StudentSignin';
import Sidebar from './pages/Admin/Sidebar';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path = '/' element = {<Home/>}/>
    //     <Route path = '/admin/register' element = {<AdminRegister/>}/>
    //     <Route path = '/admin/signin' element = {<AdminSignin/>}/>
    //     <Route path = '/student/signin' element = {<StudentSignin/>}/>
    //   </Routes>
    // </Router>
    <Sidebar/>
  )
}

export default App;
