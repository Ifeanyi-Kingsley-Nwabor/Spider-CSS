import { Switch, Route } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tutorials from "./components/Tutorials";
// import NavBar from "./components/NavBar";
import Navigation from "./components/Navigation";
import CssFrameworks from "./components/CssFrameworks";
import CssPlatform from "./components/CssPlatform";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        {/* <NavBar /> */}
        <Navigation />
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
        <Route exact path="/frameworks">
          <CssFrameworks />
        </Route>
        <Route exact path="/platforms">
          <CssPlatform />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
