import { Button } from "@/components/ui/button";
import { type FeaturedProject as Project } from "@/data/featured-projects";
import { CodeIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";

type FeaturedProjectProps = {
	project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
	return (
		<article className="flex flex-col gap-2 h-[28rem] w-full max-w-96 dark:bg-slate-800/40 bg-slate-300/80 p-3 rounded-lg">
			<Image
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
					<a rel="noopener noreferrer" target="_blank" href={project.homepage}>
						<GlobeIcon className="inline-block mr-1" />
						Visualizar projeto
					</a>
				</Button>
				<Button variant="outline" asChild>
					<a rel="noopener noreferrer" target="_blank" href={project.codeUrl}>
						<CodeIcon className="inline-block mr-1" />
						Ver código
					</a>
				</Button>
			</div>
		</article>
	);
}
