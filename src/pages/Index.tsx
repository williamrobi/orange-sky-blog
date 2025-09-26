import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getFeaturedPosts } from "@/data/blogPosts";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import freelancingPost from "@/assets/freelancing-post.jpg";
import blogPost from "@/assets/blogging-post.jpg";
import marketingPost from "@/assets/digital-marketing-post.jpg";

const Index = () => {
  const featuredPosts = getFeaturedPosts();

  const imageMap: Record<string, string> = {
    "freelancing-post.jpg": freelancingPost,
    "blogging-post.jpg": blogPost,
    "digital-marketing-post.jpg": marketingPost,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-gradient absolute inset-0" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Digital Growth Space</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn Online Business, Freelancing & Digital Growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild className="button-primary text-primary-foreground font-semibold">
                <Link to="/blog">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Your Gateway to <span className="gradient-text">Digital Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Digital Growth Space is your comprehensive resource for building a successful online business. 
              Whether you're starting your freelancing journey, launching a blog, or scaling your digital marketing efforts, 
              we provide practical strategies, proven methods, and actionable insights to accelerate your growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Strategies</h3>
                <p className="text-muted-foreground">Proven methods to scale your online business</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Connect with like-minded entrepreneurs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
                <p className="text-muted-foreground">Learn from experienced digital entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground">
              Latest insights to accelerate your digital growth journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="card-hover bg-card border-border">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={imageMap[post.image]}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-secondary text-secondary-foreground"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="button-secondary text-secondary-foreground font-semibold">
              <Link to="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup 
              variant="hero"
              title="Join our free community"
              description="Get weekly online income tips, growth strategies, and exclusive insights delivered straight to your inbox"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
