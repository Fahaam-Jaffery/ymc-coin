import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, Check, ChevronDown, CircleDot,
  Code2, Copy, Cpu, ExternalLink, GitBranch, Layers3, Menu, Network, ShieldCheck,
  Sparkles, Terminal, Wallet, X, Zap
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

const allocations = [
  { name: "Ecosystem & liquidity", percent: 40, color: "#45f0dc", note: "Community growth, liquidity planning and ecosystem incentives." },
  { name: "Network rewards", percent: 20, color: "#5a8dff", note: "Illustrative rewards distributed over a proposed four-year schedule." },
  { name: "Team & engineering", percent: 20, color: "#a78bfa", note: "Proposed one-year cliff followed by three-year linear vesting." },
  { name: "Treasury", percent: 10, color: "#f5b65c", note: "A reserve concept for operations and long-term network development." },
  { name: "Partner grants", percent: 10, color: "#f08ab6", note: "Potential grants for builders, integrations and community programs." }
];
const milestones = [
  { n: "01", phase: "Research", status: "CONCEPT", title: "Define the foundations", body: "Architecture research, design assumptions, governance principles and a transparent technical brief." },
  { n: "02", phase: "Specification", status: "PLANNED", title: "Make the design testable", body: "Consensus specification, threat model, token distribution policy and measurable acceptance criteria." },
  { n: "03", phase: "Prototype", status: "FUTURE", title: "Build in the open", body: "A possible prototype and reproducible tests — only after the design is reviewed and resourced." },
  { n: "04", phase: "Validation", status: "FUTURE", title: "Independent review", body: "Security review, performance testing and public documentation before any production claims." }
];

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="section-heading"><span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span><h2 className={light ? "text-white" : ""}>{title}</h2>{text && <p>{text}</p>}</div>;
}

function YmcMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 3.5 43 14.25v19.5L24 44.5 5 33.75v-19.5L24 3.5Z" stroke="currentColor" strokeOpacity=".48" strokeWidth="1.4"/>
    <path d="M13 13.5 24 25l11-11.5M24 25v11" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="13.5" r="2.4" fill="#45F0DC"/><circle cx="35" cy="13.5" r="2.4" fill="#5A8DFF"/><circle cx="24" cy="36" r="2.4" fill="#45F0DC"/>
  </svg>;
}

function NetworkVisual() {
  const stages = [
    { n: "01", title: "Transaction", detail: "Signed request", icon: <Wallet size={17} />, tone: "mint" },
    { n: "02", title: "Execution", detail: "EVM target", icon: <Cpu size={17} />, tone: "blue" },
    { n: "03", title: "Validator quorum", detail: "Proposed IBFT flow", icon: <ShieldCheck size={17} />, tone: "violet" },
    { n: "04", title: "Finality", detail: "Receipt returned", icon: <Check size={17} />, tone: "mint" }
  ];
  return <div className="hero-system" aria-label="Illustrative transaction path from submission through execution and validator quorum to finality">
    <div className="system-card">
      <div className="system-card-head"><span className="system-overline"><span className="live-dot" /> CONCEPTUAL NETWORK FLOW</span><span className="system-index">YMC / 01</span></div>
      <div className="system-intro"><div className="system-mark"><YmcMark size={44}/></div><div><b>One path to finality.</b><p>How a transaction could move through the proposed stack.</p></div></div>
      <div className="flow-stages">{stages.map((stage, i) => <div className="flow-stage-wrap" key={stage.n}>
        <div className={`flow-stage ${stage.tone}`}><span className="flow-stage-icon">{stage.icon}</span><span className="flow-stage-copy"><small>{stage.n} / STAGE</small><b>{stage.title}</b><em>{stage.detail}</em></span><span className="flow-stage-state">{i === 3 ? "END" : "NEXT"}{i !== 3 && <ArrowDownRight size={13}/>}</span></div>
        {i !== 3 && <div className="flow-connector"><i /></div>}
      </div>)}</div>
      <div className="system-card-foot"><span><span className="status-ring" /> PROPOSED ARCHITECTURE</span><span className="system-target"><b>1.2s</b> target block time*</span></div>
    </div>
    <div className="system-footnote"><span>*</span> Design target only — not measured, deployed, or live.</div>
  </div>;
}

