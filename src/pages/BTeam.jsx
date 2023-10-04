import React from "react";
import "../Design/team.css";
import SingleTeamMember from "./SingleTeamMember";
import { KanlyteTeam } from "../store/OtherData";

const BTeam = () => {
  return (
    <section class="team">
      <div class="center">
        <h1>Our Team</h1>
      </div>
      <div className="team-content">
        {KanlyteTeam?.map((item, index) => {
          return <SingleTeamMember key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default BTeam;
