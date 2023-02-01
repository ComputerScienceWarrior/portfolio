import React from "react";

const Project = (props) => {
    return(
        <div>
            <h1 className="text-center font-bold text-2xl">{props.title}</h1>
            <div className="w-48 h-48 hover:opacity-25 border-2 border-black rounded bg-gray-300 duration-300">
                <img src={props.imageUrl} className="w-full h-full" alt="Cat Picture."/>
            </div>
            <p className="text-center">{props.caption}</p>
        </div>
    )
}

export default Project;
