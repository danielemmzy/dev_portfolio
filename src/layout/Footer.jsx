import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
    {icon: Github, href : "#", label : "GitHub",},
    {icon: Linkedin, href: "#", label : "LinkedIn",},
    {icon: Twitter, href: "#", label : "Twitter",}
] 

const footerLinks = [
    {href : "#", label: "About"},
    {href : "#", label: "Projects"},
    {href : "#", label: "Testimonial"},
    {href : "#", label: "Experience"},
    {href : "#", label: "Contact"}
];

export const Footer = () => {
const currentYear = new Date().getFullYear();

return (
    <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-rows items-center justify-center gap-8">
               {/* Logo & CopyRight */}
                <div className="text-center md:text-left">
                    <a href="#" className="text-xl font-bold tracking-light">
                        DN<span className="text-primary">.</span>
                        
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                        o {currentYear} Daniel Njoku. All Rights Reserved.
                    </p>
                </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {footerLinks.map((link) => (
                 <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    
                 </a>
                ))}

              </div>
            </div>

        </div>

    </footer>
)
}