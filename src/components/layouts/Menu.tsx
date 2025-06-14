import React from "react";
import Link from "next/link";
import { Menu } from "@/lib/data";
import { usePathname } from "next/navigation";

const MenuLink = () => {
  const pathname = usePathname();
  const active = (path: string) => (pathname === path ? "text-[#1E3A8A]" : "");

  return (
    <ul className="hidden md:flex items-center gap-10 font-medium text-gray-600 text-base">
      {
        Menu.map((item, index) => (
          <li key={index} className={`cursor-pointer hover:text-[#1E3A8A] ${active(item.href)}`}>
            <Link href={item.href} scroll={false}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default MenuLink;
