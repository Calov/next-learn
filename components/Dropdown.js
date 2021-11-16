import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false)
    const options = [ "Discover your assets", "Detect Vulnerabilities", "Understand your Hackability Score", "Improve your Cyber Fitness" ]
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) =>{
                setIsActive(!isActive)}}>
                {/* {selected} */}
                Become Cyber Fit
                <ChevronDownIcon className="text-white h-5 px-2" />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    { options.map((option) =>{
                        <div
                            onClick={(e) =>{
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            { option }
                        </div>
                    })}
                </div>
            )}
        </div>
    )
}

export default Dropdown
