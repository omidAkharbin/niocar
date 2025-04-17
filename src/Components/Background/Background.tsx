import classes from "./Background.module.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image4.jpg";
import image2 from "../../assets/image1.png";
import image3 from "../../assets/image6.jpg";
import {BackgroundProps} from "../../types";

const Background = (props: BackgroundProps) => {
  return (
    <>
      {props.playStatepas && (
        <video
          className={`${classes.backVedio} ${classes["fade-in"]}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
        </video>
      )}
      {!props.playStatepas && (
        <img
          src={
            props.heroCountpas === 1
              ? image1
              : props.heroCountpas === 2
              ? image2
              : image3
          }
          className={classes.backVedio}
          alt="background"
        />
      )}
    </>
  );
};

export default Background;
