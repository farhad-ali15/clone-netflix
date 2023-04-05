import "./Featured.scss";
import backdrop from "..//../images/backdrop.png";
import movie4 from "..//../images/movie4.png";
import { InfoOutlined, PlayArrowRounded } from "@mui/icons-material";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={backdrop} alt="background" />
      <div className="info">
        <img src={movie4} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, placeat
          ut dolore voluptatem alias rem id obcaecati numquam illo iusto velit
          molestiae quae dignissimos impedit sequi culpa tempora deserunt error?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowRounded />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
