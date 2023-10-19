import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "@/utility/Loading";

const UpdateCategory = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = `https://pc-service-backends.vercel.app/api/v1/category/${id}`;
  const { register, handleSubmit, setValue } = useForm();
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Category details not found");
        }
        return response.json();
      })
      .then((data) => {
        setCategory(data.data);

        Object.keys(data.data).forEach((key) => {
          setValue(key, data.data[key]);
        });
      })
      .catch((error) => {
        console.error("Error fetching Category details:", error);
      });
  }, [apiUrl, setValue, navigate]);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Category updated successfully");
        navigate("/category");
        console.log(response);
      } else {
        const errorData = await response.json();
        console.error("Category update failed:", errorData);
        toast.error("Category update failed");
      }
    } catch (error) {
      console.error("Category update failed:", error);
      toast.error("Category update failed");
    }
  };

  if (category === null) {
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
                Add Category
              </button>
            </div>
            <br />

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Update Category</p>
                  <p>Please fill out the fields.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Category Name</label>
                        <input
                          type="text"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Category Name"
                          {...register("name")}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label>Category Description</label>
                        <input
                          type="text"
                          id="description"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("description")}
                          placeholder="Category Description"
                        />
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

export default UpdateCategory;
