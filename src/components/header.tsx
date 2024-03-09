"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import * as Dropdown from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

type HeaderLink = Array<{
	label: string;
	href: string;
}>;

const links: HeaderLink = [
	{
		label: "Início",
		href: "/",
	},
	{
		label: "Sobre",
		href: "/about",
	},
	{
		label: "Projetos",
		href: "/projects",
	},
];

export function Header() {
	const router = useRouter();

	return (
		<header className="flex justify-center sm:justify-between p-2">
			<ul className="hidden sm:flex sm:gap-2">
				{links.map(({ href, label }) => (
					<li key={href}>
						<Button variant="link" asChild>
							<Link className="hover:underline" href={href}>
								{label}
							</Link>
						</Button>
					</li>
				))}
			</ul>
			<div className="flex gap-2">
				<Dropdown.DropdownMenu>
					<Dropdown.DropdownMenuTrigger className="sm:hidden" asChild>
						<Button>Abrir menu</Button>
					</Dropdown.DropdownMenuTrigger>
					<Dropdown.DropdownMenuContent>
						{links.map(({ href, label }) => (
							<Dropdown.DropdownMenuItem key={href}>
								<Link href={href}>{label}</Link>
							</Dropdown.DropdownMenuItem>
						))}
					</Dropdown.DropdownMenuContent>
				</Dropdown.DropdownMenu>
				<ThemeToggle />
			</div>
		</header>
	);
}
