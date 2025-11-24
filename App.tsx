import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Github, 
  Book, 
  Code2, 
  AlertTriangle, 
  Zap, 
  Cpu, 
  FileCode, 
  ArrowRight,
  Menu,
  X,
  Terminal
} from 'lucide-react';
import Button from './components/Button';
import Section from './components/Section';
import GlassCard from './components/GlassCard';
import { OPPORTUNITIES, INTERPRETER_STEPS, COMPILER_STEPS, NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Existing diffuse glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* NEW: Futuristic Blue Glowing Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px] animate-pulse">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[40px] animate-float" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-400/30 rounded-full blur-[20px]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050510]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-shadow">
              <span className="font-bold text-white text-lg">L</span>
            </div>
            <span className="text-xl font-bold tracking-wide group-hover:text-cyan-300 transition-colors">Lumira</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full">
                {link.name}
              </a>
            ))}
            <Button href="#download" variant="outline" className="!py-2 !px-4 text-xs">
              Get Started
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a1f] border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-cyan-400 py-2 block border-l-2 border-transparent hover:border-cyan-400 pl-4 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button href="#download" variant="primary" fullWidth onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <Section id="home" className="pt-32 md:pt-48 pb-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"/>
              v0.1.0 Alpha
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Lumira <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Programming Language
              </span>
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">
                Short Syntax. High Power.
              </h2>
              <p className="text-lg text-slate-400 max-w-lg border-l-2 border-purple-500 pl-4 italic">
                “Fully Vibe Coded. Dual-Engine. Fast by Design.”
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="#download" icon={Download} variant="primary">Download Lumira</Button>
              <Button href="https://github.com" target="_blank" icon={Github} variant="outline">GitHub Repo</Button>
              <Button href="#documentation" icon={Book} variant="ghost">Documentation</Button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-float">
             <div className="relative z-10 bg-[#0f0f25]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-cyan-500/10 p-6 overflow-hidden font-mono text-sm group hover:border-cyan-500/30 transition-colors">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500">// Hello World in Lumira</p>
                  <p>
                    <span className="text-purple-400">fn</span> <span className="text-yellow-300">main</span>() {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">print</span>(<span className="text-green-400">"Lumira is vibe coded."</span>);
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">let</span> x = <span className="text-cyan-400">sys</span>.<span className="text-yellow-300">optimize</span>();
                  </p>
                  <p>{'}'}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 pointer-events-none" />
             </div>
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"/>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}/>
          </div>
        </div>
      </Section>

      {/* Section 2: What is Lumira (Dual Engine) */}
      <Section id="overview" background="glass">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dual-Engine Architecture</h2>
          <p className="text-slate-400">The best of both worlds: rapid scripting and native performance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PYLM */}
          <GlassCard className="relative group" hoverEffect>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Zap size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <FileCode className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">PYLM Interpreter</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>Works like CPython works for Python.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>Fully standalone; no Python dependency.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>Executes <code className="bg-white/10 px-1 rounded text-cyan-300">.lm</code> files directly.</span>
              </li>
            </ul>
          </GlassCard>

          {/* CPPLM */}
          <GlassCard className="relative group" hoverEffect>
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Cpu size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400">CPPLM Compiler</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span>Converts Lumira code → C++ code.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span>Compiles using G++ for native binaries.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span>C++ level performance with Lumira syntax.</span>
              </li>
            </ul>
          </GlassCard>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Maintained by <span className="text-white font-semibold">Next Developers</span> (First-Year College Students)
          </p>
        </div>
      </Section>

      {/* Section 3: Early Stage Warning */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 flex items-start md:items-center gap-4 backdrop-blur-sm">
          <AlertTriangle className="w-10 h-10 text-yellow-500 shrink-0" />
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-1">Early Development Stage</h3>
            <p className="text-yellow-200/70">
              Lumira engines (interpreter + compiler) are in active development. 
              Expect bugs, errors, and experimental behavior. Use with patience.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4: VS Code Extension */}
      <Section id="extension" background="darker">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-white/10 group hover:border-cyan-500/30 transition-colors">
              <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-black/20">
                <span className="text-xs text-slate-400">main.lm - Visual Studio Code</span>
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm bg-[#1e1e1e]">
                <div className="flex">
                  <div className="flex flex-col text-slate-600 select-none pr-4 text-right border-r border-white/5 mr-4">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                  </div>
                  <div>
                    <p><span className="text-[#569cd6]">import</span> <span className="text-[#4ec9b0]">std.io</span></p>
                    <p className="h-5"></p>
                    <p><span className="text-[#c586c0]">fn</span> <span className="text-[#dcdcaa]">calculate_vibe</span>(x: <span className="text-[#4ec9b0]">int</span>) {'{'}</p>
                    <p className="pl-4"><span className="text-[#c586c0]">return</span> x * <span className="text-[#b5cea8]">100</span>;</p>
                    <p>{'}'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Official VS Code Extension</h2>
            <p className="text-slate-400 text-lg">
              Get first-class support for <code className="text-cyan-400">.lm</code> files. 
              Includes syntax highlighting, colorization, and basic language intelligence.
            </p>
            <Button href="#" variant="secondary" icon={Download}>Download Extension</Button>
          </div>
        </div>
      </Section>

      {/* Section 5: Download Panel */}
      <Section id="download">
        <GlassCard className="text-center py-16 px-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <h2 className="text-4xl font-bold mb-6 relative z-10">Start Building with Lumira</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto relative z-10">
            <Button href="#" variant="primary" fullWidth className="h-14 text-base" icon={Download}>
              Download Full Package (v0.1.0)
            </Button>
            <Button href="https://github.com" target="_blank" variant="outline" fullWidth icon={Github} className="h-14 text-base">
              GitHub Repository
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-500 relative z-10">
            Includes Interpreter (PYLM), Compiler (CPPLM), and VS Code Extension.
          </p>
        </GlassCard>
      </Section>

      {/* Section 6: How it Works */}
      <Section id="how-it-works" background="darker">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Under the Hood</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Divider Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          {/* Interpreter Path */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
              <Terminal /> Interpreter Path (PYLM)
            </h3>
            <div className="space-y-8">
              {INTERPRETER_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-sm shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-cyan-200 transition-colors">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compiler Path */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
              <Cpu /> Compiler Path (CPPLM)
            </h3>
            <div className="space-y-8">
              {COMPILER_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-sm shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(147,51,234,0.1)] group-hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-200 transition-colors">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7: Future Opportunities */}
      <Section id="future">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Future Opportunities</h2>
          <p className="text-lg text-slate-400">
            Lumira is designed with top-tier UI/UX principles in mind — clean design, predictable syntax, and modern tooling. It aims to evolve into these fields:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPPORTUNITIES.map((item, idx) => (
            <GlassCard key={idx} hoverEffect className="p-6 flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#02020a] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-600 rounded flex items-center justify-center group-hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-shadow">
                <span className="font-bold text-white text-xs">L</span>
              </div>
              <span className="font-bold text-lg group-hover:text-cyan-400 transition-colors">Lumira</span>
            </a>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Next Developers</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#documentation" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
              <Book className="w-4 h-4" /> Documentation
            </a>
            <a href="#download" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
              <Download className="w-4 h-4" /> Installer
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;