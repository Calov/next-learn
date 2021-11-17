import Image from 'next/image';
import { useState } from "react";

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

import NavbarDropdown from './NavbarDropdown';
import Button from './Button';

function Header() {
    const [selected, setSelected] = useState("")
    const navbar = ['Pricing', 'FAQ', 'Blog', 'Help Center', 'Login']
    return (
        <div className="header flex sticky top-0 items-center p-2 lg:px-10">
            {/* left */}
            <div className="flex items-center px-5">
                <Image
                    src="https://assets.website-files.com/614e1e0f30751606c8448700/614e62710a8923588eb2e963_logo_autobahn.svg"
                    alt="Logo"
                    height={32}
                    width={185}
                />
            </div>

            {/* right */}
            <div className="flex flex-grow justify-end">
                <div className="flex space-x-6 md:space-x-2 items-center">
                    <ul className="flex text-white font-medium text-sm navbar px-5">
                        <NavbarDropdown selected={selected} setSelected={setSelected} />
                        {navbar.map((name, i) => (
                            <li key={i} className="flex items-center">
                                {name}
                            </li>
                        ))}
                        <Button text="Try for Free" />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header
