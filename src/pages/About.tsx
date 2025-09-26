import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Award } from "lucide-react";
import williamImage from "@/assets/william-founder.jpg";

const About = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              About <span className="gradient-text">Digital Growth Space</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering entrepreneurs and digital creators to build successful online businesses
            </p>
          </div>

          {/* Founder Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet William</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, I'm William, the founder of Digital Growth Space. After years of building successful 
                  online businesses and helping hundreds of entrepreneurs achieve their digital goals, 
                  I created this platform to share the strategies and insights that really work.
                </p>
                <p>
                  My journey started as a freelancer struggling to find consistent clients. Through trial, 
                  error, and relentless learning, I discovered the key principles that separate successful 
                  online entrepreneurs from those who struggle. Now, I'm passionate about sharing these 
                  insights with you.
                </p>
                <p>
                  Whether you're just starting your freelancing journey, looking to monetize your blog, 
                  or scale your digital marketing efforts, I'm here to guide you every step of the way 
                  with proven strategies and actionable advice.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={williamImage}
                  alt="William - Founder of Digital Growth Space"
                  className="rounded-2xl w-80 h-80 object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border p-6 text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Practical Education</h3>
                  <p className="text-muted-foreground">
                    We provide actionable strategies and real-world insights that you can implement 
                    immediately to grow your online business.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border p-6 text-center">
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community Building</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive community where entrepreneurs can connect, learn from 
                    each other, and grow together.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border p-6 text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Every strategy we share is tested and proven to work, backed by real results 
                    from successful online businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Digital Growth Space Exists */}
          <div className="bg-card/50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Digital Growth Space Exists</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
              <p>
                The online business landscape is filled with outdated advice, get-rich-quick schemes, 
                and strategies that worked years ago but are no longer effective. Many aspiring entrepreneurs 
                waste valuable time and money following the wrong guidance.
              </p>
              <p>
                Digital Growth Space was created to cut through the noise and provide you with current, 
                practical strategies that actually work in today's digital economy. We focus on sustainable 
                growth methods that build long-term success rather than short-term gains.
              </p>
              <p>
                Our content is based on real experience from building multiple successful online businesses, 
                helping hundreds of clients achieve their goals, and staying current with the latest industry 
                trends and best practices.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Digital Growth Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who are already building successful online businesses 
              with our proven strategies and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="button-primary text-primary-foreground font-semibold">
                <Link to="/blog">
                  Explore Our Content <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;