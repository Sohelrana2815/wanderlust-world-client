import { Link } from "react-router-dom";

const TouristSpotsCard = ({ touristSpot }) => {
  // //
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
  const { name, photoURL, countryName, description, _id } = touristSpot;

  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={photoURL} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{countryName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouristSpotsCard;
