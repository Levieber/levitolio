import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { featuredProjects } from "@/data/featured-projects";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/image-with-fallback";
import projectPreviewFallback from "@/assets/projects/fallback.png";

export const metadata: Metadata = {
	title: "Projetos",
	description: "Conheça os projetos de Levi Eber, um desenvolvedor fullstack",
};

export default async function Projects() {
	return (
		<main className="grow grid grid-rows-3 justify-evenly items-center p-4">
			<section>
				<h1 className="text-5xl">Meus projetos</h1>
				<p className="my-5 sm:my-3">
					Aqui está os{" "}
					<span className="text-accent italic">principais e mais recentes</span>{" "}
					projetos.{" "}
					<Link className="underline" href="/about" prefetch={false}>
						Quer me conhecer melhor?
					</Link>
				</p>
				<p>
					Para mais informações, pode-se verificar o{" "}
					<a
						className="underline"
						target="_blank"
						href="https://github.com/Levieber"
						rel="noopener noreferrer"
					>
						<GitHubLogoIcon className="inline-block mr-1" />
						Github
					</a>{" "}
					e{" "}
					<a
						className="underline"
						target="_blank"
						href="https://www.linkedin.com/in/levi-eber"
						rel="noopener noreferrer"
					>
						<LinkedInLogoIcon className="inline-block mr-1" />
						LinkedIn
					</a>
					, podendo, à vontade, mandar mensagens sobre.
				</p>
			</section>
			<section className="my-5">
				<h2 className="text-2xl font-semibold tracking-tight">
					Projetos em destaque
				</h2>
				<p>Os projetos que mais aprendi, que tem maior importância.</p>
				<ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-wrap">
					{featuredProjects.map((project) => (
						<li
							key={project.name}
							className="flex flex-col gap-2 h-[28rem] w-full max-w-96 dark:bg-slate-800/40 bg-slate-300/80 p-3 rounded-lg"
						>
							<ImageWithFallback
								fallback={projectPreviewFallback}
								src={project.preview}
								alt={`Visualização do projeto ${project.name}`}
								sizes="100vw"
								className="w-full h-auto rounded-lg"
								priority
							/>
							<h3 className="text-xl italic">{project.name}</h3>
							<p>{project.description}</p>
							<div className="mt-auto flex flex-wrap gap-4">
								<Button asChild>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href={project.homepage}
									>
										Visualizar projeto
									</a>
								</Button>
								<Button variant="outline" asChild>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href={project.codeUrl}
									>
										Ver código
									</a>
								</Button>
							</div>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
