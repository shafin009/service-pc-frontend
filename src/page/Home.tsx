import AnotherExtraSection from "@/page/home/AnotherExtraSection";
import ExtraSection from "@/page/home/ExtraSection";
import HomeFirst from "@/page/home/HomeFirst";
import LatestNews from "@/page/home/LatestNews";
import Survey from "@/page/home/Survey";
import UpcomingService from "./upcoming Service/UpcomingService";
import HomeServices from "./home/HomeServices";
import HomeServiceByCategory from "./service by category/HomeServiceByCategory";

const Home = () => {
  return (
    <div>
      <HomeFirst />
      <HomeServices />
      <UpcomingService />
      <HomeServiceByCategory />
      <AnotherExtraSection />
      <Survey />
      <LatestNews />
      <ExtraSection />
    </div>
  );
};

export default Home;
