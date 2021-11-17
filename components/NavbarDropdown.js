import { ChevronDownIcon } from "@heroicons/react/solid";

function NavbarDropdown() {
    const select = [ 'Discover your assets', 'Detect Vulnerabilities', 'Understand your Hackability Score', 'Improve your Cyber Fitness' ]
    return (
        <div className="dropdown">
            <div className="dropdown-btn">
                Become Cyber Fit
                <ChevronDownIcon className="text-white h-5 px-2" />
            </div>
            <div className="dropdown-content">
                {select.map((item, i) => (
                    <div key={i} className="dropdown-item">
                        {item}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default NavbarDropdown
