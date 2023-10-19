import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useUserSignupMutation } from "@/utility/authSlice";

type FormValues = {
  email: string;
  password: string;
  userName: string;
  phone: string;
  name: string;
  address: string;
};

const Signup: React.FC = () => {
  const [userSignup] = useUserSignupMutation();
  const navigate = useNavigate(); // Get the navigate function
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userSignup(data).unwrap();
      if (res) {
        toast.success("User Signed up successfully!");
        navigate("/login");

        reset();
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Sign up failed");
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col">
          <div className="text-center m-10">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  {...register("userName", { required: true })}
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Name input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Email input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Phone input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </div>
            </form>

            <h1 className="p-5 text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="font-bold text-red-600"> LOG IN</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Signup;
