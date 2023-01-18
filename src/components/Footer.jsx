import React from "react";

const Footer = () => {
    return(
        <div className="flex absolute bottom-0 p-5 bg-black text-white w-full justify-evenly">
            <div className="w-80 border border-1 p-10 rounded-lg text-center">
                <p className="underline">My Favorite Resources</p>
                <ul>
                    <li><a href="https://stackoverflow.com" target="_blank" className="italic font-bold">StackOverFlow</a></li>
                    <li><a href="https://google.com" target="_blank" className="italic font-bold">Google</a></li>
                    <li><a href="https://bobbyhadz.com" target="_blank" className="italic font-bold">Bobbyhadz.com</a></li>
                    <li><a href="https://youtube.com" target="_blank" className="italic font-bold">YouTube</a></li>
                </ul>
            </div>
            <div className="w-80 border border-1 p-10 rounded-lg text-center">
                <p className="underline">Social Links</p>
                <ul>
                    <li><a href="https://github.com/ComputerScienceWarrior" target="_blank" className="italic font-bold">Github.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;