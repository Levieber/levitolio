import * as Accordion from "@/components/ui/accordion";
import { ReactNode } from "react";

type InformationAccordionProps = {
	information: Array<{
		value: string;
		title: ReactNode;
		content: ReactNode;
	}>;
};

export function InformationAccordion({
	information,
}: InformationAccordionProps) {
	return (
		<Accordion.Accordion className="w-full max-w-[30rem]" type="multiple">
			{information.map(({ value, title, content }, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: this list is static
				<Accordion.AccordionItem key={index} value={value}>
					<Accordion.AccordionTrigger>
						<h2 className="flex text-start items-center gap-2 scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
							{title}
						</h2>
					</Accordion.AccordionTrigger>
					<Accordion.AccordionContent className="flex flex-col gap-3">
						{content}
					</Accordion.AccordionContent>
				</Accordion.AccordionItem>
			))}
		</Accordion.Accordion>
	);
}
