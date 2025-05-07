import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Usuarios from './pages/users';
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
