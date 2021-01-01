import "./index.css";
import { Button } from "@material-ui/core";
import Screenshot from "../Screenshot";

const Main = () => {
  return (
    <div>
      <h1>Hello, Andrew!</h1>
      <Screenshot src="http://localhost:5000/screenshot?url=https://www.oreilly.com" />
      <br />
      <Screenshot src="http://localhost:5000/screenshot?url=https://www.google.com" />
      <br />
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
};

export default Main;
