import React, { useState, useEffect } from "react";

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setShowFooter(true);
          } else {
            setShowFooter(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        showFooter &&
        <div className="flex fixed bottom-0 h-30 p-5 bg-black text-white w-full justify-evenly">
            <div className="w-80 border border-1 p-5 rounded-lg text-center">
                <p className="underline">My Favorite Resources</p>
                <ul>
                    <li><a href="https://stackoverflow.com" target="_blank" className="italic font-bold hover:text-green-500">StackOverFlow</a></li>
                    <li><a href="https://google.com" target="_blank" className="italic font-bold hover:text-green-500">Google</a></li>
                    <li><a href="https://bobbyhadz.com" target="_blank" className="italic font-bold hover:text-green-500">Bobbyhadz.com</a></li>
                    <li><a href="https://youtube.com" target="_blank" className="italic font-bold hover:text-green-500">YouTube</a></li>
                </ul>
            </div>
            <div className="w-80 border border-1 p-10 rounded-lg text-center">
                <p className="underline">Social Links</p>
                <ul>
                    <li><a href="https://github.com/ComputerScienceWarrior" target="_blank" className="italic font-bold hover:text-green-500">Github.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;