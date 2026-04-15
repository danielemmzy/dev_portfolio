import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/Animated-border-button";

const skills = [
  // Programming & Backend
  "Python",
  "FastAPI",
  "Django & Django Rest Framework",
  "Flask & Flask-RESTX",
  "Node.js",
  "Spring Boot",
  "Java",
  "TypeScript",
  "GraphQL",

  // Frontend & Mobile
  "React",
  "Next.js",
  "React Native",
  "Dart",
  "Flutter",
  "Tailwind CSS",

  // Databases & Data Management
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Memcached",
  "Django ORM",
  "SQLAlchemy",
  "SQLModel",
  "Spring Data JPA",
  "Prisma",

  // AI / Machine Learning / Data Science
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "Matplotlib (Pyplot)",
  "Seaborn",
  "Data Preprocessing",
  "Feature Engineering",
  "Model Training & Evaluation",
  "Supervised Learning",

  // DevOps & Cloud
  "Docker",
  "AWS",
  "Vercel",
  "Render",
  "Git",
  "GitHub Actions",

  // Testing
  "Jest",
  "Cypress",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/projects/herobg1.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content - added more padding top/bottom */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {" "}
          {/* ← changed to items-start + added gap */}
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            {" "}
            {/* ← increased from 8 to 12 */}
            <div className="animate-fade-in flex items-center gap-2 mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary bg-card">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer ● Python Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-6">
              {" "}
              {/* ← increased from 4 to 6 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Reliable{" "}
                <span className="text-primary glow-text">
                  Backend & ML Engineer{" "}
                </span>
                <br />
                building intelligent AI solutions,
                <span className="font-serif italic font-normal text-foreground block mt-2">
                  scalable systems.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-100">
                Hi, I’m Daniel Njoku. I build reliable Python backends,
                intelligent machine learning systems, and data-driven
                applications that solve real-world problems. I enjoy turning
                complex data into meaningful insights and scalable solutions,
                combining backend engineering with data science and AI to create
                products that are efficient, robust, and ready for production.
              </p>
            </div>
            {/* CTAs - slightly bigger gap */}
            <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-300 mt-4">
              <a href="#contact">
              <Button size="lg" href="#contact">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
              <AnimatedBorderButton>
                <a
                  href="/projects/DannysResumeAi.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-6 animate-fade-in animation-delay-400 mt-6">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/danielemmzy" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/daniel-njoku-065687253",
                },
                { icon: Twitter, href: "https://twitter.com/yourusername" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative mt-12 lg:mt-0 animate-fade-in animation-delay-300">
            {" "}
            {/* ← added mt-12 on mobile */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/profilephoto.jpg"
                  alt="Daniel Njoku"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* the floating badge */}
                <div className="absolute  -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Work
                    </span>
                  </div>
                </div>
                {/* the stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative w-full overflow-hidden">
            <div
              className="inline-flex whitespace-nowrap animate-marquee"
              style={{ animationDuration: "45s" }} // ← start with 45s, adjust 38–60s later
            >
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-10 py-4" // ↑ bigger px-10 helps width
                >
                  <span className="text-xl font-semibold text-muted-foreground/80">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider font-bold">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
