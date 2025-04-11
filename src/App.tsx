import "./App.css";
import Banner from "./components/Banner/Banner";
import CustomGallery from "./components/CustomGallery/CustomGallery";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CustomGallery />
      </main>
    </>
  );
}

export default App;
