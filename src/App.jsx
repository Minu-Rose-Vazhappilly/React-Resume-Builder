import './App.css'
import Button from '@mui/material/Button';
import { FaHome } from "react-icons/fa";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import UserForm from './Pages/UserForm';
import History from './Pages/History';
import ResumeGenerator from './Pages/ResumeGenerator';
import PageNotFound from './Pages/PageNotFound';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/form' element={<UserForm/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/resume' element={<ResumeGenerator/>}></Route>
        <Route path='/*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
