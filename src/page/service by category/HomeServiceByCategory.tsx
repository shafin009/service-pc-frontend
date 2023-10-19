/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeServiceByCategory = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = "http://localhost:5000/api/v1/category";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCategories(data.data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center fw-bold underline text-4xl p-5">
          Service by Category
        </h1>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          {categories?.map((category: any) => (
            <div key={category?.id} className="w-full h-96">
              <div className="card h-full bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    Category Name: {category?.name}
                  </h2>

                  <p className="text-sm">
                    Description: {category?.description}
                  </p>

                  <div className="card-actions">
                    <Link to={`/category/${category?.id}`}>
                      <button className="btn btn-primary">See services</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServiceByCategory;
