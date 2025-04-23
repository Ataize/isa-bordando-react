import "./App.css";
// import { useState } from "react";
// import Banner from "./components/Banner/Banner";
// import Header from "./components/Header/Header";
// import HomeGallery from "./components/HomeGallery/HomeGallery";
// import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };
  return (
    <>
      <Header onSearchChange={handleSearchChange} />

      <main>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
