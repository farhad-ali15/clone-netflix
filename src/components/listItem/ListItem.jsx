import "./ListItem.scss";
import movie6 from "../../images/movie6.png";
import split1 from "../../video/split1.mov";
import {
  Add,
  PlayCircleFilledWhiteOutlined,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import { useState } from "react";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie6} alt="movies" />
      {isHovered && (
        <>
          <video src={split1} autoPlay={true} loop controls />
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleFilledWhiteOutlined className="icon" />
              <Add className="icon" />
              <ThumbUpAlt className="icon" />
              <ThumbDownAlt className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 Hour 14 Min</span>
              <span className="limit">+16</span>
              <span>2016</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ex nam debitis temporibus harum, doloribus, sed ipsam quibusdam
            </div>
            <div className="genre">Thriller</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
