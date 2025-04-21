import "./App.css";
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HomeGallery from "./components/HomeGallery/HomeGallery";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };
  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <main>
        <Banner />
        <HomeGallery searchTerm={searchTerm} />
      </main>
    </>
  );
}

export default App;
