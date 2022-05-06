import React, { useState } from 'react';
import Link from 'next/link';


function MobileNav({open,setOpen} : {open:any, setOpen:any}) {
    return (
      <>
        <div className={`z-10 py-7 top-0 right-0 left-0 transform origin-right ${open ? "absolute" : "hidden"} bg-dark-blue`}>
            
            <div className="flex justify-start bg-dark-blue px-10 py-4 ">
              <Link href="/">
                <h3 className="mr-8 text-l text-gray-300 cursor-pointer hover:text-emerald-500 ease-in-out duration-300">Home</h3>
              </Link>
              <Link href="/clients-projects">
                <h3 className="mr-8 text-l text-gray-300 cursor-pointer hover:text-emerald-500 ease-in-out duration-300">Clients/Projects</h3>
              </Link>
              <Link href="/about-nikko">
                <h3 className="text-l text-gray-300 cursor-pointer hover:text-emerald-500 ease-in-out duration-300">About Nikko</h3>
              </Link>
            </div>
            
        </div>
      </>
    )
}


export const Navbar = () => {

const [open, setOpen] = useState(false); 

  return (
    <>
      <nav className="flex justify-between items-center">
      <Link href="/">
        <span className="flex justify-between items-center text-xl font-semibold text-white cursor-pointer">
          <img className="drop-shadow-2xl pr-5 object-contain" src="../nikko-logo.png" />
          <span className="inline-flex md:hidden xl:inline-flex text-gray-300 hover:text-emerald-500">Nikko Parin</span>
        </span>
      </Link>
        <div className="flex hidden md:inline-flex gap-x-16 items-center text-gray-300 tracking-wider">
          <Link href="/">
            <h3 className="cursor-pointer hover:text-emerald-500 ease-in-out duration-300">Home</h3>
          </Link>
          <Link href="/clients-projects">
            <h3 className="cursor-pointer hover:text-emerald-500 ease-in-out duration-300">Clients/Projects</h3>
          </Link>
          <Link href="/about-nikko">
            <h3 className="cursor-pointer hover:text-emerald-500 ease-in-out duration-300">About Nikko</h3>
          </Link>
        </div>
        <button className="hidden md:inline-flex py-3 px-6 font-medium tracking-wider leading-5 text-white rounded-md border-2 border-gray-800">hello@nikkoparin.work</button>

        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => { setOpen(!open) }}>
          <span className={`h-1 w-full bg-gray-300 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-gray-300 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-gray-300 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>
      </nav>
      <MobileNav open={open} setOpen={setOpen}/>
    </>
  );






};
