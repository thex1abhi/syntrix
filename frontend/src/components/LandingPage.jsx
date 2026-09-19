import React, { useState } from "react";
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    CheckCircle2,
    Code2,
    FileText,
    ImageIcon,
    Mic,
    Paperclip,
    Search,
    Send,
    ShieldCheck,
    Sparkles,
    Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const stats = [
    { label: "AI agents live", value: "8" },
    { label: "Tasks automated", value: "1000+" },
    { label: "Average response", value: "< 3s" },
];

const features = [
    { icon: BrainCircuit, title: "Multi-agent AI platform", description: "Combine searching, writing, coding, and document analysis." },
    { icon: Code2, title: "Code smarter", description: "Generate, review, and refine code with simple prompts." },
    { icon: Search, title: "Research assistant", description: "Search, summarize, and validate information." },
    { icon: FileText, title: "PDF & document ", description: "Turn reports and documents into clear insights and next-step actions." },
    { icon: ImageIcon, title: "Vision analysis", description: "Analyze screenshots  and visual references with AI assistance." },
    { icon: ShieldCheck, title: "Built for trust", description: "Secure access, clear workflows, and reliable productivity for real teams." },
];

const workflows = [
    { text: "Research and summarize project briefs", agent: "Search", icon: Search },
    { text: "Write code, fix code & live preview", agent: "Code", icon: Code2 },
    { text: "Create presentations and  reports", agent: "PPT", icon: Sparkles },
    { text: "Analyze PDFs, screenshots, and design ", agent: "Documents & Vision", icon: ImageIcon },
];

const testimonials = [
    { name: "Sonia R.", role: "Product Lead", quote: "Syntrix helped our team move from idea to prototype in a fraction of the time." },
    { name: "Aarav M.", role: "Engineering Manager", quote: "The AI agents feel like an extension of our product and engineering team." },
];

const demoAgents = [
    {
        label: "search",
        icon: Search,
        prompt: "Summarize the top trends in remote work.",
        kind: "text",
        meta: "",
        lines: [
            "More companies are moving to hybrid schedules.",
            "Main challenge: keeping teams connected across time zones.",
            "Takeaway: clear communication habits matter more than office days.",
        ],
    },
    {
        label: "Code",
        icon: Code2,
        prompt: "Write a React hook that toggles a boolean.",
        kind: "code",
        meta: "React · JavaScript",
        lines: [
            "function useToggle(initial = false) {",
            "  const [on, setOn] = useState(initial);",
            "  const toggle = () => setOn((v) => !v);",
            "  return [on, toggle];",
            "}",
        ],
    },
    {
        label: "PDF",
        icon: FileText,
        prompt: "What's the total on this electricity bill PDF?",
        kind: "text",

        lines: [
            "Total due is ₹ 4584.50 ",
            "Payment is due by the 15th of the month.",
        ],
    },
    {
        label: "Vision",
        icon: ImageIcon,
        prompt: "What does this street sign say?",
        kind: "text",

        lines: [
            "The data in the image is written in Spanish ",
            "It says \"No Parking, 8 AM to 6 PM, Monday to Friday.\"",
            "Outside those hours, parking is allowed.  ",
        ],
    },

];

const pillBase =
    "flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60";
const pillActive =
    "bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-transparent shadow-[0_1px_8px_rgba(99,102,241,.35)]";
const pillIdle =
    "bg-white/[0.03] text-slate-400 border-white/[0.06] hover:bg-white/[0.07]";

const card = "rounded-2xl border border-white/[0.07] bg-white/[0.03]";

