import computer from "@/assets/computers.jpg";

const HomeFirst = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt=""
              src={computer}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              Hello There ! <br />
            </h3>
            <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
              "Welcome to PC Surgeons,
            </h3>
            <p className="mb-8 leading-relaxed">
              Your trusted destination for top-tier PC services. We specialize
              in diagnosing and repairing all your computer ailments swiftly and
              efficiently. At PC Surgeons, your satisfaction is our priority,
              and we take pride in being your go-to tech healing hub. Experience
              the difference with us today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFirst;
