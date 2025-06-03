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
  { name: "Explore Events", icon: CalendarRange, href: "/events" },
];

export const PublicLayoutNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo size="lg" variant="icon" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-3" justify="start">
        {navigations.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* Desktop: show search, login, signup */}
        <NavbarContent justify="end" className="hidden lg:flex">
          <Input
            classNames={{
              base: "w-3/4 h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-100 dark:bg-default-500/20",
            }}
            placeholder="Search Event..."
            size="sm"
            startContent={<Search size={18} />}
            type="search"
          />
          <NavbarItem>
            <Button variant="light">
              <Link href="/login">Log in</Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary">
              <Link href="/register">Sign Up</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        {/* Mobile: search input */}
        <div className="px-4 py-2">
          <Input
            classNames={{
              base: "w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-100 dark:bg-default-500/20",
            }}
            placeholder="Search Event..."
            size="sm"
            startContent={<Search size={18} />}
            type="search"
          />
        </div>
        {/* Mobile: navigation links */}
        {navigations.map((item) => (
          <NavbarMenuItem
            key={`${item.name}`}
            className="w-full gap-2 hover:bg-default-100 px-4 py-2 rounded-lg"
          >
            <Link
              className={cn(
                "font-medium w-full",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* Mobile: login link */}
        <NavbarMenuItem className="w-full gap-2 px-4 py-2 rounded-lg">
          <Link href="/login" className="hover:text-primary font-medium w-full">
            Login
          </Link>
        </NavbarMenuItem>
        {/* Mobile: sign up button */}
        <NavbarMenuItem className="w-full gap-2 px-4 py-2 rounded-lg">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="w-full"
          >
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
