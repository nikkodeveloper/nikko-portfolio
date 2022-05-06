import React, { useState } from 'react';
import Link from 'next/link';


function MobileNav({open,setOpen} : {open:any, setOpen:any}) {
    return (
      <>
        <div className={`z-10 bg-dark-blue py-2 min-h-full w-full top-0 right-0 left-0 transform origin-right ${open ? "fixed" : "hidden"}`}>
            <Link href="/">
              <div className="mt-5 ml-8">
                <span className="flex items-center text-xl font-semibold text-white cursor-pointer">
                  <img className="drop-shadow-2xl pr-5 object-contain" src="../nikko-logo.png" />
                  <span className="inline-flex md:hidden xl:inline-flex text-gray-300 hover:text-emerald-500">Nikko Parin</span>
                </span>
              </div>
            </Link>
            <div className="flex items-center flex-col justify-between rounded-md mt-5 px-10 py-4 ">
              <Link href="/">
                <h3 className="my-5 text-3xl text-gray-300 cursor-pointer hover:text-emerald-500 ease-in-out duration-300">Home</h3>
              </Link>
              <Link href="/clients-projects">
                <h3 className="my-5 text-3xl text-gray-300 cursor-pointer hover:text-emerald-500 ease-in-out duration-300">Clients/Projects</h3>
              </Link>
              <Link href="/about-nikko">
                <h3 className="my-5 text-3xl text-gray-300 cursor-pointer hover:text-emerald-500 ease-in-out duration-300">About Nikko</h3>
              </Link>
            </div>
            <div className="flex flex-col items-center my-5">
              <Link href="mailto:hello@nikkoparin.work">
                <span className="cursor-pointer w-auto py-3 px-6 font-medium tracking-wider text-2xl text-white rounded-md border-2 border-gray-800">hello@nikkoparin.work</span>
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
        <Link href="mailto:hello@nikkoparin.work">
          <button className="hidden md:inline-flex py-3 px-6 font-medium tracking-wider leading-5 text-white rounded-md border-2 border-gray-800">hello@nikkoparin.work</button>
        </Link>
        <div className="z-50 flex w-12 h-12 p-2 flex-col rounded-md border-2 border-solid border-gray-800 justify-between items-center fixed right-8 md:hidden bg-dark-blue" onClick={() => { setOpen(!open) }}>
          <span className={`h-1 w-full bg-gray-300 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3" : ""}`} />
          <span className={`h-1 w-full bg-gray-300 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-gray-300 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3" : ""}`} />
        </div>
      </nav>
      <MobileNav open={open} setOpen={setOpen}/>
    </>
  );






};
