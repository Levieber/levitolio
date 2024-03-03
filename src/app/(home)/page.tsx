import avatar from "@/assets/avatar.jpeg";
import { NavigationLinks } from "@/components/navigation-links";
import { ThemeToggle } from "@/components/theme-toggle";
import * as Avatar from "@/components/ui/avatar";
import { information } from "@/data/information";
import {
	ArchiveIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { InformationAccordion } from "./patterns/information-accordion";

const links = [
	{ icon: ArchiveIcon, text: "Projetos" },
	{ icon: GitHubLogoIcon, text: "Github" },
	{ icon: LinkedInLogoIcon, text: "LinkedIn" },
];

export default function Home() {
	return (
		<main className="bg-background flex flex-col items-center p-12">
			<div className="absolute top-8 right-8">
				<ThemeToggle />
			</div>
			<Avatar.Avatar className="lg:w-72 lg:h-72 h-48 w-48">
				<Avatar.AvatarImage
					className="object-cover object-center"
					asChild
					src={avatar.src}
				>
					<Image src={avatar} alt="Levi Eber" />
				</Avatar.AvatarImage>
				<Avatar.AvatarFallback>LV</Avatar.AvatarFallback>
			</Avatar.Avatar>
			<h1 className="mt-5 mb-2 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
				Levi Eber
			</h1>
			<h2 className="text-center mb-2 italic scroll-m-20 text-lg lg:text-2xl font-semibold tracking-tight">
				Desenvolvedor de Software
			</h2>
			<NavigationLinks links={links} />
			<InformationAccordion information={information} />
		</main>
	);
}
