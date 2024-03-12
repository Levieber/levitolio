import aluroniPreview from "@/assets/projects/aluroni.png";
import papelitoPreview from "@/assets/projects/papelito.png";
import trackItPreview from "@/assets/projects/track-it.png";
import type { StaticImageData } from "next/image";

export type FeaturedProject = {
	preview: string | StaticImageData;
	name: string;
	description: string;
	homepage?: string;
	codeUrl?: string;
};

export const featuredProjects: [
	FeaturedProject,
	FeaturedProject,
	FeaturedProject,
] = [
	{
		preview: aluroniPreview,
		homepage: undefined,
		codeUrl: "https://github.com/Levieber/aluroni",
		name: "Aluroni",
		description:
			"Um projeto de um curso da Alura com as ferramentas adaptadas para as que recomendava e gostava, como, por exemplo, usar Vite ao invés de Create React App.",
	},
	{
		preview: trackItPreview,
		homepage: "https://track-it-six-pi.vercel.app",
		codeUrl: "https://github.com/Levieber/track-it",
		name: "Track It",
		description:
			"Um projeto de um curso da Alura com estilos e ferramentas adaptadas para para treinar tudo que estive aprendendo na teoria, usando de um projeto mais pessoal.",
	},
	{
		preview: papelitoPreview,
		homepage: "https://papelito-admin.vercel.app",
		codeUrl: "https://github.com/Levieber/papelito-admin",
		name: "Papelito",
		description:
			"Um projeto para o quarto hackathon da OneBitCode sobre uma simulação de um processo seletivo, tendo como um requisito do teste técnico a criação de um gerenciador de produtos para uma papelaria.",
	},
];
