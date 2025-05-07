import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Usuarios from './pages/users';
import Posts from './pages/posts';
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Usuarios />} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
