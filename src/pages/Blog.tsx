import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";
import { blogPosts, getPostsByCategory } from "@/data/blogPosts";
import { ArrowRight, Search } from "lucide-react";
import freelancingPost from "@/assets/freelancing-post.jpg";
import blogPost from "@/assets/blogging-post.jpg";
import marketingPost from "@/assets/digital-marketing-post.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const imageMap: Record<string, string> = {
    "freelancing-post.jpg": freelancingPost,
    "blogging-post.jpg": blogPost,
    "digital-marketing-post.jpg": marketingPost,
  };

  const categories = ["All", "Blogging", "Freelancing", "Digital Marketing"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Latest Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover strategies, tips, and insights to accelerate your online business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "button-primary text-primary-foreground" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="card-hover bg-card border-border">
                    <CardHeader className="p-0">
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <img
                          src={imageMap[post.image]}
                          alt={post.title}
                          className="object-cover w-full h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No articles found matching your search criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <NewsletterSignup 
                variant="sidebar"
                title="Stay Updated"
                description="Get the latest articles delivered to your inbox"
              />

              {/* Popular Posts */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Popular Posts</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={imageMap[post.image]}
                          alt={post.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(post.publishDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Categories</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = getPostsByCategory(category).length;
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-accent transition-colors"
                        >
                          <span className="text-sm">{category}</span>
                          <Badge variant="outline" className="text-xs">
                            {count}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;