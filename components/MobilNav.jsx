"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
	// {
	// 	name: "contact",
	// 	path: "/contact",
	// },
];
const MobilNav = () => {
	const path = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="p-3 flex justify-center items-center">
				<CiMenuFries className="text-[30px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col bg-slate-600">
				{/* LOGO */}
				<div className="mt-32 text-center text-2xl mb-40">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Hamza<spran className="text-accent">.</spran>
						</h1>
					</Link>
				</div>

				{/* NAV */}
				<nav className="flex flex-col gap-6 justify-center items-center">
					{links.map((link, index) => {
						return (
							<Link
								href={link.path}
								key={index}
								className={`${
									link.path === path && "text-accent border-b-2 border-accent"
								} capitalize font-medium hover:text-accent transition-all}`}
							>
								{link.name}
							</Link>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobilNav;
