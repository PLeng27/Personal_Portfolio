"use client";

import React from "react";
import Image from "next/image";
import "./homepage.css";

const Homepage: React.FC = () => {
  return (
    <main className="homepage-main" id="MyHome">
      <div className="hero-section">
        <div className="box-left">
          <h1 className="myname">Nam Ngorn Leng</h1>
          <hr />
          <h3 className="myposition">
            IT .NET Developer
          </h3>

          <p className="mylocation">
            Based in{" "}
            <u
              className="mylocation-underline"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Phnom+Penh/@11.5796538,104.7250314,11z",
                  "_blank"
                )
              }
            >
              Phnom Penh, Cambodia{" "}
              <Image
                src="/img/map-pin.png"
                alt="Map Pin"
                width={25}
                height={25}
                className="map-pin"
              />
            </u>
          </p>

          <div className="introme-section">
            <button
              type="button"
              className="btn btn-link-personalemail"
              onClick={() =>
              window.open("https://mail.google.com/mail/?view=cm&to=ngornlengnam@gmail.com", "_blank")
            }
            >
              <Image
                src="/img/personalemail_icon.png"
                alt="Personal Email Icon"
                width={30}
                height={30}
                className="personalemail-icon"
              />
            </button>

            <button
              type="button"
              className="btn btn-link-linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/pleng27/", "_blank")
              }
            >
              <Image
                src="/img/linkedin_icon.png"
                alt="LinkedIn Icon"
                width={30}
                height={30}
                className="linkedin-icon"
              />
            </button>

            <button
              type="button"
              className="btn btn-link-github"
              onClick={() =>
                window.open("https://github.com/PLeng27", "_blank")
              }
            >
              <Image
                src="/img/github_icon.png"
                alt="GitHub Icon"
                width={30}
                height={30}
                className="github-icon"
              />
            </button>
          </div>
        </div>

        <div className="box-right">
          <Image
            src="/img/LengProfile.jpg"
            alt="Personal Profile"
            width={220}
            height={290}
            className="profile-img"
          />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
