import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const spots = useLoaderData();
  const { id } = useParams();

  const spot = spots.find((spot) => spot._id === id);

  console.log(spot, id);
  // name
  // "a"
  // touristSpot
  // "c"
  // countryName
  // "e"
  // location
  // "g"
  // description
  // "hello"
  // email
  // "bal@sal.com"
  // season
  // "d"
  // travelTime
  // "f"
  // visitor
  // "1000"
  // cost
  // "2000"
  // photoURL
  // "png"
  return (
    <div>
      <p className="text-3xl"> {spot.name}</p>
      <p>{spot.touristSpot}</p>
      <h3> {spot.countryName} </h3>
      <p>{spot.location}</p>
      <p>{spot.description}</p>
      <p>{spot.email}</p>
      <p>{spot.season}</p>
      <p>{spot.travelTime}</p>
      <p>{spot.visitor}</p>
      <p>{spot.cost}</p>
      <img src={spot.photoURL} />
    </div>
  );
};

export default ViewDetails;
