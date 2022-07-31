import { Fragment } from "react";
import "./App.css";
import Container from "./components/Container";
import AddBtn from "./components/AddBtn";
import Form from "./components/Form";

function App() {
  return (
    <Fragment>
      <AddBtn />

      <br />
      <br />
      <br />

      <Container />

      <br />
      <br />

      <Form />
    </Fragment>
  );
}

export default App;
