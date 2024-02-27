"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
  const pathname = usePathname();

  return (
    <Navbar className="border-t mt-auto">
      <NavbarContent>
        <NavbarBrand>
          <Image src="/logo.png" alt="Logo" width={170} height={80} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
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
            <DropdownItem key="settings">Профіль</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Вийти
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
