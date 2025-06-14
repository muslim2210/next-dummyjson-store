"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import Image from "next/image";
import MenuLink from "./Menu";
import MenuMobile from "./MenuMobile";
import { DrawerMenuMobile } from "./DrawerMenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

 const controlNavbar = () => {
    if (window.scrollY > 500) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <header
      className={`w-full px-1 h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 shadow-xs sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <div className="flex-1">
          <Link href="/" scroll={false}>
            <Image
              src="/mylogo.png"
              alt="logo"
              width={500}
              height={400}
              priority
              className="w-[100px] md:w-[130px]"
            />
          </Link>
        </div>

        <div className="flex-1 hidden lg:flex justify-center">
          <MenuLink />
        </div>

        <div className="flex-1 gap-1 flex justify-end items-center">
          <div className="flex items-center gap-0">
            <div className="w-9 md:w-10 h-9 md:h-10 rounded-full flex justify-center items-center cursor-pointer relative">
              <BiHeart className="text-[25px] md:mr-4 mr-3" />
              <div className="h-[14px] min-w-[14px] md:h-[16px] md:min-w-[16px] rounded-full bg-red-600 absolute top-0 left-4 text-white text-[10px] md:text-[14px] flex justify-center items-center px-[2px] md:px-[5px]">
                3
              </div>
            </div>
            <div className="w-8 md:w-11 h-8 md:h-11 mr-1 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <RiAccountCircleFill size={37}/>
            </div>
          </div>
          {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
          <div className="flex items-center gap-4 text-black relative">
            {/* Mobile icon */}
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              <DrawerMenuMobile/>       
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
