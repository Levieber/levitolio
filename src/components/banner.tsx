"use client";

import { cn } from "@/lib/utils";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";

export default function Banner() {
	return (
		<figure className="relative w-full h-[50rem]">
			<Image
				src="https://source.unsplash.com/random?a=1"
				alt="Papel de parede aleatório do Unsplash"
				className="object-cover rounded-lg"
				priority
				fill
			/>
			<figcaption className="text-zinc-400 absolute z-[2] top-2 left-2">
				Imagem aleatória do{" "}
				<Link
					className="underline text-zinc-500"
					target="_blank"
					rel="noopener noreferrer"
					href="https://unsplash.com/"
				>
					Unsplash
				</Link>
			</figcaption>
		</figure>
	);
}

export function BannerLayout({
	children,
	className,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) {
	return (
		<main className="relative bg-background text-foreground flex flex-col items-center p-4">
			<Banner />
			<section
				className={cn(
					"z-20 top-1/2 p-4 -translate-y-1/2 w-full max-w-56 md:max-w-[40rem] absolute rounded-xl bg-background text-foreground",
					className,
				)}
			>
				{children}
			</section>
		</main>
	);
}
