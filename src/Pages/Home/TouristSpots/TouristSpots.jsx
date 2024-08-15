import { useEffect, useState } from "react";
import TouristSpotsCard from "./TouristSpotsCard";

const TouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
      });
  }, []);



  return (
    <>
      <h2>{touristSpots.length}</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        {touristSpots.map((touristSpot) => (
          <TouristSpotsCard
            key={touristSpot._id}
            touristSpot={touristSpot}
          ></TouristSpotsCard>
        ))}
      </div>
    </>
  );
};

export default TouristSpots;
