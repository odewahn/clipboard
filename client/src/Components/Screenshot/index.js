import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

// Shows a spinner until an image loads
// See https://stackoverflow.com/questions/56902522/react-show-loading-spinner-while-images-load
const Main = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div style={{ display: loading ? "block" : "none" }}>
        <CircularProgress />
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        <img width="480" src={props.src} onLoad={() => setLoading(false)} />
      </div>
    </div>
  );
};

export default Main;
