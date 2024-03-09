import avatar from "@/assets/avatar.jpeg";
import { BannerLayout } from "@/components/banner";
import * as Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	ArchiveIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<BannerLayout className="flex flex-wrap justify-center sm:justify-evenly gap-4">
			<section>
				<Avatar.Avatar className="w-36 h-36">
					<Avatar.AvatarImage
						className="object-cover object-center"
						asChild
						src={avatar.src}
					>
						<Image
							priority
							src={avatar}
							alt="Levi Eber"
							width={280}
							height={280}
						/>
					</Avatar.AvatarImage>
					<Avatar.AvatarFallback className="text-5xl">LV</Avatar.AvatarFallback>
				</Avatar.Avatar>
				<h1 className="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
					Levi Eber
				</h1>
				<h2 className="scroll-m-20 text-base lg:text-lg italic font-medium tracking-tight">
					Desenvolvedor Fullstack
				</h2>
			</section>
			<section className="flex flex-col gap-4 justify-center">
				<Button variant="outline" asChild>
					<Link prefetch href="/projects">
						<ArchiveIcon className="inline-block mr-1" /> Ver projetos
					</Link>
				</Button>
				<Button variant="secondary" asChild>
					<Link prefetch href="/about">
						<PersonIcon className="inline-block mr-1" /> Conhecer mais
					</Link>
				</Button>
				<Button variant="default" asChild>
					<Link href="https://github.com/Levieber">
						<GitHubLogoIcon className="inline-block mr-1" /> Seguir no Github
					</Link>
				</Button>
				<Button variant="default" asChild>
					<Link href="https://www.linkedin.com/in/levi-eber/">
						<LinkedInLogoIcon className="inline-block mr-1" /> Seguir no
						LinkedIn
					</Link>
				</Button>
			</section>
		</BannerLayout>
	);
}
