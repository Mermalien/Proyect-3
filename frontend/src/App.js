import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrincipalPage } from './pages/PrincipalPage';
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage';
import { PostPage } from './pages/PostPage';

function App() {
  return (
    <main>
      <Header/>
      <Routes>

        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>

      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
