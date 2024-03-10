import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { featuredProjects } from "@/data/featured-projects";
import { Metadata } from "next";
import { parse } from "valibot";
import { githubProjectsSchema } from "./patterns/projects-schema";
import { GithubProject } from "./patterns/github-project";

export const metadata: Metadata = {
	title: "Projetos",
	description: "Os projetos de Levi Eber, um desenvolvedor fullstack",
};

export default async function Projects() {
	const githubProjects = parse(
		githubProjectsSchema,
		await fetch(
			"https://api.github.com/users/levieber/repos?sort=updated&per_page=10",
			{
				next: {
					revalidate: 60 * 60 * 24, // 1 day
				},
			},
		).then((response) => response.json()),
	);

	return (
		<main className="bg-background text-foreground flex items-center flex-col p-4">
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
				<h2 className="text-primary text-2xl italic">Projetos em destaque</h2>
				<p>Os projetos que mais aprendi, que tem maior importância</p>
				<ul className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-wrap">
					{featuredProjects.map((project) => (
						<li
							key={project.name}
							className="flex flex-col gap-2 w-full max-w-96 dark:bg-slate-800/40 bg-slate-300/80 p-3 rounded-lg"
						>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href={project.homepage ?? project.github}
							>
								<project.icon className="h-6 w-6 inline-block" />
								<h3 className="text-xl italic">{project.name}</h3>
								{project.description.map((description, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: this list is static
									<p key={index}>{description}</p>
								))}
							</a>
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2 className="text-2xl italic">10 projetos recentes no Github</h2>
				<p>
					Lista atualizada a cada dia e baseada no tempo do último commit feito
				</p>
				<ul className="mt-3 grid grid-cols-1 md:grid-cols-2 items-start gap-3">
					{githubProjects.map((project, index) => (
						<GithubProject key={project.id} project={project} />
					))}
				</ul>
			</section>
		</main>
	);
}
