import React from 'react'

import { TiThMenu } from "react-icons/ti";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    //Navbar
    <div className='flex-column' >
    <div className='flex items-center justify-between  py-1  ' >
        {/*  Left */}
        <div className=' flex gap-x-1  ml-2 items-center' >
            <TiThMenu className='  md:hidden' size={"1.5rem"}/>
            <img src='https://wemotoclothing.com/media/image/dc/d9/12/wemoto_logo_400.png' className='w-50 sm:block h-8 md:absolute md:left-[40%] lg:left-[43%]  ' ></img>
        </div>
        {/* Middle */}
        <div className='flex' >
        <div className='' >
          <input placeholder='Search...' className='hidden  placeholder-black   bg-gray-100  md:flex py-2 w-28 ' type="search"></input>         
        </div>
        {/* Right */}
        <div className='flex items-center gap-x-3 mr-2' >
         <GoSearch size={"1.5rem"} />
         <p className="font-semibold text-sm " >Notes</p>
         <p className="font-semibold text-sm" >Account</p>
         <p className="font-semibold text-sm">Cart</p>
        </div>
        </div>
    </div>
    <div className='hidden md:flex md:justify-center md:gap-4 py-3 ' >
      <a>Men</a>
      <a>Women</a>
      <a>Accesories</a>
      <a> Artist </a>
      <a>Network</a>
      <a>Radio</a>
      <a>About Us</a>
      <a>Lookbook</a>
             
    </div>
    </div>
  )
}

export default Navbar