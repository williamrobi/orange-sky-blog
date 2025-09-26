import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Layout from "@/components/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, User } from "lucide-react";
import freelancingPost from "@/assets/freelancing-post.jpg";
import blogPost from "@/assets/blogging-post.jpg";
import marketingPost from "@/assets/digital-marketing-post.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const imageMap: Record<string, string> = {
    "freelancing-post.jpg": freelancingPost,
    "blogging-post.jpg": blogPost,
    "digital-marketing-post.jpg": marketingPost,
  };

  if (!post) {
    return (
      <Layout>
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge 
                  variant="secondary" 
                  className="bg-secondary text-secondary-foreground"
                >
                  {post.category}
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src={imageMap[post.image]}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-lg text-muted-foreground mb-8">
                {post.excerpt}
              </div>
              
              <div 
                className="space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/^# /gm, '<h1>').replace(/<\/h1><br \/>/g, '</h1>').replace(/^## /gm, '<h2>').replace(/<\/h2><br \/>/g, '</h2>').replace(/^### /gm, '<h3>').replace(/<\/h3><br \/>/g, '</h3>').replace(/^\* /gm, '<li>').replace(/<li>/g, '<ul><li>').replace(/<\/li><br \/>/g, '</li></ul>') 
                }}
              />
            </div>

            {/* Newsletter CTA */}
            <div className="mt-12 mb-12">
              <NewsletterSignup 
                variant="inline"
                title="Enjoyed this article?"
                description="Subscribe to get more insights like this delivered to your inbox weekly"
              />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="card-hover bg-card border-border">
                      <CardHeader className="p-0">
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                          <img
                            src={imageMap[relatedPost.image]}
                            alt={relatedPost.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          <Link 
                            to={`/blog/${relatedPost.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;