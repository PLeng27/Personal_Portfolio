import React from "react";
import "../../../public/style/bootstrap.min.css";
import "./experience.css";

const Experience: React.FC = () => {
  return (
    <main className="experience-container" id="MyExperience">
      <div className="exp-header">Experience</div>

      {/* --- CARD 1 --- */}
      <div className="card bg-secondary mb-3 card-exp">
        <div className="card-header">
          <div className="card-header-position">IT .NET Developer</div>
          <div className="card-header-duration">Jan 2024 - Present</div>
        </div>
        <div className="card-body card-exp-body">
          <div className="card-title exp-title">SR Digital Media Co., Ltd.</div>
          <div className="exp-responsibility">Responsibilities :</div>
          <div className="card-text exp-text">
            <ul>
              <li>Assisted in designing, developing, and maintaining web applications</li>
              <li>Supported debugging and troubleshooting of application issues to ensure smooth system performance</li>
              <li>Write clean, scalable, and efficient code following best practices</li>
              <li>Inspecting, detecting, and reducing code smell</li>
              <li>Worked with databases (e.g., MySQL) to run queries and handle basic data operations</li>
              <li>Used version control tools like Git for source code management</li>
              <li>Collaborated with team members (developers, QA, and stakeholders) to understand requirements and support development tasks</li>
            </ul>
          </div>
        </div>
      </div> {/* <-- This closing tag was missing here */}

      {/* --- CARD 2 --- */}
      {/* This card is now a sibling to Card 1, not a child */}
      <div className="card bg-secondary mb-3 card-exp">
        <div className="card-header">
          <div className="card-header-position">IT Support and Floor Facilitating Volunteer</div>
          <div className="card-header-duration">24-25 Feb, 2024</div>
        </div>
        <div className="card-body card-exp-body">
          <div className="card-title exp-title">20th Annual CamTESOL conference by ACE</div>
          <div className="exp-responsibility">Responsibilities :</div>
          <div className="card-text exp-text">
            <ul>
              <li>Setup laptops, projectors, slides, projector remotes, and wifi modems</li>
              <li>Standby in-room to guide professors for any assistance needed</li>
              <li>Inspect floor by floor to ensure everything's set up for overall smooth operation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- CARD 3 --- */}
      <div className="card bg-secondary mb-3 card-exp">
        <div className="card-header">
          <div className="card-header-position">Logistics Volunteer</div>
          <div className="card-header-duration">11 May, 2024</div>
        </div>
        <div className="card-body card-exp-body">
          <div className="card-title exp-title">18th Annual STEM Cambodia</div>
          <div className="exp-responsibility">Responsibilities :</div>
          <div className="card-text exp-text">
            <ul>
              <li>Inventory/Stock control by ensuring sufficient stock for supply chain demands</li>
              <li>Planning, executing and control of the movement of goods while tracking and ensuring timely deliveries</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- CARD 4 --- */}
      <div className="card bg-secondary mb-3 card-exp">
        <div className="card-header">
          <div className="card-header-position">Ranked 3rd Place as School Representative Team</div>
          <div className="card-header-duration">2019</div>
        </div>
        <div className="card-body card-exp-body">
          <div className="card-title exp-title">Youth Debate on Environment 2019 by Ministry of Environment</div>
          <div className="exp-responsibility">Responsibilities :</div>
          <div className="card-text exp-text">
            <ul>
              <li>
                Long-term cost effectiveness: lowering waste disposal fees, improving energy efficiency,
                reducing material use and shipping weight, directly cutting transportation costs and carbon emissions
              </li>
              <li>Join community tree-planting events to restore local ecosystems</li>
              <li>Innovative Financing: Frameworks like REDD+ (Reducing Emissions from Deforestation and Forest Degradation)
                  provide financial incentives for developing countries to conserve their forests
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default Experience;