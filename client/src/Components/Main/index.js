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
      <Screenshot src="http://localhost:5000/screenshot?url=https%3A%2F%2Flearning.oreilly.com%2Flibrary%2Fview%2Fmicroservices-up-and%2F9781492075448%2Fch01.html%23what-are-microservices%3A~%3Atext%3DWhat%2520Are%2520Microservices%253F%2Cdesign%2520for%2520failure%252C%2520and%2520evolutionary%2520design." />
      <br />
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
};

export default Main;
