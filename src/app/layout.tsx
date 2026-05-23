import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Caio Querino | Desenvolvedor Backend Java | Spring | AWS",
  description: "Desenvolvedor Backend em formação com foco em Java, Spring, APIs REST, AWS e boas práticas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}