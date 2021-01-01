import "./index.css";
import { Button } from "@material-ui/core";

const Main = () => {
  return (
    <div>
      <h1>Hello, Andrew!</h1>
      <img
        width="480"
        src="http://localhost:5000/screenshot?url=https://www.oreilly.com"
      ></img>
      <br />
      <img
        width="480"
        src="http://localhost:5000/screenshot?url=https://www.google.com"
      ></img>
      <br />
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
};

export default Main;
