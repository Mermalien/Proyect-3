import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { PrincipalPage } from "./pages/PrincipalPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

import { NotFoundPage } from "./pages/NotFoundPage";

import { HomePostsPage } from "./pages/HomePostsPage";
import { PostPage } from "./pages/PostPage";

import { UserPage } from "./pages/UserPage";

import { AboutUsPage } from "./pages/AboutUsPage";
import { AdoptPage } from "./pages/AdoptPage";
import { AnimalsPlantsPage } from "./pages/AnimalsPlantsPage";
import { CuriositiesPage } from "./pages/CuriositiesPage";
import { NormativePage } from "./pages/NormativePage";
import { PetProductsPage } from "./pages/PetProductsPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;

  return children;
};

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/posts" element={<HomePostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />

        {/* <Route path="/users" element={<UserPage />} /> */}
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/adopta" element={<AdoptPage />} />
        <Route path="/curiosities" element={<CuriositiesPage />} />
        <Route path="/plants" element={<AnimalsPlantsPage />} />
        <Route path="/normativa" element={<NormativePage />} />
        <Route path="/petproducts" element={<PetProductsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
