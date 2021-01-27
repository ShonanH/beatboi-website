import React from "react";
import {
  Kim_HomePage,
  BeatBoi_HomePage,
  Download_HomePage,
} from "../../HeroSection";
import { BeatBoi_Home, Kim_Home, Download_Home } from "./HomeData";

function Home() {
  return (
    <>
      <Kim_HomePage {...Kim_Home} />
      <Download_HomePage {...Download_Home} />
      <BeatBoi_HomePage {...BeatBoi_Home} />
    </>
  );
}

export default Home;
