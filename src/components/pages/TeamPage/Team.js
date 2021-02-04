import React from "react";
import { Zeke_Team, Poppy } from "./DataTeam";
import { Zeke_TeamPage, Poppy_Forms } from "../../HeroSection";

function Team() {
  return (
    <>
      <Zeke_TeamPage {...Zeke_Team} />
      {/* <Poppy_Forms {...Poppy} /> */}
    </>
  );
}

export default Team;
