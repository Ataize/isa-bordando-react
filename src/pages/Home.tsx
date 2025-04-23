import Banner from "../components/Banner/Banner";
import HomeGallery from "../components/HomeGallery/HomeGallery";

interface HomeProps {
  searchTerm: string;
}

const Home = ({ searchTerm }: HomeProps) => {
  return (
    <>
      <Banner />
      <HomeGallery searchTerm={searchTerm} />
    </>
  );
};

export default Home;
