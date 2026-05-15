const EMAIL = "bast-1996@hotmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d45] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <span>© {new Date().getFullYear()} Bastian Altamirano</span>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Arcan17" target="_blank" rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/bastian-altamirano-3805b4309/" target="_blank" rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-slate-400 transition-colors">{EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
