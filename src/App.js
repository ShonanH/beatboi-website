import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Team from "./components/pages/TeamPage/Team";
import Credits from "./components/pages/CreditsPage/Credits";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/credits" component={Credits} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
