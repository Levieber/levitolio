import "./globals.css";
import { geistMono, geistSans } from "@/config/styles/font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Levi Eber é um desenvolvedor de software, sobretudo web",
  title: { absolute: "Levi Eber", template: "%s | Levi Eber" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
