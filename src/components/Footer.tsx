import { Link } from "react-router-dom";
import { BookOpen, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const navigation = {
    learn: [
      { name: "Beginner Courses", href: "/courses?level=beginner" },
      { name: "Intermediate", href: "/courses?level=intermediate" },
      { name: "Advanced", href: "/courses?level=advanced" },
      { name: "Practice Quizzes", href: "/quizzes" },
    ],
    resources: [
      { name: "PDF Downloads", href: "/resources" },
      { name: "Audio Lessons", href: "/resources" },
      { name: "Video Library", href: "/resources" },
      { name: "Study Materials", href: "/resources" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "TikTok", href: "https://tiktok.com/@kiswahilidigitalbridge", icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )},
    { name: "Instagram", href: "https://instagram.com/kiswahilidigitalbridge", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com/kiswahilidigitalbridge", icon: Facebook },
    { name: "WhatsApp", href: "https://wa.me/254757030305", icon: MessageCircle },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-tertiary to-secondary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-lg leading-tight">Kiswahili</span>
                <span className="text-xs text-primary font-semibold -mt-1">Digital Bridge</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm mb-6 max-w-sm">
              Jifunze Kiswahili kwa njia ya kisasa! Learn Kiswahili the modern way with interactive lessons, quizzes, and cultural insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Jifunze</h3>
            <ul className="space-y-2">
              {navigation.learn.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Rasilimali</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Kampuni</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Kiswahili Digital Bridge. Haki zote zimehifadhiwa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
