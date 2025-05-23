import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Usuarios from './pages/users';
import Posts from './pages/posts';
import Albumes from './pages/albumes';
function App() {
 

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen pb-4 pl-5 pr-5'>
      <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Usuarios />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/albums" element={<Albumes />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
