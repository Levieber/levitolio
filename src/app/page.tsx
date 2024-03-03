import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="bg-background flex gap-5 items-center p-24">
			Hello World
			<Button>Click me</Button>
			<ThemeToggle />
		</main>
	);
}
