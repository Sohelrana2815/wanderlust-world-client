import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpots from "../TouristSpots/TouristSpots";

const Home = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);

  return (
    <>
      <div>
        <Banner />
        <TouristSpots />
      </div>
    </>
  );
};

export default Home;
