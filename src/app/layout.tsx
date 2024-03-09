import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: { template: "%s | Levi Eber", absolute: "Levi Eber" },
	description: "Levi Eber é um desenvolvedor de software, sobretudo web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={cn("min-h-screen font-sans antialiased", inter.variable)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					enableColorScheme
					disableTransitionOnChange
				>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
