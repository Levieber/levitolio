import { BannerLayout } from "@/components/banner";
import Link from "next/link";

export default function Error404() {
	return (
		<BannerLayout className="flex flex-col items-center gap-2">
			<h1 className="text-accent text-3xl">Erro 404</h1>
			<h2 className="text-xl">Página não encontrada</h2>
			<p>
				Talvez seja uma boa ideia{" "}
				<Link href="/" className="underline text-primary">
					voltar para o início
				</Link>
			</p>
		</BannerLayout>
	);
}
