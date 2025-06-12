import React from "react";
import Link from "next/link";
import { Menu } from "@/lib/data";

const MenuLink = () => {
  return (
    <ul className="hidden md:flex items-center gap-5 font-medium text-black text-base">
      {
        Menu.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default MenuLink;
