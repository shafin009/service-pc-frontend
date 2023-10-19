/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "@/utility/Loading";
import jwtDecode from "jwt-decode";

const UpdateService = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = `https://pc-service-backends.vercel.app/api/v1/service/${id}`;
  const { register, handleSubmit, setValue } = useForm();
  const [service, setService] = useState(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/login");
      return;
    }

    const verifiedUser = jwtDecode(accessToken);

    if (!verifiedUser) {
      navigate("/login");
      return;
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Service details not found");
        }
        return response.json();
      })
      .then((data) => {
        setService(data.data);

        Object.keys(data.data).forEach((key) => {
          setValue(key, data.data[key]);
        });
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
        // Handle the error, e.g., show an error message
      });
  }, [apiUrl, setValue, navigate]);

  const onSubmit = async (data: any) => {
    data.price = parseFloat(data.price);

    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Service updated successfully");
        navigate("/service");
        console.log(response);
      } else {
        const errorData = await response.json();
        console.error("Service update failed:", errorData);
        toast.error("Service update failed");
      }
    } catch (error) {
      console.error("Service update failed:", error);
      toast.error("Service update failed");
    }
  };

  if (service === null) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="flex lg:justify-start justify-center items-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Add Service
              </button>
            </div>
            <br />

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Update Service</p>
                  <p>Please fill out the fields.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Service Name</label>
                        <input
                          type="text"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Service Name"
                          {...register("name")}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label>Service Image</label>
                        <input
                          type="text"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("image")}
                          placeholder="Image URL"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label>category Id</label>
                        <input
                          type="text"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("categoryId")}
                          placeholder="Image URL"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label>Service Description</label>
                        <input
                          type="text"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("description")}
                          placeholder="Service Description"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label>Availability</label>
                        <input
                          type="text"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Yes/None"
                          {...register("availability")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label>Service Price</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            type="number"
                            id="state"
                            {...register("price")}
                            placeholder="Service Price"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label>Location</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            id="state"
                            {...register("location")}
                            placeholder="Address"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
