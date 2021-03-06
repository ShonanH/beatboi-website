import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Team from "./components/pages/TeamPage/Team";
import Credits from "./components/pages/CreditsPage/Credits";
import BeatBoi from "./components/pages/BeatBoiPage/BeatBoi";
import DownloadBeatBoi from "./components/pages/DownloadPage/Download";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/credits" component={Credits} />
          <Route path="/beatboi" component={BeatBoi} />
          <Route path="/download" component={DownloadBeatBoi} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
