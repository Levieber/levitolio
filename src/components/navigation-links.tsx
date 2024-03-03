type NavigationLinksProps = {
	links: Array<{
		icon: React.ElementType;
		text: string;
	}>;
};

export function NavigationLinks({ links }: NavigationLinksProps) {
	return (
		<nav className="mb-3">
			<ul className="flex justify-center flex-wrap gap-3">
				{links.map((link, index) => (
					<li
						// biome-ignore lint/suspicious/noArrayIndexKey: this list is static
						key={index}
						className="flex items-center gap-2 py-1 px-2 bg-primary text-primary-foreground rounded-lg"
					>
						<link.icon /> {link.text}
					</li>
				))}
			</ul>
		</nav>
	);
}
