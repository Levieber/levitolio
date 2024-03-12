import avatar from "@/assets/avatar.jpeg";
import * as Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	ArchiveIcon,
	FileTextIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
	PersonIcon,
	StarIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="grow flex flex-col items-center justify-evenly gap-8 px-4">
			<section className="flex flex-wrap justify-center items-center gap-10">
				<Avatar.Avatar className="w-52 h-52">
					<Avatar.AvatarImage
						className="object-cover object-center"
						asChild
						src={avatar.src}
					>
						<Image
							priority
							src={avatar}
							alt="Levi Eber"
							width={208}
							height={208}
						/>
					</Avatar.AvatarImage>
					<Avatar.AvatarFallback className="text-5xl">LV</Avatar.AvatarFallback>
				</Avatar.Avatar>
				<section className="flex flex-col gap-3">
					<h1 className="mt-3 scroll-m-20 text-3xl font-extrabold tracking-tight">
						Levi Eber
					</h1>
					<h2 className="scroll-m-20 text-xl italic font-medium tracking-tight">
						Desenvolvedor Fullstack
					</h2>
					<Button variant="outline" asChild>
						<Link prefetch href="/projects">
							<ArchiveIcon className="inline-block mr-1" />
							Ver projetos
						</Link>
					</Button>
					<Button variant="default" asChild>
						<a
							target="_blank"
							href="https://github.com/Levieber"
							rel="noopener noreferrer"
						>
							<GitHubLogoIcon className="inline-block mr-1" />
							Seguir no Github
						</a>
					</Button>
					<Button variant="default" asChild>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/levi-eber"
							rel="noopener noreferrer"
						>
							<LinkedInLogoIcon className="inline-block mr-1" />
							Seguir no LinkedIn
						</a>
					</Button>
				</section>
			</section>
			<section className="max-w-[40rem]">
				<section className="flex flex-col gap-2">
					<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
						<PersonIcon className="inline-block mr-1 h-6 w-6" />
						Sobre mim
					</h2>
					<p>
						Sou apaixonado por tecnologia e conhecimento, principalmente em
						compartilhá-lo.
					</p>
					<p>
						Comecei na programação em 2022 e é uma das minhas principais
						atividades no dia a dia.
					</p>
					<p>
						Sou um dos membros mais ativos das comunidades: Onebitcode e Alura.
					</p>
				</section>
				<section className="my-5 flex flex-col gap-2">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						<StarIcon className="inline-block mr-1 h-6 w-6" />
						Habilidades não técnicas
					</h3>
					<p>Sou proativo, comunicativo e gosto de aprender e ensinar.</p>
					<p>
						Consigo com certa facilidade ler documentações e ver vídeos em
						inglês, fazendo Duolingo quase todos os dias.
					</p>
					<p>
						Além de ter um português claro e objetivo, importando-me com a
						gramática.
					</p>
				</section>
				<section className="flex flex-col gap-2">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						<FileTextIcon className="inline-block mr-1 h-6 w-6" />
						Educação
					</h3>
					<p>Ensino médio em andamento.</p>
					<p>Estudei na Alura, Onebitcode, Rocketseat e Udemy.</p>
				</section>
			</section>
		</main>
	);
}
