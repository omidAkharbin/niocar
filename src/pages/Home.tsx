import React, {ReactNode} from "react";

import "./pages.css";

interface HomeProps {
  children: ReactNode;
}

const Home = (props: HomeProps) => {
  return <div className="home-container">{props.children}</div>;
};

export default Home;
