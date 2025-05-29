"use client";

import { Logo } from "@/component/ui/Logo";
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
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo size="lg" variant="icon" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-3" justify="center">
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
        <NavbarContent justify="end" className="hidden lg:flex">
          <Input
            classNames={{
              base: "w-1/2 h-10",
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
            <Link href="#" className="hover:text-primary">
              Login
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
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
      </NavbarMenu>
    </Navbar>
  );
};
