import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { RocketIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">
          Levi Eber <RocketIcon className="inline-block ml-1" />
        </h1>

        <h2 className="text-xl font-serif text-pretty max-w-[32ch] text-center">
          Desenvolvedor de software focado em criar experiências web incríveis.
        </h2>
      </div>

      <div className="flex gap-2">
        <Button asChild className="bg-[hsl(201,96%,17%)] text-white">
          <a href="https://www.linkedin.com/in/levi-eber">
            <LinkedInIcon /> LinkedIn
          </a>
        </Button>

        <Button asChild className="bg-[hsl(0,0%,15%)] text-white">
          <a href="https://github.com/Levieber">
            <GitHubIcon /> GitHub
          </a>
        </Button>
      </div>
    </main>
  );
}
