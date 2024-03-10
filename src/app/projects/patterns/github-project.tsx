import { Button } from "@/components/ui/button";
import { parse } from "valibot";
import {
	type GithubProject as Project,
	projectLanguagesSchema,
} from "./projects-schema";
import { GlobeIcon } from "@radix-ui/react-icons";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
	year: "numeric",
	month: "long",
	day: "numeric",
});

type GithubProjectProps = {
	project: Project;
};

export async function GithubProject({ project }: GithubProjectProps) {
	const projectLanguages = Object.keys(
		parse(
			projectLanguagesSchema,
			await fetch(project.languages_url, {
				next: {
					revalidate: 60 * 60 * 24, // 1 day
				},
			}).then((response) => response.json()),
		),
	).join(", ");

	return (
		<li
			className="border-l border-b border-foreground p-2 flex flex-wrap gap-5 items-center h-full"
			key={project.id}
		>
			<div>
				<h3>
					<a
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
						href={project.html_url}
					>
						{project.full_name}
					</a>
				</h3>
				<p>
					Atualizado em:{" "}
					{dateFormatter.format(new Date(project.updated_at ?? Date.now()))}
				</p>
				<p>Linguagens usadas: {projectLanguages}</p>
			</div>
			{project.homepage && (
				<Button asChild>
					<a target="_blank" rel="noopener noreferrer" href={project.homepage}>
						<GlobeIcon className="inline-block mr-1" />
						Visualizar projeto
					</a>
				</Button>
			)}
		</li>
	);
}
