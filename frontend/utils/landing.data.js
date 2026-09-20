
import {
    BrainCircuit,
    Code2,
    FileText,
    ImageIcon,
    Search,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

export const stats = [
    { label: "AI agents live", value: "8" },
    { label: "Tasks automated", value: "1000+" },
    { label: "Average response", value: "< 3s" },
];

export const features = [
    { icon: BrainCircuit, title: "Multi-agent AI platform", description: "Combine searching, writing, coding, and document analysis." },
    { icon: Code2, title: "Code smarter", description: "Generate, review, and refine code with simple prompts." },
    // { icon: Search, title: "Research assistant", description: "Search, summarize, and validate information." },
    // { icon: FileText, title: "PDF & document ", description: "Turn reports and documents into clear insights and next-step actions." },
    // { icon: ImageIcon, title: "Vision analysis", description: "Analyze screenshots  and visual references with AI assistance." },
    { icon: ShieldCheck, title: "Built for trust", description: "Secure access, clear workflows, and reliable productivity for real teams." },
];

export const workflows = [
    { text: "Research and summarize project briefs", agent: "Search", icon: Search },
    { text: "Write code, fix code & live preview", agent: "Code", icon: Code2 },
    { text: "Create presentations and  reports", agent: "PPT", icon: Sparkles },
    { text: "Analyze PDFs, screenshots, and design ", agent: "Documents & Vision", icon: ImageIcon },
];

export const testimonials = [
    {
        name: "Sonia R.",
        role: "Accountant",
        quote:
            "Syntrix turns complex financial data into clear, actionable insights—helping me work faster and make confident decisions.",
    },
    {
        name: "Aarav M.",
        role: "Engineering Student",
        quote:
            "Syntrix makes learning and project work easier by giving me smart, reliable support whenever I need it.",
    },
];

export const demoAgents = [
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