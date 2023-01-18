import React from "react";

const Navigation = () => {
    return(
        <nav className="p-5 bg-black text-white">
            <a href="/" className="text-3xl">James-Ryan Stampley</a>
            <div className="p-5"></div>
            <ul className="flex justify-evenly items-center">
                <li className="hover:bg-[#777] hover:text-lg hover:p-2 hover:ease-in duration-300"><a className="" href="/about">About Me</a></li>
                <li className="hover:bg-[#777] hover:text-lg hover:p-2 hover:ease-in duration-300"><a className="" href="/contact">Contact Me</a></li>
            </ul>
        </nav>
    )
};

export default Navigation;
