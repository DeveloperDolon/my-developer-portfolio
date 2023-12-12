import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/One.png"
          title="Modern Real Estate Agency Management Project"
          description="Real estate organization management web site. The website provides a personalized dashboard for users, agents, and administrators."
          project_link={"https://real-estate-project-1497b.web.app/"}
        />
        <ProjectCard
          src="/tow.png"
          title="Electronics Shop Project"
          description="Electronics devices shop web site. Shop with significant brands product."
          project_link={"https://assignment-ten-cacea.web.app/"}
        />
        <ProjectCard
          src="/three.png"
          title="Free Food Sharing Project"
          description="Free food sharing web site. Connecting Communities through Free Food Distribution 🍲🌍"
          project_link={"https://assignment-11-4dcde.web.app/"}
        />

      </div>
    </div>
  );
};

export default Projects;
