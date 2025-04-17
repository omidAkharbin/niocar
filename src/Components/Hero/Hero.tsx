import {useNavigate} from "react-router-dom";
import classes from "./Hero.module.css";
import arrowbtn from "../../assets/arrow_btn.png";
import playicon from "../../assets/play_icon.png";
import pauseicon from "../../assets/pause_icon.png";
import {HeroProps} from "../../types";

const Hero = ({
  setPlayState,
  setheroCount,
  PlayState,
  heroCount,
  heroData,
}: HeroProps) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/features");
  };

  const activeDotStyle = {
    backgroundColor: "#f4a261",
  };

  return (
    <div className={classes.hero}>
      <div className={classes["hero-text"]}>
        <p>
          {heroData.text1} <span>{heroData.text2}</span>
        </p>
        <div className={classes["hero-subtext"]}>
          Experience the perfect fusion of luxury, innovation, and performance.
        </div>
      </div>
      <div className={classes["hero-explore"]} onClick={handleExploreClick}>
        <p>explore features</p>
        <img src={arrowbtn} alt="explore" />
      </div>
      <div className={classes["hero-dot-play"]}>
        <ul className={classes["hero-dots"]}>
          <li
            onClick={() => setheroCount(0)}
            style={heroCount === 0 ? activeDotStyle : undefined}
          ></li>
          <li
            onClick={() => setheroCount(1)}
            style={heroCount === 1 ? activeDotStyle : undefined}
          ></li>
          <li
            onClick={() => setheroCount(2)}
            style={heroCount === 2 ? activeDotStyle : undefined}
          ></li>
        </ul>
        <div className={classes["hero-play"]}>
          <img
            onClick={() => setPlayState(!PlayState)}
            src={PlayState ? pauseicon : playicon}
            alt={PlayState ? "pause" : "play"}
          />
          <p>{PlayState ? "pause video" : "see the video"}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
