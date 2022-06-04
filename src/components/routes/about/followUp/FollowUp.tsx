import React from 'react';

import github from '../../../../assets/images/github.svg';
import linkedin from '../../../../assets/images/linkedin.svg';
import personal from '../../../../assets/images/personal.svg';

function FollowUp():JSX.Element {
  return (
    <div className="follow-up">
      <ul className="social-media-list">
        <li className="social-media-item">
          <a
            href="https://bit.ly/3mkLBil"
            target="_blank"
            className="social-media-link"
            rel="noreferrer"
          >
            <img src={github} alt="Github page" />
          </a>
        </li>
        <li className="social-media-item">
          <a
            href="https://bit.ly/3thb8gl"
            target="_blank"
            className="social-media-link"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn page" />
          </a>
        </li>
        <li className="social-media-item">
          <a
            href="https://bit.ly/3Nijs7F"
            target="_blank"
            className="social-media-link"
            rel="noreferrer"
          >
            <img src={personal} alt="Graphic Design portfolio" />
          </a>
        </li>
      </ul>
      <p className="profile-copyright">Copyright&copy; Ruben THOMAS / All Rights Reserved / 2022</p>
    </div>
  );
}

export default FollowUp;
