"use client";

import { Logo } from "@/components/ui/Logo";
import { cn } from "@/utils/cn";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { CalendarRange, Home, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigations = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Explore", icon: CalendarRange, href: "/explore" },
  { name: "Blog", icon: CalendarRange, href: "/blog" },
];

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl">
      <NavbarBrand className="grow-0">
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-4 font-semibold">
        {navigations.map((nav, index) => (
          <NavbarItem key={index}>
            <Link href={nav.href} className="hover:text-blue-600 text-md">
              {nav.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-2" justify="end">
        <Input
          placeholder="Search Events"
          startContent={
            <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="text"
        />

        <NavbarItem>
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg hover:bg-gray-200 text-blue-600 font-semibold transition-all duration-300"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" className="font-semibold">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
    </Navbar>
  );
};

export default PublicNavbar;
