import { BannerLayout } from "@/components/banner";
import * as Accordion from "@/components/ui/accordion";
import { FileTextIcon, PersonIcon, StarIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre",
	description: "Conheça um pouco mais sobre Levi Eber, um desenvolvedor fullstack.",
}

export default function About() {
	return (
		<BannerLayout>
			<h1 className="text-2xl">
				<PersonIcon className="inline-block mr-1 h-6 w-6" /> Sobre mim
			</h1>
			<p>
				Sou apaixonado por tecnologia e conhecimento, principalmente em
				compartilhá-lo. Comecei na programação em 2022 e é uma das minhas
				principais atividades no dia a dia.
			</p>
			<Accordion.Accordion className="w-full max-w-[30rem]" type="multiple">
				<Accordion.AccordionItem value="soft-skills">
					<Accordion.AccordionTrigger>
						<h2 className="flex text-start items-center gap-2 scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
							<StarIcon className="hidden sm:inline-block mr-1 h-6 w-6" />{" "}
							Habilidades não técnicas
						</h2>
					</Accordion.AccordionTrigger>
					<Accordion.AccordionContent className="flex flex-col gap-3">
						<p>
							Sou proativo, comunicativo e gosto de aprender e ensinar. Sendo um
							dos membros mais ativos das comunidades: Onebitcode e Alura.
						</p>
						<p>
							Consigo com certa facilidade ler documentações e ver vídeos em
							inglês, fazendo Duolingo quase todos os dias. Além de ter um
							português claro e objetivo, importando-me com a gramática.
						</p>
					</Accordion.AccordionContent>
				</Accordion.AccordionItem>
				<Accordion.AccordionItem value="education">
					<Accordion.AccordionTrigger>
						<h2 className="flex text-start items-center gap-2 scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
							<FileTextIcon className="hidden sm:inline-block mr-1 h-6 w-6" />{" "}
							Educação
						</h2>
					</Accordion.AccordionTrigger>
					<Accordion.AccordionContent className="flex flex-col gap-3">
						<p>Ensino médio em andamento.</p>
						<p>Estudei na Alura, Onebitcode, Rocketseat e Udemy.</p>
					</Accordion.AccordionContent>
				</Accordion.AccordionItem>
			</Accordion.Accordion>
		</BannerLayout>
	);
}
