import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/fd1.jpg"
          title="HTML (Hyper Text Markup Language)"
          description="HTML (Hyper Text Markup Language) is a markup language used to create a web page and display various information in an Internet browser."
        />
        <ProjectCard
          src="/fd2.jpg"
          title="CSS (Cascading Style Sheet) "
          description="CSS (Cascading Style Sheet) is a rule to arrange several components in a web so that it will be more structured and uniform the appearance."
        />
        <ProjectCard
          src="/fd3.jpg"
          title="JS (JavaScript)"
          description="JS (JavaScript) is a high-level and dynamic programming language. JS is the most popular type of programming language on the internet now."
        />
      </div>
    </div>
  );
};

export default Projects;
