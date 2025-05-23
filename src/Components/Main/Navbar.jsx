import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Experiences', path: '#experience' },
  { name: 'Education', path: '#education' },
  { name: 'Services', path: '#services' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="h-[80px] px-4 bg-transparent text-gray-300">
      <div className='max-w-[1200px] mx-auto flex justify-end items-stretch'>
        <div className={`mt-2 flex flex-wrap items-center duration-700 transition justify-between mr-5 ${nav ? '' : 'opacity-0'}`}>
          {
            navItems.map((item, index) =>

              <h4 key={index} className='sub-heading'>
                <a className='mx-2 text-white hover:scale-105 hover:underline underline-offset-8' href={item.path}>{item.name}</a>
              </h4>
            )
          }
        </div>
        <div className='ml-10 relative'>
          <RxCross2 onClick={() => setNav(false)} className={`text-white absolute right-0 active:animate-spin  duration-1000 transition  ${nav ? 'z-20' : 'opacity-0 z-10'}`} size={40} />
          <RiMenu3Fill onClick={() => setNav(true)} className={`text-white absolute right-0 active:animate-spin duration-1000 transition  ${!nav ? 'z-20' : 'opacity-0 z-10'} `} size={40} />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

