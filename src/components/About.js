import React from "react";
import Links from "./Links"

function About(props) {
    return (
      <div id="about">
        <h2>About Me</h2>
        {(props.bio !== "" &&  props.bio !== undefined) &&
        <p>{props.bio}</p>}
        <img bio="" src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin}></Links>
      </div>
    );
}

export default About;
