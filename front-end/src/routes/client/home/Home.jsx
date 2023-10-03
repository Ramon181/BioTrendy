import Hero from "../../../componets/client/home/hero/Hero";
import NewProducts from "../../../componets/client/home/newProducts/NewProducts";
import Slider from "../../../componets/client/home/slider/Slider";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
        <Slider/>
        <NewProducts/>
        <Hero/>
    </div>
  );
};

export default Home;
