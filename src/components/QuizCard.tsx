import { Link } from "react-router-dom";
import { Brain, HelpCircle, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quiz, getLevelColor, getLevelLabel } from "@/data/courses";

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <Link to={`/quizzes/${quiz.id}`}>
      <Card className="card-hover overflow-hidden group cursor-pointer h-full">
        <div className="h-32 bg-gradient-to-br from-secondary/30 via-primary/20 to-tertiary/30 relative overflow-hidden">
          <div className="absolute inset-0 african-pattern opacity-20" />
          <div className="absolute top-4 left-4">
            <Badge className={`${getLevelColor(quiz.level)} font-semibold`}>
              {getLevelLabel(quiz.level)}
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Brain className="w-7 h-7 text-secondary" />
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-playfair font-bold text-lg mb-2 group-hover:text-primary transition-colors">
            {quiz.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>{quiz.questions.length} questions</span>
          </div>
          <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
            Take Quiz <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default QuizCard;
