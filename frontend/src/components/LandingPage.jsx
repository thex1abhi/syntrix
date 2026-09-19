import React from "react";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Code2, FileText, ImageIcon, Play, Search, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
    { label: "AI agents live", value: "20+" },
    { label: "Tasks automated", value: "1.2M" },
    { label: "Average response", value: "< 8s" },
];

const features = [
    { icon: BrainCircuit, title: "Multi-model AI workspace", description: "Combine research, writing, coding, and media analysis in one connected workflow." },
    { icon: Code2, title: "Code smarter", description: "Generate, review, and refine code with context-aware engineering support." },
    { icon: Search, title: "Research assistant", description: "Search, summarize, and validate information without leaving the workflow." },
    { icon: FileText, title: "PDF & document IQ", description: "Turn reports and documents into clear insights and next-step actions." },
    { icon: ImageIcon, title: "Vision analysis", description: "Analyze screenshots, mockups, and visual references with AI assistance." },
    { icon: ShieldCheck, title: "Built for trust", description: "Secure access, clear workflows, and reliable productivity for real teams." },
];

const workflows = [
    "Research and summarize project briefs",
    "Draft code, fixes, and product ideas",
    "Create presentations and polished reports",
    "Analyze PDFs, screenshots, and design inspiration",
];

const testimonials = [
    { name: "Sonia R.", role: "Product Lead", quote: "Syntrix helped our team move from idea to prototype in a fraction of the time." },
    { name: "Aarav M.", role: "Engineering Manager", quote: "The AI agents feel like an extension of our product and engineering team." },
];

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#070b14] text-slate-100">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_30%)]" />

            <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/30">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-semibold tracking-tight">Syntrix AI</div>
                </div>

                <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                    <a href="#features" className="transition hover:text-white">Features</a>
                    <a href="#workflow" className="transition hover:text-white">Workflow</a>
                    <a href="#reviews" className="transition hover:text-white">Reviews</a>
                </nav>

                <button
                    onClick={() => navigate("/chat")}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-400/50 hover:bg-violet-500/10"
                >
                    Open Chat
                </button>
            </header>

            <main>
                <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-28 lg:pt-16">
                    <div className="flex flex-col justify-center">
                        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-100">
                            <Sparkles className="h-4 w-4" />
                            Built for AI-powered work
                        </div>

                        <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Turn ideas into action with your AI workspace.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Syntrix brings together research, code generation, document understanding, and multimodal analysis in one powerful platform for teams that move fast.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <button
                                onClick={() => navigate("/chat")}
                                className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02]"
                            >
                                Get started
                                <ArrowRight className="h-4 w-4" />
                            </button>

                            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/8">
                                <Play className="h-4 w-4" />
                                Watch demo
                            </button>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                            {['No-code setup', 'Multi-agent workflows', 'Production-ready outputs'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-[28px] border border-white/10 bg-white/4 p-3 shadow-2xl shadow-violet-950/30 backdrop-blur-sm">
                            <div className="rounded-[22px] border border-white/10 bg-[#0f172a] p-5">
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-rose-400" />
                                        <div className="h-3 w-3 rounded-full bg-amber-400" />
                                        <div className="h-3 w-3 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300">
                                        Live
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                                        <div className="mb-2 flex items-center gap-2 text-sm text-violet-200">
                                            <Zap className="h-4 w-4" />
                                            AI research assistant
                                        </div>
                                        <p className="text-sm leading-6 text-slate-200">
                                            “Summarize the market trends, identify blockers, and draft a launch-ready action plan.”
                                        </p>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                                            <div className="mb-2 text-xs uppercase tracking-[0.24em] text-slate-400">Output</div>
                                            <div className="space-y-2 text-sm text-slate-200">
                                                <div className="h-2 w-3/4 rounded-full bg-violet-400/80" />
                                                <div className="h-2 w-full rounded-full bg-slate-700" />
                                                <div className="h-2 w-5/6 rounded-full bg-slate-700" />
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/8 p-4">
                                            <div className="mb-2 text-xs uppercase tracking-[0.24em] text-cyan-200">Insights</div>
                                            <div className="space-y-2 text-sm text-cyan-50">
                                                <div className="flex items-center justify-between">
                                                    <span>Accuracy</span>
                                                    <span>94%</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-cyan-400/70" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-white/10 bg-slate-950/70 py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">
                        <div className="grid gap-6 md:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/4 p-6 text-center">
                                    <div className="text-3xl font-black text-white">{stat.value}</div>
                                    <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-violet-300">Features</p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything your team needs to move faster.</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {features.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="rounded-3xl border border-white/10 bg-white/4 p-6 shadow-lg shadow-slate-950/20">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-200">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="workflow" className="bg-slate-950/80 py-20">
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">Workflow</p>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">One platform for every knowledge task.</h2>
                        </div>

                        <div className="space-y-5">
                            {workflows.map((item, index) => (
                                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/4 p-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-sm font-bold text-emerald-300">
                                        0{index + 1}
                                    </div>
                                    <p className="pt-1 text-base text-slate-200">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">Loved by teams</p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by modern product and research teams.</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {testimonials.map(({ name, role, quote }) => (
                            <div key={name} className="rounded-3xl border border-white/10 bg-white/4 p-6">
                                <div className="mb-4 flex items-center gap-1 text-amber-300">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
                                <div className="mt-6">
                                    <div className="font-semibold text-white">{name}</div>
                                    <div className="text-sm text-slate-400">{role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 py-6">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row lg:px-10">
                    <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-violet-300" />
                        <span>Syntrix AI</span>
                    </div>
                    <div>Built for smarter decisions and faster execution.</div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;