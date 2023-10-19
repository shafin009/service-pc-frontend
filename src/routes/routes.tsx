/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouteObject } from "react-router-dom";
import NotFound from "../page/NotFound";
import Footer from "../page/Footer";
import { Toaster } from "react-hot-toast";
import Login from "@/page/login/Login";
import Header from "@/page/Header";
import Signup from "@/page/login/Signup";
import Home from "./../page/Home";
import Service from "@/page/service/Service";
import ServiceDetails from "@/page/service/serviceDetails";
import ServiceByCategoryDetails from "@/page/service by category/ServiceByCategoryDetails";
import ServiceByCategory from "@/page/service by category/ServiceByCategory";
import FaqSection from "@/page/faq/FaqSection";
import BlogSection from "@/page/blog/BlogSection";
import UpdateService from "@/page/service/UpdateService";
import UpdateCategory from "@/page/service by category/UpdateCategory";
import Feedback from "@/page/feedback/Feedback";

const Router: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Header />
        <Signup />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/updateService/:id",
    element: (
      <>
        <Header />
        <UpdateService />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/updateCategory/:id",
    element: (
      <>
        <Header />
        <UpdateCategory />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Header />
        <BlogSection />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Header />
        <Service />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/category/:id",
    element: (
      <>
        <Header />
        <ServiceByCategoryDetails />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/faq",
    element: (
      <>
        <Header />
        <FaqSection />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <ServiceByCategory />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/feedback",
    element: (
      <>
        <Header />
        <Feedback />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/service/:id",
    element: (
      <>
        <Header />
        <ServiceDetails />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    ),
  },
];

const routes = createBrowserRouter(Router);

export default routes;
