import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Signup from './components/Signup';
import Login from "./pages/Login"
import Home from "./pages/Home"
import { ProSidebarProvider } from 'react-pro-sidebar';


function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
