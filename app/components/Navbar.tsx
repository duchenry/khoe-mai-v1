'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
    return (
      <>
        <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Bài Viết</NavigationMenuTrigger>
                <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/blog">
                    <div className="font-medium">Tất cả bài viết</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/blog/?category=nutrition">
                    <div className="font-medium">Dinh Dưỡng</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/blog?category=sleep">
                    <div className="font-medium">Giấc Ngủ</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/blog?category=exercise">
                    <div className="font-medium">Tập Luyện</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/blog?category=mental">
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
                    <Link href="/about">Về chúng tôi</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
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
                  <div>
                    <Link href="/" onClick={() => setOpen(false)}>Trang chủ</Link>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Link href="/blog?category=nutrition" onClick={() => setOpen(false)}>Dinh Dưỡng</Link>
                    <Link href="/blog?category=sleep" onClick={() => setOpen(false)}>Giấc Ngủ</Link>
                    <Link href="/blog?category=exercise" onClick={() => setOpen(false)}>Tập luyện</Link>
                    <Link href="/blog?category=mental" onClick={() => setOpen(false)}>Tâm Lý</Link>
                  </div>
                  <div>
                    <Link href="/about">Về chúng tôi</Link>
                  </div>
                  <div className="absolute bottom-4">
                    <ModeToggle />
                  </div>
                </div>
                <SheetFooter>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
      </>
    )
}