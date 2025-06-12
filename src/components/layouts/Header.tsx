"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import MenuLink from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false); // NEW

  // Mount hanya di client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!hasMounted) return;
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, hasMounted, controlNavbar]);

  if (!hasMounted) {
    // Sementara SSR ditampilkan class default
    return (
      <header className="w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 shadow-sm sticky top-0 transition-transform duration-300 translate-y-0">
        {/* Optional: logo static bisa ditaruh di sini juga */}
      </header>
    );
  }

  return (
    <header
      className={`w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 shadow-sm sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <div className="flex-1">
          <Link href="/">
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
          {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
          <div className="flex items-center gap-4 text-black relative">
            {/* Mobile icon */}
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              {mobileMenu ? (
                <VscChromeClose
                  className="text-[16px]"
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <BiMenuAltRight
                  className="text-[20px]"
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
