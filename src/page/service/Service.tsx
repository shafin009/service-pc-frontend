/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  const apiUrl = "http://localhost:5000/api/v1/service";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div>
      <h1 className="text-center fw-bold underline text-4xl p-10">
        All Services
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center p-5">
        <div className="join">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-2 lg:mb-0 lg:mr-2">
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="lg:pl-2">
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {services?.map((service: any) => (
          <div key={service?.id} className="w-full h-96">
            <div className="card h-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={service?.image}
                  alt=""
                  className="rounded-xl h-28 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service?.name}</h2>
                <div className="badge badge-secondary">
                  {service?.category.name}
                </div>
                <p className="text-sm font-bold">
                  Location: {service?.location}
                </p>
                <p className="text-xl font-bold">Price: {service?.price}</p>
                <p className="text-sm font-bold">
                  Availability: {service?.availability}
                </p>
                <div className="card-actions">
                  <Link to={`/service/${service?.id}`}>
                    <button className="btn btn-primary">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />

      <div className="flex justify-center flex-col md:flex-row mx-auto  p-2 w-full">
        <button className="flex mx-auto mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Add Service
        </button>
        <button className="flex mx-auto mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Update Service
        </button>
        <button className="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
          Delete Service
        </button>
      </div>

      <br />
    </div>
  );
};

export default Service;
