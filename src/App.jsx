import Header from "./components/header/header.jsx";
import './App.css';
import HomePage from "./pages/client-page/homePage.jsx";
import AdminPage from "./pages/adminpage/admin.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "./components/test/test.jsx";
import LoginPage from "./pages/login/login.jsx";
import CategoriesPage from "./pages/client-page/categories.jsx";

function App() {
  
  return (
    <BrowserRouter>
    <Routes path="/*">

    
    
    <Route path="/admin/*" element={<AdminPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/categories" element= {<CategoriesPage/>}/>
    <Route path="/" element={<HomePage/>}/>
   </Routes>
    
    </BrowserRouter>
  );
}

export default App;
