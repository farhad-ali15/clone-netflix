import { ArrowBack } from "@mui/icons-material";
import "./Watch.scss";
import split1 from "../../video/split1.mov";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video
        className="video"
        autoPlay={true}
        loop
        controls
        progress
        src={split1}
      />
    </div>
  );
}

export default Watch;
