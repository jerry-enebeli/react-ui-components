import React from "react";
import { Button } from "./components/index";
import "./styles/globals.scss";

export default function App() {
  return (
    <div className="App">
      <h4>Buttons</h4>
      <section className="container">
        <Button> Default </Button>
        <Button disabled> Disabled </Button>
        <Button type="primary"> Primary </Button>
        <Button type="danger"> Primary </Button>
        <Button type="dashed"> Dashed </Button>
        <Button type="dashed" shape="round">A</Button>
        <Button type="primary" shape="round">CR</Button>
      </section>
    </div>
  );
}
