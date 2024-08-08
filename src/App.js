import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AdminRegister from './components/AdminRegister';
import AdminSignin from './components/AdminSignin';

function App() {
  return (
    <div className="App">
       <Home/>
       <AdminRegister/>
       <AdminSignin/>
    </div>
  );
}

export default App;
