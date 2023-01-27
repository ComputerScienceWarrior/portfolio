import React from "react";

const Project = (props) => {
    return(
        <div>
            <h1 className="text-center font-bold">{props.title}</h1>
            <div className="w-48 h-48 border-2 border-black rounded bg-gray-300">
                {/* image thumbnail will go here. */}
            </div>
            <p className="text-center">{props.caption}</p>
        </div>
    )
}

export default Project;
