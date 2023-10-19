/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceByCategoryDetails = () => {
  const [category, setCategory] = useState<any>(null); // Use 'any' as a type for category
  const { id } = useParams();
  const apiUrl = `https://pc-service-backends.vercel.app/api/v1/category/${id}`;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCategory(data.data))
      .catch((error) => console.error(error));
  }, [id, apiUrl]);

  const handleDeleteCategory = () => {
    Swal.fire({
      title: "Delete Item",
      text: "Are you sure you want to delete this category?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        fetch(`https://pc-service-backends.vercel.app/api/v1/category/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Category has been deleted.", "success");
              navigate("/service");
            } else {
              Swal.fire(
                "Error",
                "An error occurred while deleting the category.",
              );
            }
          })
          .catch((_error) => {
            Swal.fire(
              "Error",
              "An error occurred while deleting the category.",
            );
          });
      }
    });
  };

  return (
    <div>
      {category && (
        <div>
          <h1 className="text-center fw-bold underline text-4xl p-5">
            {category?.name} Category
          </h1>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {category?.service?.map(
              (
                service: any, 
              ) => (
                <div
                  key={service.id}
                  className="card lg:card-side bg-base-100 shadow-xl"
                >
                  <figure>
                    <img className="h-50" src={service.image} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{service.name}</h2>
                    <p className="text-sm">Price: ${service.price}</p>
                    <p className="text-sm">Location: {service.location}</p>
                    <p className="text-sm">
                      Availability: {service.availability}
                    </p>
                    <div className="card-actions justify-center">
                      <Link to={`/service/${service.id}`}>
                        <button className="btn btn-primary">See More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      <div className="flex justify-center flex-col md:flex-row mx-auto p-2 w-full">
        <button className="flex mx-auto mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover-bg-blue-600 rounded text-lg">
          Add Category
        </button>
        <Link to={`/updateCategory/${category?.id}`}>
          <button className="flex mx-auto mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover-bg-green-600 rounded text-lg">
            Update Category
          </button>
        </Link>
        <button
          onClick={handleDeleteCategory}
          className="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover-bg-red-600 rounded text-lg"
        >
          Delete Category
        </button>
      </div>
    </div>
  );
};

export default ServiceByCategoryDetails;
