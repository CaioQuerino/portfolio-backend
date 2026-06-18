import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Caio Querino | Desenvolvedor Backend Java | Spring | AWS",
  description: "Desenvolvedor Backend em formação com foco em Java, Spring, APIs REST, AWS e boas práticas.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.className}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}