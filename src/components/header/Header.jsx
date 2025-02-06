import React, { useState } from 'react'
import "./Header.css"
import navlogo from "../../assets/Bandage.png"
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { pathname } = useLocation()
  const bg = pathname === "/media" ? "bg-slate-300 backdrop-blur-sm text-black" : "bg-[#ffffffdd]"
  const links = ["Каталог", "Доставка", " Условия", "Контакты"]
  const number = ["+ 375 736 463"]
  return (
    <header id='header' className={`header h-[70px] backdrop-blur-sm flex gap-5 p-5 items-center mt-[12px] ${bg}`}>
      <div className='container flex  items-center justify-between'>
        <nav className="navbar  flex items-center justify-between gap-44">
          <div className="navbar__logo">
            <Link to={"/"}>
              <img src={navlogo} alt="" />
            </Link>
          </div>
          <div className={`nav__collect items-center flex justify-center gap-6 ${isMenuOpen ? "show" : ""}`} >
            <ul className="navbar__collection flex gap-7 text-[#737373]">
              <Link className='hover:text-slate-300 ease-in-out' to={"/"}>
                Home
              </Link>
              <Link className='hover:text-slate-300 ease-in-out' to={"/shop"}>
                Shop
              </Link>
              <Link className='hover:text-slate-300 ease-in-out' to={"/about"}>
                About
              </Link>
              <Link className='hover:text-slate-300 ease-in-out' to={"/contact"}>
                Contact
              </Link>
              <Link className='hover:text-slate-300 ease-in-out' to={"/blog"}>
                Blog
              </Link>
            </ul>
          </div>
          <div onClick={toggleMenu} className="navbar__menu text-2xl">
            < AiOutlineMenuUnfold />
          </div>
        </nav>
        <div className="flex header__registry gap-5 items-center">
            <div className="flex gap-2.5 items-center">
            <p className='text-[#23A6F0] font-bold'> <IoPersonOutline /></p>
            <p className='text-[#23A6F0] font-bold'>Login / Register</p>
            </div>
            <div className="icons flex gap-4 text-[#23A6F0] items-center font-normal">
            <IoMdSearch />
            <BsCart2 />
            <IoIosHeartEmpty />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header

