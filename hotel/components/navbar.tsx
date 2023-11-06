import React from 'react'
import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { link, subtitle } from "./primitives";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isBlurred>
			<NavbarBrand>
			<NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
				<Link href="/">
					<Logo height={32} width={96} />
				</Link>
			</NavbarBrand>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<div className="hidden lg:flex gap-4 justify-start ml-2 ">
					<Link className={link()} href="/About" as={NextLink}>Conozcanos</Link>
					<Link className={link()} href="/Room">Habitaciones</Link>
					<Link className={link()} href="/Resto">Restaurante</Link>
					<Link className={link()} href="/Ubi">Ubicacion</Link>
					<Link className={link()} href="/Vids">Videos</Link>
					<Link className={link()} href="/">Amigos</Link>
					<Link className={link()} href="/Booking">Reservas</Link>


				</div>
			</NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
        </Link>
        <ThemeSwitch />
				<NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
          <NavbarMenuItem>
            <Link
            >Hola
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>
		</NextUINavbar>
	);
};
