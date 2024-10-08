import React, { useState, useEffect } from "react";
import "./Projects.css";
import productionPlannerPic from "../static/production-planner-mockup.jpg";
import dgDraftPic from "../static/dgdraft-mockup.jpg";
import amazonCheckerPic from "../static/amazon-checker-mockup.jpg";
import kbtPic from "../static/kbt-mockup.jpg";
import boilerplateGatewayPic from "../static/boilerplate-gateway-mockup.jpg";
import siteBlockerPic from "../static/site-blocker-mockup.jpg";
import commentAnalyzerPic from "../static/comment-analyzer-mockup.jpg";
import projectDescriptions from "../Projects/ProjectDescriptions.json";
import { Link, useLocation } from "react-router-dom";

function Projects() {
  const [projectText1, setProjectText1] = useState("");
  const [projectText2, setProjectText2] = useState("");
  const [projectText3, setProjectText3] = useState("");
  const [projectText4, setProjectText4] = useState("");
  const [projectText5, setProjectText5] = useState("");
  const [projectText6, setProjectText6] = useState("");
  const [projectText7, setProjectText7] = useState("");
  const [isProjectPage, setIsProjectPage] = useState(true);
  const location = useLocation();
  const updateProjectText = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      setProjectText1(projectDescriptions.production_planner.long);
      setProjectText2(projectDescriptions.amazon_checker.long);
      setProjectText3(projectDescriptions.kbt_quiz.long);
      setProjectText4(projectDescriptions.site_blocker.long);
      setProjectText5(projectDescriptions.comment_analyzer.long);
      setProjectText6(projectDescriptions.dg_draft.long);
      setProjectText7(projectDescriptions.boilerplate_gateway.long);
    } else {
      setProjectText1(projectDescriptions.production_planner.short);
      setProjectText2(projectDescriptions.amazon_checker.short);
      setProjectText3(projectDescriptions.kbt_quiz.short);
      setProjectText4(projectDescriptions.site_blocker.short);
      setProjectText5(projectDescriptions.comment_analyzer.short);
      setProjectText6(projectDescriptions.dg_draft.short);
      setProjectText7(projectDescriptions.boilerplate_gateway.short);

    }
  };
  const updateCurrentPage = () => {
    if (location.pathname !== "/projects") {
      setIsProjectPage(false);
    }
  };
  useEffect(() => {
    updateProjectText();
    updateCurrentPage();
    window.addEventListener("resize", updateProjectText);
    return () => window.removeEventListener("resize", updateProjectText);
  }, [updateCurrentPage]);

  return (
    <div className="projects-container">
      <h2>{isProjectPage ? "Projects" : "Featured Projects"}</h2>

      {/* Production Planner Project */}
      <div className="featured-project">
        <div className="project-image">
          <img src={productionPlannerPic} alt="Production Planner project snapshot" />
          <Link to="/production-planner">
            <div className="project-image-text">
              <h2>
                Django<br></br>React<br></br>MySQL
              </h2>
            </div>
          </Link>
        </div>
        <div className="project-text">
          <h3>Production Planner</h3>
          <p>{projectText1}</p>
          <p className="read-more-link">
            <Link to="/production-planner">
              Read more<span>&#10230;</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Amazon Inventory Checker Project */}
      <div className="featured-project">
        <div className="project-image">
          <img
            src={amazonCheckerPic}
            alt="Amazon inventory checker project snapshot"
          />
          <Link to="/amazon-checker">
            <div className="project-image-text">
              <h2>Python</h2>
            </div>
          </Link>
        </div>
        <div className="project-text">
          <h3>Inventory Checker</h3>
          <p>{projectText2}</p>
          <p className="read-more-link">
            <Link to="/amazon-checker">
              Read more<span>&#10230;</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Boilerplate Access Gateway Project */}
      <div className="featured-project">
        <div className="project-image">
          <img
            src={boilerplateGatewayPic}
            alt="Boilerplate access gateway project snapshot"
          />
          <Link to="/boilerplate-gateway">
            <div className="project-image-text">
              <h2>
                Next.js<br></br>Gumroad & GitHub API<br></br>Heroku
                </h2>
            </div>
          </Link>
        </div>
        <div className="project-text">
          <h3>Boilerplate Access Gateway</h3>
          <p>{projectText7}</p>
          <p className="read-more-link">
            <Link to="/boilerplate-gateway">
              Read more<span>&#10230;</span>
            </Link>
          </p>
        </div>
      </div>

      {/* DG Draft Project */}
      {isProjectPage && (
      <div className="featured-project">
        <div className="project-image">
          <img
            src={dgDraftPic}
            alt="Fantasy disc golf website snapshot"
          />
          <Link to="/dg-draft">
            <div className="project-image-text">
              <h2>
                Rails<br></br>React & TypeScript<br></br>Postgres
                </h2>
            </div>
          </Link>
        </div>
        <div className="project-text">
          <h3>Fantasy Disc Golf App</h3>
          <p>{projectText6}</p>
          <p className="read-more-link">
            <Link to="/dg-draft">
              Read more<span>&#10230;</span>
            </Link>
          </p>
        </div>
      </div>
      )}

      {/* KBT Quiz Project */}
      {isProjectPage && (
      <div className="featured-project">
        <div className="project-image">
          <img src={kbtPic} alt="JavaScript quiz project snapshot" />
          <Link to="/kibbe-quiz">
            <div className="project-image-text">
              <h2>JavaScript</h2>
            </div>
          </Link>
        </div>
        <div className="project-text">
          <h3>Typing Quiz</h3>
          <p>{projectText3}</p>
          <p className="read-more-link">
            <Link to="/kibbe-quiz">
              Read more<span>&#10230;</span>
            </Link>
          </p>
        </div>
      </div>
      )}

      {!isProjectPage && (<center><Link to="/projects"><button className="dark">View All</button></Link></center>)}
      
      {/* Site Blocker Project */}
      {isProjectPage && (
        <div className="featured-project">
          <div className="project-image">
            <img
              src={siteBlockerPic}
              alt="Site Blocker Chrome extension project snapshot"
            />
            <Link to="/site-blocker">
              <div className="project-image-text">
                <h2>JavaScript</h2>
              </div>
            </Link>
          </div>
          <div className="project-text">
            <h3>Site Blocker Chrome Extension</h3>
            <p>{projectText4}</p>
            <p className="read-more-link">
              <Link to="/site-blocker">
                Read more<span>&#10230;</span>
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* YouTube Comment Analyzer Project */}
      {isProjectPage && (
        <div className="featured-project">
          <div className="project-image">
            <img src={commentAnalyzerPic} alt="Comment Analyzer project snapshot" />
            <Link to="/comment-analyzer">
              <div className="project-image-text">
                <h2>Python</h2>
              </div>
            </Link>
          </div>
          <div className="project-text">
            <h3>YouTube Comment Sentiment Analyzer</h3>
            <p>{projectText5}</p>
            <p className="read-more-link">
              <Link to="/comment-analyzer">
                Read more<span>&#10230;</span>
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
