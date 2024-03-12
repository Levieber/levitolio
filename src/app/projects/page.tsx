import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/featured-projects";
import {
	ClockIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
	RocketIcon,
	StarIcon,
	TimerIcon,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { parse } from "valibot";
import { FeaturedProject } from "./patterns/featured-project";
import { GithubProject } from "./patterns/github-project";
import { githubProjectsSchema } from "./patterns/projects-schema";

export const metadata: Metadata = {
	title: "Projetos",
	description: "Conheça os projetos de Levi Eber, um desenvolvedor fullstack",
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
		<main className="grow grid grid-rows-[30rem_repeat(2,_minmax(0,_1fr)] lg:grid-rows-[30rem_35rem_1fr] justify-center items-center p-4 gap-10">
			<section className="flex flex-col gap-3">
				<h1 className="text-5xl">Meus projetos</h1>
				<p>
					Aqui está os{" "}
					<span className="text-primary italic">
						principais e mais recentes
					</span>{" "}
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
				<nav className="flex flex-wrap gap-4">
					<Button variant="outline" asChild>
						<a href="#featured">
							<StarIcon className="inline-block mr-1" />
							Ver projetos destacados
						</a>
					</Button>
					<Button asChild>
						<a href="#recent">
							<ClockIcon className="inline-block mr-1" />
							Ver projetos recentes
						</a>
					</Button>
				</nav>
			</section>
			<section className="self-start" id="featured">
				<h2 className="text-2xl font-semibold tracking-tight">
					<RocketIcon className="inline-block mr-1 h-6 w-6" />
					Projetos em destaque
				</h2>
				<p>Os projetos que mais aprendi, que tem maior importância.</p>
				<ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-wrap">
					{featuredProjects.map((project) => (
						<li key={project.name}>
							<FeaturedProject project={project} />
						</li>
					))}
				</ul>
			</section>
			<section id="recent">
				<h2 className="text-2xl font-semibold tracking-tight">
					<TimerIcon className="inline-block mr-1 h-6 w-6" />
					Atividade recente
				</h2>
				<p>Projetos recentes que estou fazendo no Github</p>
				<ul className="mt-3 grid grid-cols-1 md:grid-cols-2 items-start gap-3">
					{githubProjects.map((project) => (
						<li key={project.id}>
							<GithubProject project={project} />
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
