import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useUserLoginMutation } from "@/utility/authSlice";
import { storeUserInfo } from "@/utility/authService";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
      const res = await userLogin(data).unwrap();
      console.log(res);
      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
        navigate("/");
        toast.success("User logged in successfully!");
      }
      console.log(res);
    } catch (error: any) {
      toast.error("Login failed");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center m-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-center">Login to your Account</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

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

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>

            <h1 className="p-5 text-center">
              No Account?{" "}
              <Link to="/signup" className="font-bold text-red-600">
                Sign Up here
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
