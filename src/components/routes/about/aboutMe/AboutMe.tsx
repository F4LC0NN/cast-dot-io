import React from 'react';

function AboutMe():JSX.Element {
  return (
    <div className="about-me">
      <div className="profile-container">
        <img
          src="https://bit.ly/3NVRpuq"
          alt="My profile"
          className="profile"
        />
      </div>
      <p>Hi, I am Ruben!</p>
      <p>I am a self-taught Frontend developer.</p>
      <p>I have been teaching myself coding for 1 year now & and I love it!</p>
      <p>I started at 2021, and I have learned a lot since then.</p>
      <p>
        Frontend is great because it allows me to express my creativity.
        And, I love to build a project from scratch.

      </p>
      <p>
        My goal is to create a SaaS that gives any startups
        to start with zero capital whatsoever.
      </p>
      <p>I still have a long way to go, but I am determined to fulfill this goal.</p>
      <p>I you like this project and want to work together, feel free to contact me</p>
      <p>I am looking forward to make your project a success!</p>
      <p>See you soon!</p>
    </div>
  );
}

export default AboutMe;
