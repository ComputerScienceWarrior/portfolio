import React from "react";
import Project from "./Project";
import { ProjectData } from "./constants/ProjectData";

const Projects = () => {
    return(
        <>
            <h1 className="text-center text-2xl font-bold italic">My Projects</h1>
            <div className="flex justify-evenly">
                {ProjectData.map((project, key) => {
                    return <Project key={key} title={project.title} caption={project.caption} imageUrl={project.imageUrl} />
                })}
            </div>
        </>
    )
}

export default Projects;
