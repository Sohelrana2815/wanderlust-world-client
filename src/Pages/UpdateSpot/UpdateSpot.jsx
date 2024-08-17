import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  const { id } = useParams();
  // console.log(id);
  const [singleSpot, setSingleSpot] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleSpot(data));
    console.log(data);
  }, [id]);
  const handleUpdateSpot = (e) => {
    e.preventDefault();

    const form = e.target;
    const touristSpot = form.touristSpot.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const season = form.season.value;
    const travelTime = form.travelTime.value;
    const visitor = form.visitor.value;
    const cost = form.cost.value;
    const photoURL = form.photoURL.value;
    const updatedSpot = {
      touristSpot,
      countryName,
      location,
      description,
      season,
      travelTime,
      visitor,
      cost,
      photoURL,
    };
    console.log(updatedSpot);
    fetch(`http://localhost:5000/updateSpot/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Spot updated!");
        }
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold">Update Tourist Spots</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
            <form onSubmit={handleUpdateSpot} className="card-body">
              <div className="flex flex-wrap">
                {/* First Column */}
                <div className="w-full md:w-1/2 px-2">
                  {/* spot name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tourist Spot Name</span>
                    </label>
                    <input
                      type="text"
                      name="touristSpot"
                      defaultValue={singleSpot.touristSpot}
                      placeholder="Enter tourist spot name"
                      className="input input-bordered"
                    />
                  </div>
                  {/* country */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Country Name</span>
                    </label>
                    <input
                      type="text"
                      name="countryName"
                      defaultValue={singleSpot.countryName}
                      placeholder="Enter country name"
                      className="input input-bordered"
                    />
                  </div>
                  {/* location */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={singleSpot.location}
                      placeholder="Enter location"
                      className="input input-bordered"
                    />
                  </div>
                  {/* description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Short description</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      defaultValue={singleSpot.description}
                      placeholder="Enter short description"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                {/* Second Column */}
                <div className="w-full md:w-1/2 px-2">
                  {/* seasonality */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seasonality</span>
                    </label>
                    <input
                      type="text"
                      name="season"
                      defaultValue={singleSpot.season}
                      placeholder="Enter seasonality"
                      className="input input-bordered"
                    />
                  </div>
                  {/* travel */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Travel time</span>
                    </label>
                    <input
                      type="text"
                      name="travelTime"
                      defaultValue={singleSpot.travelTime}
                      placeholder="Enter travel time"
                      className="input input-bordered"
                    />
                  </div>
                  {/* total visitor */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Total visitor per year</span>
                    </label>
                    <input
                      type="number"
                      name="visitor"
                      placeholder="Enter total visitor per year"
                      className="input input-bordered"
                    />
                  </div>
                  {/* Average cost */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Average Cost</span>
                    </label>
                    <input
                      type="number"
                      name="cost"
                      defaultValue={singleSpot.cost}
                      placeholder="Enter average cost"
                      className="input input-bordered"
                    />
                  </div>
                </div>
              </div>
              {/* Photo URL */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={singleSpot.photoURL}
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                />
              </div>

              {/* add btn */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Add tourist spot"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
