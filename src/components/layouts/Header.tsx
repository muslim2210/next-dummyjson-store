"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
// import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import MenuLink from "./Menu";
import MenuMobile from "./MenuMobile";
import { LuCircleUserRound } from "react-icons/lu";
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
      className={`w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 shadow-xs sticky top-0 transition-transform duration-300 ${show}`}
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
          <div className="flex items-center gap-1">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full flex justify-center items-center cursor-pointer relative">
              <BiHeart className="text-[26px] mr-3" />
              <div className="h-[16px] md:h-[20px] min-w-[16px] md:min-w-[20px] rounded-full bg-red-600 absolute top-0 left-3 md:left-5 text-white text-[12px] md:text-[14px] flex justify-center items-center px-[2px] md:px-[5px]">
                3
              </div>
            </div>
            <div className="w-8 md:w-12 h-8 md:h-12 mr-2 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <LuCircleUserRound size={38} />
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
