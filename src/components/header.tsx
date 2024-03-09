import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

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
	return (
		<header className="flex justify-between p-2">
			<ul className="flex gap-2">
				{links.map(({ href, label }) => (
					<li>
						<Button variant="link" asChild>
							<Link className="hover:underline" href={href}>
								{label}
							</Link>
						</Button>
					</li>
				))}
			</ul>
			<ThemeToggle />
		</header>
	);
}
