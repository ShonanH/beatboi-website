import React from "react";
import { BeatBoiPage_Img } from "../../HeroSection";
import { BeatBoi_Img } from "./BeatBoiData";

function BeatBoi() {
  return (
    <>
      <BeatBoiPage_Img {...BeatBoi_Img} />
    </>
  );
}

export default BeatBoi;
