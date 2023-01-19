import React from "react";

const ContactMe = () => {
    return(
        <div className="p-5 flex justify-center">
            <form className="">
                <label>Reason For Contact: </label><br/>
                <input className="border-2 solid border-black rounded w-full" placeholder="**Enter a subject title**" /><br />
                
                <label>Body of Post: </label><br/>
                <textarea className="border-2 solid border-black rounded w-full"/><br/>
                <label>Contact Method:</label>
                <select>
                    <option value={1}></option>
                    <option value={2}></option>
                </select>
                <button type="submit" className="border-2 solid border-black rounded w-full bg-gray-300 text-lg">Submit</button>
            </form>
        </div>
    )
};

export default ContactMe;
