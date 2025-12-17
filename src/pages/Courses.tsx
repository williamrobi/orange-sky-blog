import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { courses, SkillLevel, getLevelLabel } from "@/data/courses";

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | "all">("all");

  const levels: (SkillLevel | "all")[] = ["all", "beginner", "intermediate", "advanced"];

  const filteredCourses = selectedLevel === "all" 
    ? courses 
    : courses.filter(course => course.level === selectedLevel);

  const levelCounts = {
    all: courses.length,
    beginner: courses.filter(c => c.level === "beginner").length,
    intermediate: courses.filter(c => c.level === "intermediate").length,
    advanced: courses.filter(c => c.level === "advanced").length,
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-tertiary/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">Kozi Zetu</Badge>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Explore Our Courses
            </h1>
            <p className="text-lg text-muted-foreground">
              From beginner basics to advanced literature, find the perfect course to match your Kiswahili learning goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by level:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className={selectedLevel === level ? "button-primary text-white" : ""}
                >
                  {level === "all" ? "All Levels" : getLevelLabel(level)}
                  <Badge variant="secondary" className="ml-2 bg-background/20">
                    {levelCounts[level]}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No courses found for this level.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
