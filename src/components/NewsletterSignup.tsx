import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  variant?: "hero" | "sidebar" | "inline";
}

const NewsletterSignup = ({ 
  title = "Join our free community", 
  description = "Get weekly online income tips delivered to your inbox",
  variant = "inline" 
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const containerClasses = {
    hero: "bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center",
    sidebar: "bg-card border border-border rounded-lg p-6",
    inline: "bg-card border border-border rounded-lg p-6"
  };

  return (
    <div className={containerClasses[variant]}>
      <div className="flex items-center justify-center mb-4">
        <Mail className="h-8 w-8 text-primary mr-2" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background border-border"
        />
        <Button 
          type="submit" 
          className="w-full button-primary text-primary-foreground font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe Now"}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        No spam, unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;