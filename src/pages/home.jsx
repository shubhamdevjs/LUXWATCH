import HeroSection from '../Components/HeroSection/HeroSection';
import FeaturedCollection from '../Components/FeaturedCollection/FeaturedCollection';
import ExploreBrandsSection from '../Components/Brands/Brands';
const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
        
      <div >
        <FeaturedCollection />
      </div> 
      <ExploreBrandsSection />
    </>
  );
};

export default Home;

