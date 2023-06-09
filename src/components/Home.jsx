import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#F4ECE4]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-brown-600">Hello,</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#8B6E4B]">I'm Adzkiyatun Nisa Al Haura</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#aba793]">Web Developer</h2>
                <p className="text-[#958c7a] py-4 max-w-[700px]">I'm a web developer that love exploring around web development stuff especially javascript</p>
                <div>
                    <button className="text-brown group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8B6E4B] hover:text-[#F4ECE4] duration-300">
                        <Link to="work" smooth={true} duration={500}>
                                See My Project
                        </Link>
                        <span className="group-hover:rotate-90 duration-300"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home