import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="body px-4 py-32 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-5 text-xl text-left text-rose-800 md:text-3xl uppercase">
            *Error 404*
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>

          <Link
            to="/"
            className="w-full mb-2 py-2 px-3 text-white mt-3 bg-orange-600 sm:w-auto sm:mb-0"
          >
            Back to Homepage
          </Link>
        </div>
        <div>
          <div className="w-full h-full bg-gray-300 rounded-lg">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
