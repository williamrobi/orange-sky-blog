import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import { quizzes, getLevelColor, getLevelLabel } from "@/data/courses";

const QuizPage = () => {
  const { quizId } = useParams();
  const quiz = quizzes.find(q => q.id === quizId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!quiz) {
    return (
      <Layout>
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold">Quiz not found</h1>
          <Link to="/quizzes">
            <Button className="mt-4">Back to Quizzes</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setAnswered(true);
    setShowResult(true);
    
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    return (
      <Layout>
        <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-secondary/10 via-primary/5 to-tertiary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-tertiary to-primary flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h1 className="font-playfair text-3xl font-bold mb-2">Quiz Complete!</h1>
                <p className="text-muted-foreground mb-6">Umefanya vizuri! Great job!</p>
                
                <div className="bg-muted rounded-2xl p-6 mb-6">
                  <p className="text-5xl font-bold text-primary mb-2">{percentage}%</p>
                  <p className="text-lg text-muted-foreground">
                    {score} out of {quiz.questions.length} correct
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRestart} variant="outline" className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Try Again
                  </Button>
                  <Link to="/quizzes">
                    <Button className="button-primary text-white gap-2 w-full">
                      More Quizzes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-secondary/10 via-primary/5 to-tertiary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/quizzes" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Quizzes
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-playfair text-2xl font-bold">{quiz.title}</h1>
              <Badge className={getLevelColor(quiz.level)}>{getLevelLabel(quiz.level)}</Badge>
            </div>
            <div className="flex items-center gap-4">
              <Progress value={progress} className="flex-1 h-3" />
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} / {quiz.questions.length}
              </span>
            </div>
          </div>

          {/* Question Card */}
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{question.question}</h2>
                <p className="text-primary font-medium">{question.questionSwahili}</p>
              </div>

              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => {
                  let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                  
                  if (showResult) {
                    if (index === question.correctAnswer) {
                      buttonClass += "border-green-500 bg-green-50 text-green-700";
                    } else if (index === selectedAnswer && index !== question.correctAnswer) {
                      buttonClass += "border-red-500 bg-red-50 text-red-700";
                    } else {
                      buttonClass += "border-border bg-background text-muted-foreground";
                    }
                  } else {
                    buttonClass += selectedAnswer === index 
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-background hover:border-primary/50 text-foreground";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={buttonClass}
                      disabled={answered}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium">{option}</span>
                        {showResult && index === question.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                        )}
                        {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className={`p-4 rounded-xl mb-6 ${
                  selectedAnswer === question.correctAnswer 
                    ? "bg-green-50 border border-green-200" 
                    : "bg-red-50 border border-red-200"
                }`}>
                  <p className={`font-bold mb-1 ${
                    selectedAnswer === question.correctAnswer ? "text-green-700" : "text-red-700"
                  }`}>
                    {selectedAnswer === question.correctAnswer ? "Correct! Sawa!" : "Incorrect. Siyo sahihi."}
                  </p>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              )}

              <div className="flex justify-end">
                {!showResult ? (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={selectedAnswer === null}
                    className="button-primary text-white"
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="button-secondary text-white">
                    {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default QuizPage;
