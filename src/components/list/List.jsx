import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./List.scss";
import ListItem from "..//listItem/ListItem";
import { useRef, useState } from "react";

function List() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${236 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 5) {
      listRef.current.style.transform = `translateX(${-236 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue To Watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow  right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
