import {
	FileTextIcon,
	MixIcon,
	PersonIcon,
	StarIcon,
} from "@radix-ui/react-icons";

export const information = [
	{
		value: "about",
		title: (
			<>
				<PersonIcon className="h-5 w-5 hidden sm:inline" /> Sobre
			</>
		),
		content: (
			<>
				<p className="leading-5">
					Sou apaixonado por tecnologia e conhecimento, principalmente em
					compartilhá-lo. Comecei na programação em 2022 e é uma das minhas
					principais atividades no dia a dia.
				</p>

				<p className="leading-5">
					Atualmente, estou focado em desenvolvimento web, mas pretendo expandir
					para outras áreas.
				</p>

				<p className="leading-5">
					Gosto de assistir animes, séries e filmes, ler mangás, ouvir música,
					além de jogar, principalmente algo relacionado a estratégia,
					gerenciamento e afins.
				</p>
			</>
		),
	},
	{
		value: "soft-kills",
		title: (
			<>
				<StarIcon className="h-5 w-5 hidden sm:inline" /> Habilidades Não
				Técnicas
			</>
		),
		content: (
			<>
				<p className="leading-5">
					É proativo, comunicativo e gostar de aprender e ensinar. É um dos
					membros mais ativos das comunidades: Onebitcode e Alura.
				</p>
				<p className="leading-5">
					Consegue com certa facilidade ler documentações e ver vídeos em
					inglês. Além de ter um português claro e objetivo, importando-se com a
					gramática.
				</p>
			</>
		),
	},
	{
		value: "education",
		title: (
			<>
				<FileTextIcon className="h-5 w-5 hidden sm:inline" /> Educação
			</>
		),
		content: (
			<>
				<p className="leading-5">Ensino médio em andamento.</p>
				<p className="leading-5">
					Estudou na Alura, Onebitcode, Rocketseat e Udemy.
				</p>
			</>
		),
	},
	{
		value: "hard-skills",
		title: (
			<>
				<MixIcon className="h-5 w-5 hidden sm:inline" /> Habilidades Técnicas
			</>
		),
		content: (
			<>
				<p className="leading-5">Tem como principais habilidades técnicas:</p>
				<ul className="pl-5 list-disc">
					<li>JavaScript</li>
					<li>TypeScript</li>
					<li>React</li>
					<li>Vue</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>Node</li>
					<li>Git</li>
					<li>Docker</li>
					<li>
						Testes Automatizados
						<ul className="list-disc pl-10">
							<li>Cypress</li>
							<li>Jest/Vitest</li>
						</ul>
					</li>
					<li>
						Continuous Integration
						<ul className="list-disc pl-10">
							<li>Github Actions</li>
						</ul>
					</li>
				</ul>
				<p>Veja os projetos para saber mais habilidades.</p>
			</>
		),
	},
];
