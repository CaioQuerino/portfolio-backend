"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".tech-card, .project-card, .education-item, .contact-method").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    if (heroRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.cssText = `position: absolute; width: 2px; height: 2px; background: rgba(0, 212, 255, 0.3); border-radius: 50%; pointer-events: none; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation: float ${3 + Math.random() * 4}s ease-in-out infinite; animation-delay: ${Math.random() * 2}s;`;
        heroRef.current.appendChild(particle);
      }
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const projects = [
    {
      title: "Sistema de Gestão de Pet Shop",
      description: "Boas práticas com servidor Node, Prisma, Next.JS",
      tags: ["Node.js", "Prisma", "Next.js"],
      link: "https://github.com/CaioQuerino/Pet_Shop_2.0"
    },
    {
      title: "Pratizen",
      description: "Projeto social desenvolvido com Angular e Firebase, integrando APIs ViaCep e Telegram",
      tags: ["Angular", "POO", "Firebase", "API ViaCep", "API Telegram"],
      link: "https://github.com/CaioQuerino/pratizen",
      status: "Em andamento"
    },
    {
      title: "INECS",
      description: "Landing Page institucional desenvolvida para empresa.",
      tags: ["React", "CSS"],
      link: "https://github.com/CaioQuerino/inecs"
    },
    {
      title: "Portal NEXORA",
      description: "Educação tecnológica acessível e orientada ao mercado de trabalho.",
      tags: ["Node", "Next", "Supabase", "TypeScript"],
      link: "https://github.com/Instituto-Nexora/Portal_NEXORA"
    }
  ];

  const technologies = [
    { name: "Java", icon: "java" },
    { name: "Spring", icon: "spring" },
    { name: "NodeJS", icon: "nodejs" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Supabase", icon: "supabase" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "Postman", icon: "postman" }
  ];

  return (
    <>
      <Head>
        <title>Caio Querino | Desenvolvedor Backend Java | Spring | AWS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#00d4ff]/20 backdrop-blur-md ${scrolled ? "bg-[#0f0f23]/98 shadow-[0_2px_20px_rgba(0,0,0,0.3)]" : "bg-[#0f0f23]/95"}`}>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 flex justify-between items-center h-[70px]">
          <div className="text-2xl font-bold">
            <Link href="#home" className="text-[#00d4ff] hover:text-[#0099cc] transition-colors">Caio Querino</Link>
          </div>
          <ul className={`md:flex gap-8 list-none ${isMenuOpen ? "flex flex-col absolute top-[70px] left-0 w-full bg-[#0f0f23]/98 p-8 border-t border-[#00d4ff]/20" : "hidden"}`}>
            {["home", "about", "skills", "projects", "education", "contact"].map((item) => (
              <li key={item} className="my-2 md:my-0">
                <Link href={`#${item}`} className="text-[#e4e6ea] font-medium hover:text-[#00d4ff] relative group transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item === "home" ? "Início" : item === "about" ? "Sobre" : item === "skills" ? "Tecnologias" : item === "education" ? "Educação" : item === "contact" ? "Contato" : item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`w-6 h-0.5 bg-[#00d4ff] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#00d4ff] transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#00d4ff] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]" ref={heroRef}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_100_100%22><defs><pattern_id=%22grid%22_width=%2210%22_height=%2210%22_patternUnits=%22userSpaceOnUse%22><path_d=%22M_10_0_L_0_0_0_10%22_fill=%22none%22_stroke=%22%2300d4ff%22_stroke-width=%220.5%22_opacity=%220.1%22/></pattern></defs><rect_width=%22100%22_height=%22100%22_fill=%22url(%23grid)%22/></svg>')] opacity-20 pointer-events-none" style={{ animation: 'float 20s ease-in-out infinite' }}></div>
        <div className="relative z-10 text-center flex flex-col items-center px-4 w-full">
          <div className="flex flex-col items-center gap-8">
            <img src="/images/Caio.png" alt="Foto de Caio Querino" className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full object-cover border-4 border-[#00d4ff] shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent mb-2" ref={heroTitleRef}>Caio Querino</h1>
              <h2 className="text-xl md:text-2xl text-[#a8a8a8] mb-4">Desenvolvedor Backend Java | Spring | AWS</h2>
              <p className="text-lg text-[#a8a8a8] mb-8 max-w-[600px] mx-auto">24 anos · Formando em Análise e Desenvolvimento de Sistemas · Foco em Java, Spring, APIs REST, AWS e boas práticas.</p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a href="/docs/Caio_Querino_Curriculo_FullStack.pdf" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0099cc] text-white font-semibold hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] transition-all duration-300" download>
                  <i className="fas fa-download"></i> Baixar Currículo
                </a>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a href="mailto:caioquerino@souunisuam.com.br" className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 hover:bg-[#00d4ff] hover:text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] transition-all duration-300 text-xl" title="Email"><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/caio-querino-1257622a5" className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 hover:bg-[#00d4ff] hover:text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] transition-all duration-300 text-xl" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.github.com/CaioQuerino" className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 hover:bg-[#00d4ff] hover:text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] transition-all duration-300 text-xl" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#00d4ff] text-2xl animate-bounce"><i className="fas fa-chevron-down"></i></div>
      </section>

      <main>
        <section id="about" className="py-20 relative bg-[#1a1a2e]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#0099cc] after:rounded-full">Sobre Mim</h2>
            <div className="max-w-[800px] mx-auto text-center text-lg text-[#a8a8a8] leading-relaxed space-y-6">
              <p>Brasileiro, 24 anos. Meu primeiro contato com programação foi em 2010. Desde então, decidi seguir na área de T.I. com foco em desenvolvimento backend.</p>
              <p>Atualmente meus estudos estão focados em <strong className="text-white">Java e Spring Framework</strong>. Tenho sólida aplicação de <strong className="text-white">Design Patterns, Arquitetura em Camadas, Princípios SOLID</strong> e boas práticas na construção de <strong className="text-white">APIs REST</strong>.</p>
              <p>Possuo familiaridade com metodologias ágeis (Scrum e Kanban) e experiência em serviços de <strong className="text-white">cloud AWS</strong> (EC2, S3, Route 53, RDS, ECS e EKS) para deploy e operação de aplicações.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent">Tecnologias</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group tech-card">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#1a1a2e] rounded-xl border border-[#00d4ff]/20 group-hover:border-[#00d4ff] transition-all duration-300 group-hover:-translate-y-2">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`} 
                      alt={tech.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <span className="text-sm text-[#a8a8a8] group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#1a1a2e]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent">Projetos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="p-6 rounded-2xl bg-[#1a1a2e] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 group project-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">{project.title}</h3>
                    <a href={project.link} target="_blank" className="text-[#a8a8a8] hover:text-white text-xl transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <p className="text-[#a8a8a8] mb-4">{project.description}</p>
                  {project.status && <p className="text-sm text-[#00d4ff] mb-4 italic">{project.status}</p>}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs border border-[#00d4ff]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent">Educação</h2>
            <div className="max-w-[800px] mx-auto">
              <div className="education-item p-8 rounded-2xl bg-[#1a1a2e] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Análise e Desenvolvimento de Sistemas</h3>
                    <p className="text-[#00d4ff] text-lg font-medium">UNISUAM</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm border border-[#00d4ff]/20">
                      Em andamento
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-[#a8a8a8] text-lg leading-relaxed">
                  Focado na construção de soluções modernas, escaláveis e voltadas para problemas reais, aplicando as melhores práticas de desenvolvimento e arquitetura.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#1a1a2e]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent">Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="mailto:caioquerino@souunisuam.com.br" className="contact-method p-8 rounded-2xl bg-[#1a1a2e] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-2xl group-hover:bg-[#00d4ff] group-hover:text-white transition-all">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-[#a8a8a8]">caioquerino@souunisuam.com.br</p>
              </a>
              <a href="https://www.linkedin.com/in/caio-querino-1257622a5" target="_blank" className="contact-method p-8 rounded-2xl bg-[#1a1a2e] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-2xl group-hover:bg-[#00d4ff] group-hover:text-white transition-all">
                  <i className="fab fa-linkedin"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-[#a8a8a8]">in/caio-querino</p>
              </a>
              <a href="https://www.github.com/CaioQuerino" target="_blank" className="contact-method p-8 rounded-2xl bg-[#1a1a2e] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-2xl group-hover:bg-[#00d4ff] group-hover:text-white transition-all">
                  <i className="fab fa-github"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-[#a8a8a8]">@CaioQuerino</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a2e] py-8 text-center border-t border-[#00d4ff]/20">
        <div className="max-w-[1200px] mx-auto px-4 text-[#a8a8a8]">
          <p>© 2025 Caio Querino Salustriano Marques. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Desenvolvedor Backend Java | Spring | AWS</p>
        </div>
      </footer>

      {showScrollTop && (
        <button className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0099cc] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 z-50" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
