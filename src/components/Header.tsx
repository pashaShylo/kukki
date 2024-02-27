"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="/logo.png" alt="Logo" width={170} height={80} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            as={NextLink}
            color={pathname === "/" ? "primary" : "foreground"}
            href="/"
          >
            Головна
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.includes("/sections")}>
          <Link
            as={NextLink}
            color={pathname.includes("/sections") ? "primary" : "foreground"}
            href="/sections"
            aria-current="page"
          >
            Секції
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.includes("/recommendation")}>
          <Link
            as={NextLink}
            color={
              pathname.includes("/recommendation") ? "primary" : "foreground"
            }
            href="/recommendation"
          >
            Рекомендація
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="sm:flex hidden">
          <Link as={NextLink} href="/login">
            Логін
          </Link>
        </NavbarItem>
        <NavbarItem className="sm:flex hidden">
          <Button as={NextLink} color="primary" href="/sign-in" variant="flat">
            Реєстрація
          </Button>
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Нікіта Коркунда"
              size="sm"
              src="./avatar.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Увійшли як</p>
              <p className="font-semibold">kukki@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings" as={Link} href='/account' color='default'>Профіль</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Вийти
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color={pathname === "/" ? "primary" : "foreground"}
            className="w-full"
            href="/"
            size="lg"
          >
            Головна
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color={pathname === "/sections" ? "primary" : "foreground"}
            className="w-full"
            href="/sections"
            size="lg"
          >
            Секції
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color={pathname === "/recommendation" ? "primary" : "foreground"}
            className="w-full"
            href="/recommendation"
            size="lg"
          >
            Рекомендація
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color={pathname === "/login" ? "primary" : "foreground"}
            className="w-full"
            href="/login"
            size="lg"
          >
            Логін
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color={pathname === "/sign-in" ? "primary" : "foreground"}
            className="w-full"
            href="/sign-in"
            size="lg"
          >
            Реєстрація
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
