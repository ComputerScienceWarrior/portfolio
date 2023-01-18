import React from "react";

const Navigation = () => {
    return(
        <nav className="p-5 bg-black text-white">
            <a className="site-title">James-Ryan Stampley</a>
            <ul className="flex justify-between items-center">
                <li className="hover:bg-[#777] hover:text-lg"><a className="" href="/about">About Me</a></li>
                <li className="hover:bg-[#777] hover:text-lg"><a className="" href="/contact">Contact Me</a></li>
            </ul>
        </nav>
    )
};

export default Navigation;
