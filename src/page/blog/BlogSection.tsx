/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const BlogSection = () => {
  const [blogs, setBlog] = useState([]);
  const apiUrl = "http://localhost:5000/api/v1/blog";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBlog(data.data));
  }, []);

  return (
    <div>
      <h1 className="text-center fw-bold underline text-lg lg:text-4xl p-10">
        Blogs
      </h1>

      <div>
        {blogs?.map((blog: any) => (
          <section
            key={blog.id}
            className="text-gray-600 body-font overflow-hidden"
          >
            <div className="container px-5 py-12 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      CATEGORY
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-xl leading-relaxed font-semi-bold">
                      {blog.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <br />

      <div className="flex justify-center flex-col md:flex-row mx-auto  p-2 w-full">
        <button className="flex mx-auto mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Add Blog
        </button>
        <button className="flex mx-auto mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Update Blog
        </button>
        <button className="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
          Delete Blog
        </button>
      </div>
      <br />
    </div>
  );
};

export default BlogSection;
