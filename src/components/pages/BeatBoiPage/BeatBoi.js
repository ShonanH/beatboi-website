import React from "react";
import { BeatBoi_GameIdeas, BeatBoi_GameScreenshots } from "../../HeroSection";
import { BeatBoi_Game, BeatBoi_Img } from "./BeatBoiData";
import ContactForm from "./BugForm";

function BeatBoi() {
  return (
    <>
      <BeatBoi_GameIdeas {...BeatBoi_Game} />
      <BeatBoi_GameScreenshots {...BeatBoi_Img} />
      <ContactForm />
    </>
  );
}

export default BeatBoi;
