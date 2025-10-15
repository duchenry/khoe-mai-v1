'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useCategoryStore } from "../store/useCatogoryStore";
import { ModeToggle } from "./ModeToggle";
import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { setCategory } = useCategoryStore();
  const [open, setOpen] = useState(false);
   const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Về chúng tôi" },
  ]
    return (
      <>
        <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={() => setCategory('')}>
                    <div className="font-medium">Tất cả bài viết</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={() => setCategory('nutrition')}>
                    <div className="font-medium">Dinh Dưỡng</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={() => setCategory('sleep')}>
                    <div className="font-medium">Giấc Ngủ</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={() => setCategory('exercise')}>
                    <div className="font-medium">Tập Luyện</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={() => setCategory('mental')}>
                    <div className="font-medium">Tâm Lý</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">Trang chủ</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">Về chúng tôi</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline"><FaBars /></Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Khỏe Mãi - Sống Khỏe Mỗi Ngày
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div>Trang chủ</div>
                  <div>Về chúng tôi</div>
                </div>
                <SheetFooter>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
      </>
    )
}