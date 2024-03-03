import Link from "next/link";
import { ReactNode } from "react";

type NavigationLinksProps = {
	links: Array<{
		href: string;
		content: ReactNode;
	}>;
};

export function NavigationLinks({ links }: NavigationLinksProps) {
	return (
		<nav className="mb-3">
			<ul className="flex justify-center flex-wrap gap-3">
				{links.map(({ href, content }, index) => (
					<li
						// biome-ignore lint/suspicious/noArrayIndexKey: this list is static
						key={index}
					>
						<Link
							className="flex items-center gap-2 py-1 px-2 bg-primary text-primary-foreground rounded-lg"
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{content}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
