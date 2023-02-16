import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { PrincipalPage } from './pages/PrincipalPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';

import { NotFoundPage } from "./pages/NotFoundPage";

import { PostPage } from './pages/PostPage';
import { AdoptPage } from './pages/AdoptPage';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>

        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>

        <Route path='/posts' element={<PostPage/>}/>
        <Route path='/adopta' element={<AdoptPage/>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
