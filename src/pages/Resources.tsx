import { FileText, Headphones, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { courses, Resource } from "@/data/courses";

const Resources = () => {
  // Flatten all resources from all courses
  const allResources = courses.flatMap(course => 
    course.resources.map(resource => ({
      ...resource,
      courseName: course.title,
      courseLevel: course.level
    }))
  );

  const resourcesByType = {
    pdf: allResources.filter(r => r.type === "pdf"),
    audio: allResources.filter(r => r.type === "audio"),
    video: allResources.filter(r => r.type === "video"),
    ppt: allResources.filter(r => r.type === "ppt"),
  };

  const getResourceIcon = (type: Resource["type"]) => {
    switch (type) {
      case "pdf": return FileText;
      case "audio": return Headphones;
      case "video": return Video;
      case "ppt": return FileText;
    }
  };

  const getResourceColor = (type: Resource["type"]) => {
    switch (type) {
      case "pdf": return "from-red-500 to-red-600";
      case "audio": return "from-purple-500 to-purple-600";
      case "video": return "from-blue-500 to-blue-600";
      case "ppt": return "from-orange-500 to-orange-600";
    }
  };

  const categories = [
    { type: "pdf" as const, title: "PDF Documents", titleSwahili: "Hati za PDF", icon: FileText },
    { type: "audio" as const, title: "Audio Lessons", titleSwahili: "Masomo ya Sauti", icon: Headphones },
    { type: "video" as const, title: "Video Content", titleSwahili: "Maudhui ya Video", icon: Video },
    { type: "ppt" as const, title: "Presentations", titleSwahili: "Mawasilisho", icon: FileText },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-tertiary/10 via-primary/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-tertiary/20 text-foreground border-0 mb-4">Rasilimali</Badge>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Learning Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Download PDFs, audio lessons, videos, and study materials to enhance your Kiswahili learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const resources = resourcesByType[category.type];
            if (resources.length === 0) return null;

            return (
              <div key={category.type} className="mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getResourceColor(category.type)} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl font-bold">{category.title}</h2>
                    <p className="text-primary font-medium">{category.titleSwahili}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {resources.length} files
                  </Badge>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource) => {
                    const Icon = getResourceIcon(resource.type);
                    return (
                      <Card key={resource.id} className="card-hover">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getResourceColor(resource.type)} flex items-center justify-center shrink-0`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground mb-1 truncate">
                                {resource.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {resource.courseName}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">{resource.size}</span>
                                <Button size="sm" variant="outline" className="gap-1">
                                  <Download className="w-3 h-3" /> Download
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
