import Layout from "@/components/Layout";
import QuizCard from "@/components/QuizCard";
import { Badge } from "@/components/ui/badge";
import { quizzes } from "@/data/courses";

const Quizzes = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/10 via-primary/5 to-tertiary/10 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-secondary/10 text-secondary border-0 mb-4">Maswali ya Kujibu</Badge>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Test Your Knowledge
            </h1>
            <p className="text-lg text-muted-foreground">
              Challenge yourself with interactive quizzes and track your progress as you master Kiswahili.
            </p>
          </div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quizzes;
