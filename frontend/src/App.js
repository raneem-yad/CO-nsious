import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/NavBar';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <h1>MainApp</h1>
      <hr />
      <Header />

      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='singup' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<Navigate to='/about' />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
