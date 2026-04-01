import React from "react";
import "../../../public/style/bootstrap.min.css";
import "./myskills.css";

const MySkills: React.FC = () => {
  return (
    <main className="myskills-main" id="MySkills">
      <div>
        <h2 className="heading-skill">
          Skills
        </h2>
        <ul className="text-skill">
          {/* C# Skill — change width % below to adjust your skill level */}
          <li className="skill-item">
            <img
              src="/img/CSharp.png"
              alt="CSharp Logo"
              className="skill-logo"
            />
            <span className="skill-text csharp-text">C#</span>
            <div className="progress hover-progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "80%" }} /* ← change this % for C# skill level */
              ></div>
            </div>
          </li>

          {/* ASP.NET Core Skill — change width % below to adjust your skill level */}
          <li className="skill-item">
            <img
              src="/img/AspNetCore.png"
              alt="ASP.NET Core Logo"
              className="skill-logo"
            />
            <span className="skill-text aspnet-text">ASP.NET Core</span>
            <div className="progress hover-progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "65%" }} /* ← change this % for ASP.NET Core skill level */
              ></div>
            </div>
          </li>
          {/* React Skill */}
          <li className="skill-item">
            <img
              src="/img/react_logo.png"
              alt="React Logo"
              className="skill-logo"
            />
            <span className="skill-text react-text">React</span>
            <div
              className="progress hover-progress"
              >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "85%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/typescript_logo.png"
              alt="TypeScript Logo"
              className="skill-logo"
            />
            <span className="skill-text ts-text">TypeScript</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/javascript_logo.png"
              alt="JavaScript Logo"
              className="skill-logo"
            />
            <span className="skill-text js-text">JavaScript</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/nodejs_logo.png"
              alt="Nodejs Logo"
              className="skill-logo"
            />
            <span className="skill-text node-text">Node.js</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/Expressjs_logo.png"
              alt="Expressjs Logo"
              className="skill-logo"
            />
            <span className="skill-text express-text">Express.js</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "40%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/html_logo.png"
              alt="HTML Logo"
              className="skill-logo"
            />
            <span className="skill-text html-text">HTML</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info peternam"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/css_logo.png"
              alt="CSS Logo"
              className="skill-logo"
            />
            <span className="skill-text css-text">CSS</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "85%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/sass_logo.png"
              alt="SASS Logo"
              className="skill-logo"
            />
            <span className="skill-text sass-text">SASS</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/git_logo.png"
              alt="Git Logo"
              className="skill-logo"
            />
            <span className="skill-text git-text">Git</span>
            <div className="progress hover-progress git-progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "65%" }}
              ></div>
            </div>
          </li>
          <li className="skill-item">
            <img
              src="/img/github_logo.png"
              alt="Github Logo"
              className="skill-logo"
            />
            <span className="skill-text github-text">Github</span>
            <div
              className="progress hover-progress"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "85%" }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MySkills;
