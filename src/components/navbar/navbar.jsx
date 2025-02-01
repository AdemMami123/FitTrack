"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Theme from "..//theme/theme";

import React from "react";
const navigationMenuItems = [
  {
    label: "Workouts",
    href: "/workouts",
  },
  {
    label: "Forum",
    href: "/forum",
  },
];

const navbar = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex items-center justify-between px-10 py-3 bg-background shadow-md">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          FitTrack
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationMenuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
        <Button asChild
            variant="outline"
            className="hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500"
          >
            <Link href="/register">register </Link>
            
          </Button>
          <Button asChild
            variant="outline"
            className="hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500"
          >
            <Link href="/login">Login </Link>
            
          </Button>

          <Theme />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Menu className="cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm pb-8">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl text-center">
                    Menu
                  </DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col items-center space-y-4 p-4">
                  {navigationMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-primary hover:bg-primary-foreground hover:text-primary-background px-4 py-2 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default navbar;
