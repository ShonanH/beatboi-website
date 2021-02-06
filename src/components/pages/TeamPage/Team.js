import React from "react";
import { Zeke_Team } from "./DataTeam";
import { Zeke_TeamPage } from "../../HeroSection";

function Team() {
  return (
    <>
      <Zeke_TeamPage {...Zeke_Team} />
    </>
  );
}

export default Team;
