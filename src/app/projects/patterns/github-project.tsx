import { Button } from "@/components/ui/button";
import { ClockIcon, GlobeIcon } from "@radix-ui/react-icons";
import { parse } from "valibot";
import {
	type GithubProject as Project,
	projectLanguagesSchema,
} from "./projects-schema";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
	year: "numeric",
	month: "long",
	day: "numeric",
});

type GithubProjectProps = {
	project: Project;
};

export const revalidate = 3600; // revalidate at most every hour

export async function GithubProject({ project }: GithubProjectProps) {
	const projectLanguages = Object.keys(
		parse(
			projectLanguagesSchema,
			await fetch(project.languages_url).then((response) => response.json()),
		),
	).join(", ");

	return (
		<article className="dark:bg-slate-800/40 bg-slate-300/80 rounded-r-lg border-l border-foreground p-2 w-full lg:w-96 h-full md:h-44">
			<p>
				<ClockIcon className="inline-block mr-1 h-4 w-4" />
				{dateFormatter.format(new Date(project.updated_at ?? Date.now()))}
			</p>
			<div className="mt-3">
				<h3>
					<a
						className="underline text-primary text-xl"
						target="_blank"
						rel="noopener noreferrer"
						href={project.html_url}
					>
						{project.name}
					</a>
				</h3>

				<p>Linguagens usadas: {projectLanguages}</p>
				{project.homepage && (
					<Button size="sm" variant="link" className="mt-3" asChild>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={project.homepage}
						>
							<GlobeIcon className="inline-block mr-1" />
							Visualizar projeto
						</a>
					</Button>
				)}
			</div>
		</article>
	);
}
