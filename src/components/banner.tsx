import wallpaper from "@/assets/wallpaper.jpg";
import Image from "next/image";

export function Banner() {
	return (
		<figure className="relative w-full h-full">
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
