import React from "react";
import Project from "./Project";
import { ProjectData } from "./constants/ProjectData";

const Projects = () => {
    return(
        <>
            <h1 className="text-center text-2xl font-bold italic">My Projects</h1>
            <div className="flex justify-evenly">
                {ProjectData.map(project => {
                    return <Project title={project.title} caption={project.caption} />
                })}
            </div>
        </>
    )
}

export default Projects;