function LandingPage() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const active = demoAgents[selected];

    return (
        <div className="min-h-screen bg-[#0a0c10] text-slate-100 antialiased">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&display=swap');
                .font-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
                html { scroll-behavior: smooth; }
                @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
            `}</style>


            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.22),_transparent_60%)]" />


            <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                        <img src={logo} alt="Syntrix AI logo" />
                    </div>
                    <div className="font-display text-lg font-bold tracking-tight">Syntrix AI</div>
                </div>

                <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
                    <a href="#features" className="transition hover:text-white">Features</a>
                    <a href="#workflow" className="transition hover:text-white">Workflow</a>
                    <a href="#reviews" className="transition hover:text-white">Reviews</a>
                </nav>

                <button
                    onClick={() => navigate("/chat")}
                    className="cursor-pointer rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-indigo-400/50 hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
                >
                    Open Chat
                </button>
            </header>

            <main>

                <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-16">
                    <div>
                        <h1 className="font-display max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Multiple AI agents. One place to ask.
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                            The right agent for every task. Research, code, documents, or images, answered in seconds.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <button
                                onClick={() => navigate("/chat")}
                                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-base font-semibold text-white shadow-[0_1px_8px_rgba(99,102,241,.35)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                            >
                                Get started
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                            {["Login & use", "Simple and easy", "Multiple AI agents"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="rounded-2xl border border-white/[0.06] bg-[#0d0f14] p-3 shadow-2xl shadow-black/50">
                        <div className="flex flex-col gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 pb-3 pt-3.5">
                            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose an agent">
                                {demoAgents.map((agent, i) => {
                                    const Icon = agent.icon;
                                    const isActive = i === selected;
                                    return (
                                        <button
                                            key={agent.label}
                                            type="button"
                                            aria-pressed={isActive}
                                            onClick={() => setSelected(i)}
                                            className={`${pillBase} ${isActive ? pillActive : pillIdle}`}
                                        >
                                            <Icon size={14} className={isActive ? "text-white" : "text-slate-500"} />
                                            {agent.label}
                                        </button>
                                    );
                                })}
                                <span className="inline-flex items-center px-2 text-xs text-slate-500">+3 more</span>
                            </div>

                            <p className="min-h-[72px] pt-2 text-[14px] leading-relaxed text-slate-200">
                                {active.prompt}
                                <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-indigo-400" />
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600">
                                        <Paperclip size={16} />
                                    </span>
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600">
                                        <Mic size={16} />
                                    </span>
                                </div>
                                <button
                                    onClick={() => navigate("/chat")}
                                    aria-label="Try this in chat"
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-700 text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                                >
                                    <Send size={15} />
                                </button>
                            </div>
                        </div>


                        <div key={active.label} className="px-3 pb-2 pt-5">
                            <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
                                <span className="flex items-center gap-2">
                                    <Bot size={14} className="text-indigo-300" />
                                    {active.label} agent
                                </span>
                            </div>

                            {active.kind === "code" ? (
                                <pre className="overflow-x-auto rounded-xl border border-white/[0.06] bg-black/30 p-4 font-mono text-[12px] leading-6 text-slate-300">
                                    {active.lines.join("\n")}
                                </pre>
                            ) : (
                                <ul className="space-y-2.5 text-sm leading-6 text-slate-300">
                                    {active.lines.map((line) => (
                                        <li key={line} className="flex gap-3">
                                            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-400" />
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <p className="mt-4 text-[11px] text-slate-600">Sample output</p>
                        </div>
                    </div>
                </section>


                {/* section */}
                <section className="border-y border-white/[0.06] bg-[#0d0f14]">
                    <div className="mx-auto max-w-7xl px-6 py-3 lg:px-10">
                        <div className="grid gap-7 sm:grid-cols-3 sm:gap-6">
                            {stats.map((stat, i) => (
                                <div key={stat.label} className="group">

                                    <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                                        <span className="transition-colors duration-300 group-hover:text-white">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="h-px flex-1 bg-white/[0.08] transition-colors duration-300 group-hover:bg-white/40" />
                                    </div>

                                    <div className="flex items-center justify-center gap-3   ">
 <div className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        {stat.value}
                                    </div>


                                    <div className="mt-1.5 max-w-[12rem] text-xs leading-relaxed text-slate-400">
                                        {stat.label}
                                    </div>
                                    </div>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


              
                <section id="features" className="mx-auto max-w-7xl scroll-mt-6 px-6 py-24 lg:px-10">
    {/* Header */}
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                <span className="h-px w-8 bg-white/20" />
                Features
            </div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to complete your work  faster.
            </h2>
        </div>
        
    </div>

    <div className="mt-14 grid gap-4 lg:grid-cols-6">
        {/* 01 - Agents */}
        <div className={`${card} group relative overflow-hidden p-7 transition-colors duration-300 hover:border-white/[0.14] lg:col-span-4`}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute right-6 top-6 text-[10px] font-medium tracking-[0.2em] text-slate-600">01</span>

            <FeatureHead {...features[0]} />

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-black/30 p-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Routing to
                    <span className="text-slate-300">{demoAgents[0].label}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {demoAgents.map((agent, i) => {
                        const Icon = agent.icon;
                        return (
                            <span
                                key={agent.label}
                                className={`${pillBase} cursor-default ${i === 0 ? pillActive : pillIdle}`}
                            >
                                <Icon size={14} className={i === 0 ? "text-white" : "text-slate-500"} />
                                {agent.label}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* 02 - Code */}
        <div className={`${card} group relative overflow-hidden p-7 transition-colors duration-300 hover:border-white/[0.14] lg:col-span-2`}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute right-6 top-6 text-[10px] font-medium tracking-[0.2em] text-slate-600">02</span>

            <FeatureHead {...features[1]} />

            <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.06] bg-black/30">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-slate-700" />
                    <span className="h-2 w-2 rounded-full bg-slate-700" />
                    <span className="h-2 w-2 rounded-full bg-slate-700" />
                </div>
                <div className="space-y-2.5 p-4 font-mono text-[10px] text-slate-600">
                    {[
                        { w: "w-2/3", indent: "", color: "bg-indigo-400/70" },
                        { w: "w-3/4", indent: "ml-4", color: "bg-slate-700" },
                        { w: "w-1/2", indent: "ml-4", color: "bg-slate-700" },
                        { w: "w-1/4", indent: "", color: "bg-violet-400/70" },
                    ].map((row, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span>{i + 1}</span>
                            <div className={`h-2 rounded-full ${row.w} ${row.indent} ${row.color}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* 03 - 05 */}
        {[features[2], features[3], features[4]].map((f, i) => (
            <div
                key={f.title}
                className={`${card} group relative overflow-hidden p-7 transition-colors duration-300 hover:border-white/[0.14] lg:col-span-2`}
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-6 top-6 text-[10px] font-medium tracking-[0.2em] text-slate-600">
                    {String(i + 3).padStart(2, "0")}
                </span>
                <FeatureHead {...f} />
            </div>
        ))}

        {/* 06 - Trust */}
        <div
            className={`${card} group relative flex flex-col gap-6 overflow-hidden p-7 transition-colors duration-300 hover:border-white/[0.14] lg:col-span-6 lg:flex-row lg:items-center lg:justify-between`}
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <FeatureHead {...features[5]} />

            <div className="flex flex-wrap gap-2">
                {["Secure access", "Clear workflows", "Reliable for real teams"].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-sm text-slate-300"
                    >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

                <section id="workflow" className="scroll-mt-6 border-y border-white/[0.06] bg-[#0d0f14] py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
                        <div>
                            <h2 className="font-display max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                One platform for every knowledge task.
                            </h2>
                            <p className="mt-4 max-w-sm text-slate-400">
                               Ask once. The right agent picks it up.
                            </p>
                        </div>

                        <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                            {workflows.map(({ text, agent, icon: Icon }) => (
                                <li key={text} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-indigo-300">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <p className="text-base text-slate-200">{text}</p>
                                    </div>
                                    <span className="w-fit rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-slate-400 sm:ml-6">
                                        {agent}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>


               
                <section id="reviews" className="mx-auto max-w-7xl scroll-mt-6 px-6 py-20 lg:px-10">
    {/* Header */}
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                <span className="h-px w-8 bg-white/20" />
                Reviews
            </div>
            <h2 className="font-display mt-4 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Trusted by modern product and research teams.
            </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Hear from the teams who put the agents to work every day.
        </p>
    </div>

    <div className="mt-10 grid gap-4 lg:grid-cols-5">
        {testimonials.map(({ name, role, quote }, i) => (
            <figure
                key={name}
                className={`${card} group relative flex flex-col justify-between overflow-hidden p-6 transition-colors duration-300 hover:border-white/[0.14] ${
                    i === 0 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
            >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* decorative quote mark */}
                <span className="font-display pointer-events-none absolute right-6 top-2 select-none text-6xl leading-none text-white/[0.05]">
                    ”
                </span>

                <div className="relative">
                    <div className="mb-4 flex items-center gap-0.5 text-amber-300" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} className="h-3.5 w-3.5 fill-current" />
                        ))}
                    </div>
                    <blockquote
                        className={`text-slate-200 ${
                            i === 0 ? "text-lg leading-8" : "text-base leading-7"
                        }`}
                    >
                        “{quote}”
                    </blockquote>
                </div>

                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-700 text-sm font-semibold text-white">
                        {name[0]}
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">{name}</div>
                        <div className="text-xs text-slate-400">{role}</div>
                    </div>
                </figcaption>
            </figure>
        ))}
    </div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0f14] p-8 md:p-10">
        {/* soft glows */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
        {/* top highlight line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 className="font-display max-w-md text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Ready to put the agents to work?
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                    Pick an agent, ask your question, and get a useful answer in seconds.
                </p>
            </div>

            <button
                onClick={() => navigate("/chat")}
                className="group inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_1px_8px_rgba(99,102,241,.35)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
            >
                Chat
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
        </div>
    </div>
</section>
            </main>

            <footer className="border-t border-white/[0.06] py-6">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row lg:px-10">
                    <div className="  items-center justify-center gap-2">

                        <span>   © {new Date().getFullYear()} Syntrix AI. All rights reserved. </span>
                    </div>
                    <div>Built for smarter decisions and faster execution.</div>
                </div>
            </footer>
        </div>
    );
}

function FeatureHead({ icon: Icon, title, description }) {
    return (
        <div>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-indigo-300">
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{description}</p>
        </div>
    );
}

export default LandingPage;