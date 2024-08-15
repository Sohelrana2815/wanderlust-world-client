import { useState } from "react";

const AddTouristsSpots = () => {
  const [formData, setFormData] = useState({
    name: "",
    touristSpot: "",
    countryName: "",
    location: "",
    description: "",
    email: "",
    season: "",
    travelTime: "",
    visitor: "",
    cost: "",
    photoURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // send data to the server

    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Tourist spot added");
        }
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold">Add Tourist Spots</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="flex flex-wrap">
                {/* First Column */}
                <div className="w-full md:w-1/2 px-2">
                  {/* photo */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {/* spot name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tourist Spot Name</span>
                    </label>
                    <input
                      type="text"
                      name="touristSpot"
                      placeholder="Enter tourist spot name"
                      className="input input-bordered"
                      value={formData.touristSpot}
                      onChange={handleChange}
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
                      placeholder="Enter country name"
                      className="input input-bordered"
                      value={formData.countryName}
                      onChange={handleChange}
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
                      placeholder="Enter location"
                      className="input input-bordered"
                      value={formData.location}
                      onChange={handleChange}
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
                      placeholder="Enter short description"
                      className="input input-bordered"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Second Column */}
                <div className="w-full md:w-1/2 px-2">
                  {/* average cost */}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/*  */}

                  {/* seasonality */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seasonality</span>
                    </label>
                    <input
                      type="text"
                      name="season"
                      placeholder="Enter seasonality"
                      className="input input-bordered"
                      value={formData.season}
                      onChange={handleChange}
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
                      placeholder="Enter travel time"
                      className="input input-bordered"
                      value={formData.travelTime}
                      onChange={handleChange}
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
                      value={formData.visitor}
                      onChange={handleChange}
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
                      placeholder="Enter average cost"
                      className="input input-bordered"
                      value={formData.cost}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* Photo */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  value={formData.photoURL}
                  onChange={handleChange}
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

export default AddTouristsSpots;
