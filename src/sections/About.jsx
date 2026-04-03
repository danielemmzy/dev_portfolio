import { Code2, GitBranch, Layers, Rocket, ShieldCheck, User } from "lucide-react"

const highlights =[ {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintable, scalable code that stands the test of time."
},
{
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast user experience."
},
{
    icon: User,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life."
},
{
  icon: Layers,               // Classic layered architecture feel – very popular for system design
  title: "Scalable System Design",
  description: "Architecting distributed, high-throughput systems that scale horizontally with clean domain-driven design."
},
{
    icon: GitBranch,
    title: "Modern DevOps Practices",
    description: "Automated CI/CD, IaC, and observability for fast, reliable deployments."
  },
  {
    icon: ShieldCheck,
    title: "Production Reliability",
    description: "Building resilient services with monitoring, retries, and 99.99% uptime focus."
  },

]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <div className="space-y-8 ">
                <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                    About Me  
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building the Future,
                <span className="font-serif italic font-normal text-white">one component at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200"><p>
  I am a backend-focused software engineer who enjoys designing systems, not just writing code. I build Python applications using solid MVC principles and clean system architecture to ensure long-term scalability and maintainability.
</p>

<p>
  I specialize in building reliable APIs, service layers, and background processing pipelines with FastAPI, Django, PostgreSQL, Redis, and Docker. I focus on writing code that performs well in production and is easy for other engineers to understand and extend.
</p>

<p>
  I care deeply about how data flows through a system, how components communicate, and how architecture decisions affect performance and reliability. I enjoy turning complex problems into simple, structured solutions.
</p>

<p>
  I am passionate about backend engineering and continuous learning. I am currently seeking a Python Backend or Software Engineer role where I can contribute to meaningful products and grow within a strong engineering team.
</p>
</div>
<div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
    <p className="text-lg font-medium italic text-foreground">
  "My mission is to design backend systems that are reliable, scalable, and built with purpose. I strive to write clean architecture, thoughtful code, and solutions that make real impact in production.""
</p>

</div>
        </div>
        {/* Right col */}
        <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl animate-fade-in"
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 hover:bg-primary/35">
                        <item.icon className="w-6 h-6 text-primary "/>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
        </div>
        </div>
        </div>
        </section>
}