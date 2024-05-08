import React from "react";
import "./../home/home.css";
import Slider from "../../slider/Slider";
import About from "../about/About";
import MissionVision from "../missionVision/MissionVision";
import Testimonials from "../../testimonials/Testimonials";
import Count from "../../countingNumber/Count";
import SupportUs from "../../supportUs/SupportUs";
import CoverBanner from "../../cover/CoverBanner";

const Home = () => {
  return (
    <>
      <div className="home_container">
       <div className="slider_componet"><Slider/></div>
       <div className="count_components container"><Count/></div>
       <div className="about_component container"><About/></div>
       <div className="missionVision "><MissionVision/></div>
       {/* <div className="testimonilas_components "><Testimonials/></div> */}
       <div className="coverBanner_component"><CoverBanner/></div>
       <div className="support_component container"><SupportUs/></div>
   
      </div>
    </>
  );
};

export default Home;
