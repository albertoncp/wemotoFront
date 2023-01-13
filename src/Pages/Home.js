import React from "react";
import Navbar from "../components/Navbar";
import { BsPaypal } from "react-icons/bs";
import { FaCcMastercard } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import { FaCcVisa, FaDhl } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsPinterest, BsFillFlagFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="py-2">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2  pt-1 gap-4 ">
        <div className="relative   ">
          {/* Links */}
          <img src="https://wemotoclothing.com/media/image/b5/3f/a9/wemoto-aw22-shooting-women-jackets-jay-cord-rust-3JxQOGdObtKoyK.jpg"></img>
          <p className=" text-4xl w-80   font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  ">
            AW22 Women 30% Off
          </p>
        </div>
        <div className="relative   ">
          {" "}
          <img
            className="h-full"
            src="https://wemotoclothing.com/media/image/01/5a/59/wemoto-aw22-mood-men-jackets-pete-navyblue-13.jpg"
          ></img>
          <p className=" text-4xl  font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  ">
            AW22 Men 30% Off
          </p>
        </div>
        <div className="relative">
          {" "}
          <img src="https://wemotoclothing.com/media/image/a8/03/f8/wemoto-aw22-smoke-capsule-smoke-fleece-black-02yzUGSePeYCGrr.jpg"></img>
          <p className=" w-80  text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  ">
            Smoking Fish Capsule
          </p>
        </div>
        <div className="relative">
          {" "}
          <img src="https://wemotoclothing.com/media/image/23/01/80/IG-Grid-Accesoires-Mood.jpg"></img>{" "}
          <p className=" text-4xl uppercase font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  ">
            Accesories 30% Off
          </p>
        </div>
        <div className="relative">
          {" "}
          <img src="https://wemotoclothing.com/media/image/59/a7/52/6-LP21-KW09-Archive-SaleZTRZQFYkiAXHG.jpg"></img>
          <p className=" text-4xl uppercase font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  ">
            Archive Sale
          </p>
        </div>
        <div className="pb-4">
          {" "}
          <img src="https://wemotoclothing.com/media/image/d1/e2/85/IG-Grid-Radio-Square.jpg"></img>
        </div>
      </div>
      {/* Sing up */}
      <div className=" bg-gray-100 flex-column items-start justify-center ">
        <div className="flex-column md:flex text-start px-8 py-10">
          <div className="w-[100%] md:pl-4  md:w-[70%]" >
            <h2 className="text-3xl text-bold   pb-2">Wemoto Studio Club</h2>
            <p  className="text-md pb-2 md:w-[70%]">
              Sign up for our newsletter and get 10% off your next purchase,
              exclusive offers and flash sales!{" "}
            </p>
          </div>
          <div>
            <input
              placeholder="Your E-mail Adress"
              className="w-full h-10 rounded placeholder-black border border-gray-300 "
            ></input>
            <div className="flex gap-2 sm:justify-start justify-center items-center">
              <button className="bg-white p-2 rounded border border-gray-300  ">
                Suscribe
              </button>
              <input type="checkbox"></input>
              <p className="pt-4">
                I have read the data protection information
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* Payment and Shipping */}
        <div className="flex justify-center pt-5 pb-5">Payment</div>
        <div className="flex gap-2 justify-center   ">
          <BsPaypal size={30} />
          <FaCcMastercard size={30} />
          <SiApplepay size={30} />
          <FaCcVisa size={30} />
        </div>
        <div className="flex justify-center pt-10 pb-5">Shipping</div>
        <div className="flex gap-2  justify-center ">
          <FaDhl size={50} />
        </div>
      </div>
      <footer className=" gap-2 flex justify-between items-center pt-10 pl-10">
        <BsFillFlagFill />© 2022 Wemoto Clothing
        <div className="flex justify-center items-center">
          <AiOutlineInstagram size={30} />
          <BsFacebook size={25} />
          <BsPinterest size={25} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
