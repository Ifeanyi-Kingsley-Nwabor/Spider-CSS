import { Switch, Route } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tutorials from "./components/Tutorials";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/page">
          <Page />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/tutorials">
          <Tutorials />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
