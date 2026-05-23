import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] text-[#e4e6ea] p-4 text-center">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent mb-6">404</h1>
      <p className="text-xl text-[#a8a8a8] mb-8">Ops! A página que você está procurando não existe.</p>
      <Link href="/" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white font-semibold hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] hover:-translate-y-1 transition-all duration-300">
        Voltar para o Início
      </Link>
    </div>
  );
}