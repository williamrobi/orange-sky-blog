import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface SocialLinksProps {
  variant?: "default" | "colorful";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SocialLinks = ({ variant = "default", size = "md", className = "" }: SocialLinksProps) => {
  const socialLinks = [
    { 
      name: "TikTok", 
      href: "https://tiktok.com/@kiswahilidigitalbridge", 
      icon: TikTokIcon,
      color: "hover:bg-black hover:text-white"
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com/kiswahilidigitalbridge", 
      icon: Instagram,
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white"
    },
    { 
      name: "Facebook", 
      href: "https://facebook.com/kiswahilidigitalbridge", 
      icon: Facebook,
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/254757030305", 
      icon: MessageCircle,
      color: "hover:bg-green-500 hover:text-white"
    },
  ];

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  if (variant === "colorful") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className={`${sizeClasses[size]} p-0 rounded-full transition-all duration-300 ${social.color}`}
            >
              <social.icon className={iconSizes[size]} />
            </Button>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200`}
          aria-label={social.name}
        >
          <social.icon className={iconSizes[size]} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
