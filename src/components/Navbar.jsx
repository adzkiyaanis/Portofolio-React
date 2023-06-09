import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div name="navbar" className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#8B6E4B] text-gray-100">
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '150px' }} />
            </div>

            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="md:hidden z-10">
            </div>

            
        </div>
    )
}

export default Navbar