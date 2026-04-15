import { ChevronLeft, ChevronRightIcon, QuoteIcon } from "lucide-react";
import { useState } from "react";

const testimonial = [
  {
    quote:
      "I met Daniel on Upwork and honestly I wasn’t sure at first, but after we spoke a bit I felt more comfortable. He communicates really well and actually listens, which is rare. I wanted an eCommerce app but what I got was way better than I expected. He added features I didn’t even think about, like proper analytics in the admin dashboard and smoother checkout flows. The app runs fast, handles a lot of users, and I’ve had no major issues since launch.",
    author: "Agatha Chen",
    role: "Ecommerce Business Owner",
  },
  {
    quote:
      "Daniel helped me build a delivery tracking app and I’m still impressed with how it turned out. I wanted something like live tracking and real-time updates, and he made it work smoothly. He also explained things in a way I could understand, not just throwing technical terms around. The system has been stable even as more users joined, which was a big concern for me.",
    author: "Michael Rodriguez",
    role: "Logistics Startup Founder",
  },
  {
    quote:
      "We worked with Daniel on a health-related app that included some AI features. I expected it to be complicated, but he handled it calmly and professionally. He built the APIs, connected everything, and even improved how the data was presented on the dashboard. What I liked most is that he thinks beyond just coding, he looks at the bigger picture.",
    author: "Dr. Anita Verma",
    role: "HealthTech Entrepreneur",
  },
  {
    quote:
      "My app used to be slow and honestly frustrating to use before Daniel stepped in. He didn’t just fix bugs, he reworked parts of it so it actually performs properly now. Load times are much better, and users have noticed the difference. He also added some useful features like notifications and user tracking that helped me understand my audience better.",
    author: "James Carter",
    role: "Mobile App Owner",
  },
  {
    quote:
      "Daniel and his team built the backend for our streaming platform, and they did a solid job. Everything from uploads to streaming works without issues. What stood out was how organized everything was behind the scenes. It’s easy for us to manage and it hasn’t broken under pressure so far, even with more users coming in.",
    author: "Emily Zhang",
    role: "Media Platform Founder",
  },
  {
    quote:
      "I came to Daniel with just an idea for a marketplace app, nothing fully planned out. He helped shape it into something real. We added user accounts, payments, product listings, and a proper admin side. He also gave suggestions that made the app easier to use, which I appreciated. It felt like working with someone who actually cared about the outcome.",
    author: "Ahmed Hassan",
    role: "Marketplace Owner",
  },
  {
    quote:
      "Working with Daniel was smooth from start to finish. He built our SaaS platform with features like dashboards, real-time updates, and different user roles. Everything works the way it should, and if something needed adjustment, he handled it quickly. Communication was clear throughout, which made the whole process easier.",
    author: "Laura Bennett",
    role: "SaaS Product Manager",
  },
];
export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonial.length);
  };
  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonial.length) % testimonial.length,
    );
  };
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-foreground">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto ">
          <div className="relative ">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <QuoteIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-sm md:text-2sm font-medium leading-relaxed mb-8 pt-4">
                "{testimonial[activeIdx].quote}"
              </blockquote>
              <div>
                <div className="font-semibold ">
                  {testimonial[activeIdx].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial[activeIdx].role}
                </div>
              </div>
            </div>
          </div>

          {/* Restimonials Navigations */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2 ">
              {testimonial.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setActiveIdx(idx)}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
