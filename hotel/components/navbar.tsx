import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  Card,
  CardBody,
} from "@nextui-org/react";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import NextLink from "next/link";

export const NavbarMain = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar isBordered className=" max-w-none h-24">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="m-5">
          <Image className="h-15" width={150} src="/img/logo.png" alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex   ">
        <Image
          className=" col-span-1 "
          width={150}
          src="/img/logo.png"
          alt="Logo"
        />
        <div className=" col-span-12 grid grid-cols-3 gap-4 rounded-full bg-[rgb(27,27,27)] p-2 ">
          <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)]  max-h-fit col-span-1">
            Home
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)] col-span-1">
            Tienda
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)] col-span-1">
            {" "}
            Sobre nosotros
          </Button>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <div  className="  col-span-12 grid grid-cols-2 gap-4  p-2 ">
          <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)]  max-h-fit col-span-1">
          <IoPerson />Cuenta
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)] col-span-1">
          <FaShoppingCart /> buy
          </Button>
        </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
