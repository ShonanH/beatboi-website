import React from "react";
import { Kiki_CreditsPage } from "../../HeroSection";
import { Kiki_Credits } from "./CreditsData";

function Credits() {
  return (
    <>
      <Kiki_CreditsPage {...Kiki_Credits} />
    </>
  );
}

export default Credits;
