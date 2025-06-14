import * as React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from "@/lib/data";
import Link from "next/link";



export function DrawerMenuMobile() {
  return (
    <Drawer>
      <DrawerTrigger>
        <AiOutlineMenu className="text-black cursor-pointer"/>
      </DrawerTrigger>
      <DrawerContent className="px-0">
        <div className="mt-3">
          {
            Menu.map((item, index) => (
              <DrawerHeader key={index} className="py-0 rounded-md">
                <DrawerTitle  className="hover:text-[#1E3A8A] hover:bg-gray-200 cursor-pointer py-2">
                <Link href={item.href} scroll={false}>
                  <span className="text-uppercase">{item.name}</span>
                </Link>
                </DrawerTitle>
              </DrawerHeader>
            ))
          }
        </div>
      </DrawerContent>
    </Drawer>
  )
}
