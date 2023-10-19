const AnotherExtraSection = () => {
  return (
    <div>
      <div className="hero container services my-20 min-h-screen">
        <div
          className="bg-cover bg-center h-full lg:h-screen"
          style={{
            backgroundImage:
              "url(https://static.wixstatic.com/media/11062b_be6507d7ec404982a384cb7bf4e082bc~mv2.jpg/v1/fit/w_5000,h_3750,al_c,q_90/11062b_be6507d7ec404982a384cb7bf4e082bc~mv2.jpg)",
          }}
        >
          <div className="lg:px-22 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <section className="text-white body-font">
                <div
                  data-aos="fade-down-right"
                  data-aos-duration="900"
                  className="container mx-auto flex px-5 md:flex-row flex-col items-center"
                >
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                      In our increasingly{" "}
                      <br className="hidden lg:inline-block" /> Digital World,
                    </h1>
                    <p className="mb-8 leading-relaxed">
                      Computers have become an essential part of our daily
                      lives. Whether you use them for work, entertainment, or
                      communication, having a well-maintained and efficient
                      computer is crucial. However, like any other piece of
                      technology, computers require regular service and
                      maintenance to ensure they continue to run smoothly. In
                      this article, we will explore the importance of PC service
                      and provide you with valuable tips to keep your computer
                      in optimal condition.
                    </p>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      className="object-cover object-center rounded"
                      alt=""
                      src="https://c1.wallpaperflare.com/preview/914/767/689/service-computers-repair-electronics.jpg"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherExtraSection;
