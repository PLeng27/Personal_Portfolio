import React from "react";
import Image from "next/image"; // ✅ Next.js image optimization
// @ts-ignore
import "./about.css";
// import "../../../styles/bootstrap.min.css";
// import image from "../../public/img/LengProfile.jpg";
const About: React.FC = () => {
  return (
    <main className="aboutme-container" id="AboutMe">
      <form className="aboutme-form">
        {/* Contact Information */}
        <fieldset className="aboutme-fieldset">
          <div className="aboutme-legend">
            <div className="highlight-info">
              <h2>
                <u>About Me</u>
              </h2>
            </div>
          </div>
          <div className="p-aboutme">
            Hello, I am Leng, a passionate .NET Developer focused on
            architecting scalable, high-performance applications with{" "}
            <strong>
              <span className="csharp-skill-container">
                <img
                  src="/img/CSharp.png"
                  alt="CSharp Logo"
                  className="about-logo"
                />
                <span className="boldhighlightcsharp">C#</span>
              </span>
              {" "}and{" "}
              <span className="aspnet-skill-container">
                <img
                  src="/img/AspNetCore.png"
                  alt="ASP.NET Core Logo"
                  className="about-logo"
                />
                <span className="boldhighlightaspnet">ASP.NET Core</span>
              </span>
            </strong>
            . During my time at my current role, I fairly also come across experiences in building web
            applications using modern technologies like{" "}
            <strong>
              {/* REACT (Spin Effect - Confirmed Working) */}
              <span className="react-skill-container">
                <img
                  src="/img/react_logo.png"
                  alt="React Logo"
                  className="about-logo"
                />
                <span className="boldhighlightreact">React</span>
              </span>
              , {/* TYPESCRIPT (Scale Up Effect) - Corrected Structure */}
              <span className="typescript-skill-container">
                <img
                  src="/img/typescript_logo.png"
                  alt="TypeScript Logo"
                  className="about-logo"
                />
                <span className="boldhighlighttps">TypeScript</span>
              </span>
            </strong>{" "}
            and{" "}
            <strong>
              {/* NODE.JS (Pulse Effect) - Corrected Structure (Used 'about-logo' for consistency) */}
              <span className="nodejs-skill-container">
                <img
                  src="/img/nodejs_logo.png"
                  alt="Nodejs Logo"
                  className="about-logo"
                />
                <span className="boldhighlightndjs">Node.js </span>
              </span>
            </strong>
            with quite a bit of skill with AI Prompt to build a timely and cost-efficient applications. 
            I enjoy solving complex problems and continuously learning new skills.
            <br />
            <br />I take pride in emphasizing the design of efficient system
            architectures and collaborating with teams to deliver high-quality
            products. Beyond coding, I'm deeply interested in understanding how
            technology can improve user experiences and make a real impact. I'm
            always eager to take on new challenges, contribute to meaningful
            projects, and grow both technically and professionally.
          </div>
        </fieldset>
      </form>

    </main>
  );
};

export default About;
