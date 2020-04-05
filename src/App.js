import React from "react";
import { Button, Breadcrumb } from "./components/index";
import "./styles/globals.scss";

export default function App() {
  return (
    <div className="App">
      <div>
        <h4>Buttons</h4>
        <section className="container">
          <Button> Default </Button>
          <Button disabled> Disabled </Button>
          <Button type="primary"> Primary </Button>
          <Button type="danger"> Danger </Button>
          <Button type="dashed"> Dashed </Button>
          <Button type="dashed" shape="round">
            A
          </Button>
          <Button type="primary" shape="round">
            CR
          </Button>
        </section>
      </div>

      <div>
        <h4>BreadCrumb</h4>
        <section className="container">
          <Breadcrumb.Breadcrumb>
            <Breadcrumb.Items name="Home" link="#"></Breadcrumb.Items>
            <Breadcrumb.Items name="User" link="#"></Breadcrumb.Items>
            <Breadcrumb.Items name="Profile" link="#"></Breadcrumb.Items>
          </Breadcrumb.Breadcrumb>

          <Breadcrumb.Breadcrumb separator=">">
            <Breadcrumb.Items name="Home" link="#"></Breadcrumb.Items>
            <Breadcrumb.Items name="User" link="#"></Breadcrumb.Items>
            <Breadcrumb.Items name="Profile" link="#"></Breadcrumb.Items>
          </Breadcrumb.Breadcrumb>
        </section>
      </div>
    </div>
  );
}
