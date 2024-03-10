import {
	ComponentBooleanIcon,
	StarIcon,
	RocketIcon,
} from "@radix-ui/react-icons";

type FeaturedProject = {
	icon: React.ComponentType<{ className?: string }>;
	name: string;
	description: string[];
	homepage?: string;
	github?: string;
};

export const featuredProjects: [
	FeaturedProject,
	FeaturedProject,
	FeaturedProject,
] = [
	{
		homepage: undefined,
		github: "https://github.com/Levieber/aluroni",
		icon: ComponentBooleanIcon,
		name: "Aluroni",
		description: [
			"Um projeto de um curso da Alura, onde resolvi adaptar as ferramentas usada para o meu gosto, como, por exemplo, usar Vite ao invés de Create React App.",
			"Aprendi bastante sobre React e Typescript, principalmente sobre os tópicos de performance e roteamento com React. Além de aprender sobre como refatorar o código de uma ferramenta para outra.",
		],
	},
	{
		homepage: "https://track-it-six-pi.vercel.app",
		github: "https://github.com/Levieber/track-it",
		icon: StarIcon,
		name: "Track It",
		description: [
			"Um projeto de um curso da Alura, onde resolvi adaptar o estilo e ferramentas para treinar tudo que estive aprendendo na teoria com um projeto mais pessoal.",
			"Pratiquei bastante sobretudo sobre Vue, roteamento com Vue Router, gerenciamento de estado com Pinia, Continuos Integration com Github Actions e testes com Cypress e Vitest.",
		],
	},
	{
		homepage: "https://papelito-admin.vercel.app",
		github: "https://github.com/Levieber/papelito-admin",
		icon: RocketIcon,
		name: "Papelito",
		description: [
			"Um projeto para o quarto hackathon da OneBitCode, simulação de um	processo seletivo, onde fazíamos as etapas de envio de currículo, entrevista e teste técnico. Onde o teste técnico era para criar um projeto de gerenciamento de produtos de uma papelaria.",
			"Utilizei Vue e Fastify, praticando principalmente: CRUD e autenticação no Fastify, roteamento e a integração com a API no front-end com Vue. Além de praticar o deploy usando Docker, já que a versão utilizada do Node.js ainda não tinha muito suporte.",
		],
	},
];
