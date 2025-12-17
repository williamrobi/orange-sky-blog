import { Link } from "react-router-dom";
import { Clock, BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Course, getLevelColor, getLevelLabel } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="card-hover overflow-hidden group cursor-pointer h-full">
        <div className="h-48 bg-gradient-to-br from-primary/20 via-tertiary/20 to-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 african-pattern opacity-30" />
          <div className="absolute top-4 left-4">
            <Badge className={`${getLevelColor(course.level)} font-semibold`}>
              {getLevelLabel(course.level)}
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-playfair font-bold text-xl mb-1 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">{course.titleSwahili}</p>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {course.lessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.topics.slice(0, 3).map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {course.topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{course.topics.length - 3} more
              </Badge>
            )}
          </div>
          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
            Start Learning <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
