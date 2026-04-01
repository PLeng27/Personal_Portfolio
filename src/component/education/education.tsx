import React from "react";
import "../../../public/style/bootstrap.min.css";
import "./education.css";
const Education: React.FC = () => {
  return (
    <main className="education-container" id="MyEducation">
      <h2 className="edu-header">Education</h2>
      {/* CS Bachelor Degree */}
      <div className="edu-card card">
        <div className="card">
          <div className="card-body edu-body">
            <h4 className="card-title edu-title">
              BACHELOR DEGREE IN COMPUTER SCIENCE AND ENGINEERING
            </h4>
            <h5 className="card-subtitle mb-2 text-muted edu-year">
              <i>Gratuated (Jan 2020 - May 2024)</i>
            </h5>
            <div className="card-subtitle mb-2 text-muted edu-institute">
              Royal University of Phnom Penh (RUPP)
            </div>
            {/* 
            <a href="#" className="card-link">
              Card link
            </a> 
            */}
          </div>
        </div>
      </div>
      {/* ACE Diploma Certificate */}
      <div className="edu-card card">
        <div className="card">
          <div className="card-body edu-body">
            <h4 className="card-title edu-title">
              ACE Certificate of Advanced English (upon completion of six diploma courses)
            </h4>
            <h5 className="card-subtitle mb-2 text-muted edu-year">
              <i>Awarded (2024)</i>
            </h5>
            <div className="card-subtitle mb-2 text-muted edu-institute">
              Australian Centre of Education (ACE)
            </div>
          </div>
        </div>
      </div>
      {/* Basic Prog. and C# Certificate */}
      <div className="edu-card card">
        <div className="card">
          <div className="card-body edu-body">
            <h4 className="card-title edu-title">
              Basic Programming (C, C++, OOP) and C# Certificate
            </h4>
            <h5 className="card-subtitle mb-2 text-muted edu-year">
              <i>Completed (2022-2023)</i>
            </h5>
            <div className="card-subtitle mb-2 text-muted edu-institute">
              ETEC Center
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Education;
