import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HomeGallery from "./components/HomeGallery/HomeGallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <HomeGallery />
      </main>
    </>
  );
}

export default App;
