import { Fragment } from "react";
import { NavigationBar, Banner, Content, Contact, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Banner />
      <Content />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
