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

import Dropdown from './Dropdown';

function Header() {
    const [selected, setSelected] = useState("")
    
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
                <div className="flex space-x-6 md:space-x-2">
                    {/* <NavItem active Icon={HomeIcon} />
                    <NavItem Icon={FlagIcon} />
                    <NavItem Icon={PlayIcon} />
                    <NavItem Icon={ShoppingCartIcon} />
                    <NavItem Icon={UserGroupIcon} /> */}
                    <ul className="flex text-white font-medium text-sm navbar px-5">
                        <Dropdown selected={selected} setSelected={setSelected} />
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header