const HERO_PHRASES = ["decentralized.", "scalable.", "secure.", "developer-first."];

export default function App() {
  const [typedPhrase, setTypedPhrase] = useState("decentralized.");
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setTypedPhrase("decentralized.");
      return;
    }
    let phraseIndex = 0;
    let charIndex = HERO_PHRASES[0].length;
    let deleting = true;
    let timeoutId: number;
    const tick = () => {
      const phrase = HERO_PHRASES[phraseIndex];
      if (deleting) {
        charIndex = Math.max(0, charIndex - 1);
        setTypedPhrase(phrase.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % HERO_PHRASES.length;
          timeoutId = window.setTimeout(tick, 260);
          return;
        }
        timeoutId = window.setTimeout(tick, 42);
        return;
      }
      const nextPhrase = HERO_PHRASES[phraseIndex];
      charIndex = Math.min(nextPhrase.length, charIndex + 1);
      setTypedPhrase(nextPhrase.slice(0, charIndex));
      if (charIndex === nextPhrase.length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 1450);
      } else {
        timeoutId = window.setTimeout(tick, 72);
      }
    };
    timeoutId = window.setTimeout(tick, 1450);
    return () => window.clearTimeout(timeoutId);
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [txRate, setTxRate] = useState(1800);
  const [capacity, setCapacity] = useState(3500);
  const [workload, setWorkload] = useState("nominal");
  const [selectedAllocation, setSelectedAllocation] = useState(0);
  const [traceStep, setTraceStep] = useState(2);
  const [copied, setCopied] = useState(false);
  const effectiveCapacity = Math.round(capacity * ({ conservative: 0.55, nominal: 0.75, aggressive: 0.9 } as Record<string, number>)[workload]);
  const utilization = Math.min(999, Math.round(txRate / effectiveCapacity * 100));
  const headroom = effectiveCapacity - txRate;
  const trace = [
    { title: "Submit", sub: "Transaction received", detail: "A client submits a signed transaction to a proposed network entry point. In a real implementation, signature checks and fee rules would be enforced here." },
    { title: "Propose", sub: "Block candidate formed", detail: "A designated proposer groups eligible transactions into a candidate block. Ordering, limits and transaction validity would be specified by the protocol." },
    { title: "Quorum", sub: "Validators vote", detail: "Validators exchange votes under the proposed IBFT-style consensus model. The diagram is educational; no validators or messages are running." },
    { title: "Finalize", sub: "Receipt becomes final", detail: "After a valid quorum, a real chain could commit the block and return a receipt. This interface does not submit or finalize any transaction." }
  ];
  const configText = useMemo(() => JSON.stringify({ network: "YMC concept", chainId: "TBD", consensus: "proposed-dpos-ibft2", evmCompatibility: "target", status: "illustrative-only" }, null, 2), []);

  async function copyConfig() {
    try {
      await navigator.clipboard.writeText(configText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return <div className="min-h-screen overflow-hidden bg-background text-foreground">
    <div className="top-disclaimer"><span className="tiny-pulse" /> CONCEPT PROJECT <span className="disclaimer-divider">/</span> No live network or token contract</div>
    <header className="site-header">
      <div className="container flex h-[76px] items-center justify-between">
        <a href="#home" className="brand" aria-label="YMC home"><span className="brand-symbol"><YmcMark size={29}/></span><span className="brand-word">YMC<span>.</span><small>NETWORK CONCEPT</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#architecture">Architecture</a><a href="#explorer">Explore</a><a href="#tokenomics">Tokenomics</a><a href="#roadmap">Roadmap</a>
        </nav>
        <div className="header-actions"><a className="header-github" href="https://github.com/Fahaam-Jaffery/ymc-coin" target="_blank" rel="noreferrer">View source <ExternalLink size={14}/></a><Button size="sm" onClick={() => document.getElementById("developer")?.scrollIntoView({ behavior: "smooth" })}>For builders <ArrowUpRight size={15}/></Button></div>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
      {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[["Architecture","#architecture"],["Explore","#explorer"],["Tokenomics","#tokenomics"],["Roadmap","#roadmap"],["For builders","#developer"]].map(([label,href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}<ArrowUpRight size={15}/></a>)}</nav>}
    </header>

    <main>
      <section id="home" className="hero-section">
        <div className="hero-grid-bg" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" /> A NEW LAYER OF POSSIBILITY <span className="kicker-index">001 / 004</span></div>
            <h1>Built for<br/>what comes<span className="hero-type-wrap"><span className="gradient-text hero-typed-word" aria-hidden="true">{typedPhrase}</span><span className="typewriter-cursor" aria-hidden="true" /></span><span className="sr-only">next: decentralized, scalable, secure, and developer-first infrastructure.</span></h1>
            <p className="hero-lead">A fresh take on Layer 1 infrastructure. Designed around useful applications, clear mechanics, and a developer experience that gets out of the way.</p>
            <div className="hero-actions"><Button size="lg" onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}>Explore the concept <ArrowRight size={17}/></Button><Button size="lg" variant="secondary" onClick={() => document.getElementById("developer")?.scrollIntoView({ behavior: "smooth" })}><Code2 size={17}/> Developer overview</Button></div>
            <div className="hero-footnote"><span className="footnote-icon"><CircleDot size={14}/></span><span>Early-stage concept. <b>Open by design.</b><br/><small>Specifications and performance figures are illustrative.</small></span></div>
          </div>
          <NetworkVisual/>
        </div>
        <div className="container hero-bottom"><span><span className="scroll-line" /> SCROLL TO EXPLORE</span><span className="mono">YMC / DESIGN BLUEPRINT / 2026</span></div>
      </section>

      <section className="metrics-strip"><div className="container metrics-grid">
        {[["01","Independent Layer 1","Proposed architecture"],["1.2s","Target block time","Design target · not measured"],["3,500","Illustrative TPS","Not a benchmark"],["EVM","Compatibility target","Subject to implementation"]].map(([value,label,detail]) => <div className="metric" key={label}><div className="metric-value">{value}</div><div className="metric-label">{label}</div><div className="metric-detail">{detail}</div></div>)}
      </div></section>

      <section id="architecture" className="section-pad">
        <div className="container"><SectionHeading eyebrow="01 / SYSTEM DESIGN" title="A clearer path from idea to infrastructure." text="Explore the proposed building blocks behind the YMC concept — and the design intent behind each one."/>
          <div className="architecture-grid">
            <Card className="architecture-main"><div className="architecture-main-top"><span className="soft-icon"><Network size={19}/></span><span className="status-pill"><span/> PROPOSED ARCHITECTURE</span></div><h3>One coherent stack.<br/><span>Designed to work together.</span></h3><p>YMC is imagined as an independent Layer 1 with an EVM-compatible execution environment and a validator-based consensus design. These are targets to investigate, not implemented features.</p>
              <div className="stack-diagram">{[{n:"03",name:"Application layer",desc:"Wallets · dApps · integrations",icon:<Blocks size={17}/>},{n:"02",name:"Execution layer",desc:"EVM compatibility target",icon:<Cpu size={17}/>},{n:"01",name:"Consensus & settlement",desc:"Proposed DPoS + IBFT 2.0",icon:<ShieldCheck size={17}/> }].map((item,i)=><div className="stack-row" key={item.n}><div className="stack-number">{item.n}</div><div className="stack-icon">{item.icon}</div><div className="stack-text"><b>{item.name}</b><small>{item.desc}</small></div><div className="stack-status">{i===0?"EXPERIENCE":i===1?"EXECUTION":"FOUNDATION"}</div></div>)}</div>
            </Card>
            <div className="architecture-side"><Card className="mini-feature"><div className="feature-icon"><Zap size={19}/></div><span className="mini-label">01 — PERFORMANCE</span><h3>Fast by intention.</h3><p>Sub-second to low-second finality is a design question to validate through benchmarks, not a promise.</p><a href="#network-lab">Test the assumptions <ArrowRight size={14}/></a></Card><Card className="mini-feature"><div className="feature-icon blue-feature"><ShieldCheck size={19}/></div><span className="mini-label">02 — RELIABILITY</span><h3>Trust the process.</h3><p>Consensus safety, validator incentives, and failure recovery need explicit specifications and independent review.</p><a href="#security">Read trust principles <ArrowRight size={14}/></a></Card></div>
          </div>
        </div>
      </section>

      <section id="network-lab" className="section-pad lab-section"><div className="container"><div className="lab-heading-row"><SectionHeading eyebrow="02 / INTERACTIVE MODEL" title="Stress-test the assumptions." text="Adjust the inputs and see how a hypothetical workload compares with a chosen capacity target."/><div className="demo-stamp"><Sparkles size={14}/> INTERACTIVE DEMO</div></div>
        <div className="lab-layout"><Card className="lab-controls"><div className="card-topline"><span>MODEL INPUTS</span><span className="mono">YMC-LAB / 01</span></div>
          <div className="range-field"><div className="range-label"><label htmlFor="tx-rate">Incoming transactions</label><strong>{txRate.toLocaleString()} <small>TPS</small></strong></div><input id="tx-rate" type="range" min="100" max="5000" step="100" value={txRate} onChange={e=>setTxRate(Number(e.target.value))}/><div className="range-ends"><span>100 TPS</span><span>5,000 TPS</span></div></div>
          <div className="range-field"><div className="range-label"><label htmlFor="capacity">Capacity target</label><strong>{capacity.toLocaleString()} <small>TPS</small></strong></div><input id="capacity" type="range" min="500" max="5000" step="100" value={capacity} onChange={e=>setCapacity(Number(e.target.value))}/><div className="range-ends"><span>500 TPS</span><span>5,000 TPS</span></div></div>
          <div className="range-field"><label className="select-label" htmlFor="workload">Workload assumption</label><div className="select-wrap"><select id="workload" value={workload} onChange={e=>setWorkload(e.target.value)}><option value="conservative">Conservative · 55% usable</option><option value="nominal">Nominal · 75% usable</option><option value="aggressive">Aggressive · 90% usable</option></select><ChevronDown size={16}/></div></div>
          <div className="model-note"><span><CircleDot size={14}/></span><p>This simple model applies a utilization factor to a hypothetical capacity. It does not simulate a blockchain, network latency, queues or consensus.</p></div>
        </Card>
        <Card className="lab-results"><div className="card-topline"><span>MODEL OUTPUT</span><span className="model-tag">NOT LIVE DATA</span></div><div className="utilization-top"><div><span className="result-label">Estimated utilization</span><div className="big-number">{utilization}<small>%</small></div></div><div className={utilization>100?"util-badge danger":utilization>80?"util-badge warning":"util-badge"}><span/>{utilization>100?"Over target":utilization>80?"High utilization":"Within model"}</div></div>
          <div className="util-track"><div className="util-fill" style={{width:`${Math.min(utilization,100)}%`}}/><div className="util-marker" style={{left:`${Math.min(utilization,100)}%`}}/></div><div className="track-labels"><span>0% · Idle</span><span>100% · Capacity</span></div>
          <div className="result-cards"><div><span>Effective capacity</span><b>{effectiveCapacity.toLocaleString()} <small>TPS</small></b></div><div><span>{headroom>=0?"Modelled headroom":"Capacity shortfall"}</span><b className={headroom<0?"text-rose-300":""}>{Math.abs(headroom).toLocaleString()} <small>TPS</small></b></div></div>
          <div className="model-verdict"><div className="verdict-icon">{utilization>100?<ArrowDownRight size={17}/>:<ArrowUpRight size={17}/>}</div><p>{utilization>100?"The selected workload exceeds the effective capacity assumption. A real system would need queueing, rejection or additional capacity.":utilization>80?"The model leaves a narrow margin. Real-world performance would depend on transaction mix, hardware and network conditions.":"The selected workload fits within the modelled capacity. This is a planning illustration, not evidence of actual performance."}</p></div>
        </Card></div>
      </div></section>

      <section id="explorer" className="section-pad"><div className="container"><SectionHeading eyebrow="03 / TRANSACTION JOURNEY" title="Follow a transaction through the idea." text="A guided, fictional walkthrough of how a transaction might move through a validator-based network."/>
        <div className="trace-layout"><div className="trace-steps">{trace.map((step,i)=><button key={step.title} onClick={()=>setTraceStep(i)} className={traceStep===i?"trace-step active":"trace-step"}><span className="trace-number">0{i+1}</span><span className="trace-copy"><b>{step.title}</b><small>{step.sub}</small></span><ArrowRight size={16}/></button>)}</div><Card className="trace-detail"><div className="trace-detail-top"><span className="trace-illustration">{traceStep===0?<Wallet/>:traceStep===1?<Blocks/>:traceStep===2?<Network/>:<Check/>}</span><span className="model-tag">ILLUSTRATIVE FLOW</span></div><span className="mini-label">STEP 0{traceStep+1} / 04</span><h3>{trace[traceStep].title}</h3><p>{trace[traceStep].detail}</p><div className="trace-progress">{trace.map((s,i)=><button key={s.title} onClick={()=>setTraceStep(i)} aria-label={`Show ${s.title} step`} className={i<=traceStep?"progress-segment filled":"progress-segment"}/>)}</div><div className="trace-nav"><span>{traceStep+1} of {trace.length}</span><Button size="sm" variant="secondary" onClick={()=>setTraceStep((traceStep+1)%trace.length)}>{traceStep===3?"Start again":"Next step"} <ArrowRight size={14}/></Button></div></Card></div>
      </div></section>

      <section id="tokenomics" className="section-pad token-section"><div className="container"><SectionHeading eyebrow="04 / TOKEN DESIGN" title="A supply model with a plan." text="An illustrative allocation framework designed to make trade-offs visible. Every percentage below is a proposal, not an issued token distribution."/>
        <div className="token-layout"><Card className="token-chart-card"><div className="card-topline"><span>PROPOSED SUPPLY</span><span className="mono">1,000,000,000 YMC</span></div><div className="donut-wrap"><div className="donut-chart" style={{background:`conic-gradient(${allocations.map((a,i)=>`${a.color} ${allocations.slice(0,i).reduce((s,x)=>s+x.percent,0)}% ${allocations.slice(0,i+1).reduce((s,x)=>s+x.percent,0)}%`).join(",")})`}}><div className="donut-inner"><span>TOTAL SUPPLY</span><b>1B</b><small>YMC · PROPOSED</small></div></div></div><div className="token-chart-foot"><span><i className="live-dot"/> Fixed supply concept</span><span>100% allocated</span></div></Card>
        <div className="allocation-list"><div className="allocation-list-head"><span>ALLOCATION</span><span>SHARE</span></div>{allocations.map((a,i)=><button key={a.name} className={selectedAllocation===i?"allocation-row selected":"allocation-row"} onClick={()=>setSelectedAllocation(i)}><span className="allocation-color" style={{background:a.color}}/><span className="allocation-name">{a.name}<small>{selectedAllocation===i?a.note:"Select to explore allocation"}</small></span><span className="allocation-percent">{a.percent}%</span><span className="allocation-bar"><i style={{width:`${a.percent*2.5}%`,background:a.color}}/></span></button>)}<div className="allocation-disclaimer"><ShieldCheck size={16}/><p>Tokenomics are conceptual and may change after economic, legal and security review. No token is currently represented as deployed.</p></div></div></div>
      </div></section>

      <section id="security" className="section-pad security-section"><div className="container security-grid"><div><SectionHeading eyebrow="05 / TRUST BY DESIGN" title="Credibility is earned in the details." text="A serious network concept should be as clear about its unknowns as it is about its ambitions."/><Button variant="secondary" onClick={()=>document.getElementById("roadmap")?.scrollIntoView({behavior:"smooth"})}>See validation roadmap <ArrowRight size={15}/></Button></div><div className="trust-list">{[{icon:<ShieldCheck/>,title:"Threat model before claims",body:"Document validator collusion, network partitions, key compromise and recovery assumptions."},{icon:<GitBranch/>,title:"Reproducible design decisions",body:"Publish specifications and rationale so technical choices can be challenged and improved."},{icon:<Check/>,title:"Independent validation",body:"Treat audits and reproducible benchmarks as prerequisites, not decorative trust badges."}].map(item=><div className="trust-item" key={item.title}><div className="trust-icon">{item.icon}</div><div><h3>{item.title}</h3><p>{item.body}</p></div></div>)}</div></div></section>

      <section id="roadmap" className="section-pad roadmap-section"><div className="container"><SectionHeading eyebrow="06 / PATH FORWARD" title="From a concept to a testable design." text="A proposed sequence of work. No milestones are represented as completed engineering or live network delivery."/><div className="roadmap-grid">{milestones.map((m,i)=><Card key={m.n} className="roadmap-card"><div className="roadmap-top"><span>{m.n}</span><span className={i===0?"roadmap-status current":"roadmap-status"}>{m.status}</span></div><span className="mini-label">{m.phase.toUpperCase()}</span><h3>{m.title}</h3><p>{m.body}</p><div className="roadmap-line"><i style={{width:i===0?"35%":"0%"}}/></div></Card>)}</div></div></section>

      <section id="developer" className="section-pad developer-section"><div className="container developer-layout"><div><SectionHeading eyebrow="07 / DEVELOPER EXPERIENCE" title="Build the blueprint in the open." text="The developer experience starts with transparent configuration, readable docs and testable assumptions — long before a production endpoint exists."/><div className="developer-points"><span><Check size={15}/> Clear implementation targets</span><span><Check size={15}/> Open design discussion</span><span><Check size={15}/> No fake RPC endpoints</span></div><a href="https://github.com/Fahaam-Jaffery/ymc-coin" target="_blank" rel="noreferrer" className="inline-link">Explore the repository <ArrowUpRight size={16}/></a></div>
        <Card className="code-card"><div className="code-window-head"><div className="window-dots"><i/><i/><i/></div><span><Terminal size={13}/> ymc.concept.json</span><button onClick={copyConfig} aria-label="Copy concept configuration">{copied?<Check size={15}/>:<Copy size={15}/>}<span>{copied?"Copied":"Copy"}</span></button></div><pre><code><span className="code-brace">&#123;</span>{"\n"}  <span className="code-key">"network"</span>: <span className="code-string">"YMC concept"</span>,{"\n"}  <span className="code-key">"chainId"</span>: <span className="code-string">"TBD"</span>,{"\n"}  <span className="code-key">"consensus"</span>: <span className="code-string">"proposed-dpos-ibft2"</span>,{"\n"}  <span className="code-key">"evmCompatibility"</span>: <span className="code-string">"target"</span>,{"\n"}  <span className="code-key">"status"</span>: <span className="code-string">"illustrative-only"</span>{"\n"}<span className="code-brace">&#125;</span></code></pre><div className="code-card-foot"><span><span className="tiny-pulse"/> Concept configuration</span><span>JSON · EXAMPLE</span></div></Card>
      </div></section>

      <section className="closing-cta"><div className="container closing-inner"><div><span className="eyebrow"><span className="eyebrow-dot"/> THE WORK STARTS HERE</span><h2>Good infrastructure begins<br/>with <span className="gradient-text">good questions.</span></h2><p>Explore the proposal, inspect the code, and help shape the next iteration.</p></div><a href="https://github.com/Fahaam-Jaffery/ymc-coin" target="_blank" rel="noreferrer"><Button size="lg">Visit the project on GitHub <ArrowUpRight size={17}/></Button></a></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-main"><a href="#home" className="brand"><span className="brand-symbol">Y</span><span className="brand-word">YMC<span>.</span><small>NETWORK CONCEPT</small></span></a><p>A concept for a more considered Layer 1.<br/>Not financial advice. Not a live network.</p><a className="footer-source" href="https://github.com/Fahaam-Jaffery/ymc-coin" target="_blank" rel="noreferrer">Open source repository <ExternalLink size={14}/></a></div><div className="footer-bottom"><span>© 2026 YMC CONCEPT PROJECT</span><span>NO LIVE CHAIN · NO DEPLOYED TOKEN · NO PRODUCTION BENCHMARK</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
  </div>;
}