"use client";

import { cn } from "@/lib/utils";
import wallpaper from "@/assets/wallpaper.jpg";
import Image from "next/image";

export default function Banner() {
	return (
		<figure className="relative w-full h-[50rem]">
			<Image
				src={wallpaper}
				alt="Papel de parede aleatório do Unsplash"
				className="object-cover rounded-lg"
				priority
				fill
			/>
			<figcaption className="text-zinc-200 absolute z-[2] top-2 left-2">
				Imagem de{" "}
				<a
					className="underline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://unsplash.com/pt-br/fotografias/fenomeno-aurora-LhDWW8PhPoE?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
				>
					Cosmic Timetraveler no Unsplash
				</a>
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
