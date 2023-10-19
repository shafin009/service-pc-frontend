/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from "react-router-dom";
import useServiceData from "./Hooks/ServiceDetailsParams";
import Loading from "./../../utility/Loading";
import Swal from "sweetalert2";
import { useDeleteServiceMutation } from "@/features/AllSlices/serviceApi";

const Service = () => {
  const { id } = useParams<{ id: string }>();
  const service = useServiceData(id);
  const navigate = useNavigate();
  const [deleteService] = useDeleteServiceMutation();
  //!
  const handleDeleteService = async (item: any) => {
    try {
      const result = await Swal.fire({
        title: "Delete Item",
        text: "Are you sure you want to delete this account?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      });

      if (result.isConfirmed) {
        const res = await deleteService(item.id);
        //@ts-ignore
        if (res?.data?.name) {
          Swal.fire("Deleted!", "Service has been deleted.", "success");
          navigate("/service");
        }
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while deleting the item.");
    }
  };

  if (!service) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      {service && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                src={service.image}
                alt=""
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-700 tracking-widest">
                  {service?.category.name}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {service?.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center text-xl">
                    Price: $ {service?.price}
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-xl">
                    Availability: {service?.availability}
                  </span>
                </div>

                <p className="leading-relaxed">{service?.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex items-center text-xl">
                    Location: {service?.location}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Booking Service
                  </button>
                  <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-5 mx-auto">
            <div className="flex justify-center ">
              <Link to={`/updateService/${service.id}`}>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Update Service
                </button>
              </Link>

              <button
                onClick={handleDeleteService}
                className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Delete Service
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Service;
