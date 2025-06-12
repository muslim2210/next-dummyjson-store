import React from "react";
import Link from "next/link";
import { Menu } from "@/lib/data";

const MenuMobile = ({
  setMobileMenu,
}: Readonly<{ setMobileMenu: React.Dispatch<React.SetStateAction<boolean>> }>) => {
  

  return (
    <ul className="flex flex-col lg:hidden font-bold absolute top-[50px] md:top-[80px] left-0 w-full bg-white border-t border-b shadow-md text-black">
      {
        Menu.map((item, index) => (
          <li key={index} className="py-4 px-5">
            <Link href={item.href} onClick={() => setMobileMenu(false)}>
              {item.name}
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default MenuMobile;
