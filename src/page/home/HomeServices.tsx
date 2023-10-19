/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeServices = () => {
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
        Available Services
      </h1>

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
    </div>
  );
};

export default HomeServices;
