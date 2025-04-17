import React, {ReactNode} from "react";
import HomeIntro from "../Components/HomeIntro/HomeIntro";
import Models from "../Components/Models/Models";
import Testimonials from "../Components/Testimonials/Testimonials";
import "./pages.css";

interface HomeProps {
  children: ReactNode;
}

const Home = (props: HomeProps) => {
  return (
    <div className="home-container">
      {props.children}
      {/* <HomeIntro /> */}
      {/* <Models /> */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
