import { useEffect, useState } from "react";
import SpotsCard from "./SpotsCard";

const AllTouristsSpots = () => {
  const [allSpotData, setAllSpotData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => {
        setAllSpotData(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-center text-3xl">
        All Tourists Spots : {allSpotData.length}
      </h3>
      <div className="grid grid-cols-2 ">
        {allSpotData.map((spotData) => (
          <SpotsCard key={spotData._id} spotData={spotData}></SpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpots;
