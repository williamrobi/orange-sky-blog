export type SkillLevel = "beginner" | "intermediate" | "advanced";

export interface Course {
  id: string;
  title: string;
  titleSwahili: string;
  description: string;
  level: SkillLevel;
  lessons: number;
  duration: string;
  image: string;
  topics: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: "pdf" | "ppt" | "audio" | "video";
  size: string;
  downloadUrl: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  level: SkillLevel;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionSwahili: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const courses: Course[] = [
  {
    id: "intro-kiswahili",
    title: "Introduction to Kiswahili",
    titleSwahili: "Utangulizi wa Kiswahili",
    description: "Start your Kiswahili journey with basic greetings, numbers, and essential phrases for everyday communication.",
    level: "beginner",
    lessons: 12,
    duration: "4 weeks",
    image: "beginner-course.jpg",
    topics: ["Greetings (Salamu)", "Numbers (Nambari)", "Colors (Rangi)", "Family (Familia)", "Daily Phrases"],
    resources: [
      { id: "r1", title: "Kiswahili Alphabet Guide", type: "pdf", size: "2.5 MB", downloadUrl: "#" },
      { id: "r2", title: "Basic Greetings Audio", type: "audio", size: "15 MB", downloadUrl: "#" },
      { id: "r3", title: "Numbers 1-100 Practice", type: "pdf", size: "1.8 MB", downloadUrl: "#" },
    ]
  },
  {
    id: "conversational-kiswahili",
    title: "Conversational Kiswahili",
    titleSwahili: "Kiswahili cha Mazungumzo",
    description: "Build confidence in speaking with practical dialogues, common expressions, and real-life scenarios.",
    level: "beginner",
    lessons: 15,
    duration: "5 weeks",
    image: "conversation-course.jpg",
    topics: ["Shopping (Ununuzi)", "Directions (Maelekezo)", "Food & Dining (Chakula)", "Travel (Safari)", "Making Friends"],
    resources: [
      { id: "r4", title: "Dialogue Scripts", type: "pdf", size: "3.2 MB", downloadUrl: "#" },
      { id: "r5", title: "Conversation Videos", type: "video", size: "120 MB", downloadUrl: "#" },
    ]
  },
  {
    id: "grammar-essentials",
    title: "Grammar Essentials",
    titleSwahili: "Misingi ya Sarufi",
    description: "Master Kiswahili grammar including noun classes, verb conjugations, and sentence structures.",
    level: "intermediate",
    lessons: 20,
    duration: "6 weeks",
    image: "grammar-course.jpg",
    topics: ["Noun Classes", "Verb Tenses", "Adjectives & Adverbs", "Sentence Structure", "Common Errors"],
    resources: [
      { id: "r6", title: "Grammar Handbook", type: "pdf", size: "5.5 MB", downloadUrl: "#" },
      { id: "r7", title: "Verb Conjugation Charts", type: "ppt", size: "8 MB", downloadUrl: "#" },
    ]
  },
  {
    id: "kiswahili-culture",
    title: "Kiswahili Culture & Traditions",
    titleSwahili: "Utamaduni wa Kiswahili",
    description: "Explore the rich cultural heritage of East Africa through proverbs, stories, and traditions.",
    level: "intermediate",
    lessons: 18,
    duration: "6 weeks",
    image: "culture-course.jpg",
    topics: ["Proverbs (Methali)", "Folk Stories (Hadithi)", "Music & Dance", "Festivals", "Customs"],
    resources: [
      { id: "r8", title: "100 Kiswahili Proverbs", type: "pdf", size: "2.1 MB", downloadUrl: "#" },
      { id: "r9", title: "Traditional Stories Audio", type: "audio", size: "45 MB", downloadUrl: "#" },
    ]
  },
  {
    id: "business-kiswahili",
    title: "Business Kiswahili",
    titleSwahili: "Kiswahili cha Biashara",
    description: "Professional Kiswahili for business settings, negotiations, and formal communications.",
    level: "advanced",
    lessons: 16,
    duration: "5 weeks",
    image: "business-course.jpg",
    topics: ["Formal Writing", "Business Meetings", "Negotiations", "Presentations", "Email Etiquette"],
    resources: [
      { id: "r10", title: "Business Letter Templates", type: "pdf", size: "1.5 MB", downloadUrl: "#" },
      { id: "r11", title: "Meeting Vocabulary", type: "ppt", size: "4 MB", downloadUrl: "#" },
    ]
  },
  {
    id: "advanced-literature",
    title: "Kiswahili Literature",
    titleSwahili: "Fasihi ya Kiswahili",
    description: "Dive deep into Kiswahili poetry, novels, and contemporary writing for advanced learners.",
    level: "advanced",
    lessons: 14,
    duration: "7 weeks",
    image: "literature-course.jpg",
    topics: ["Poetry (Ushairi)", "Novel Analysis", "Contemporary Authors", "Literary Devices", "Creative Writing"],
    resources: [
      { id: "r12", title: "Poetry Collection", type: "pdf", size: "3.8 MB", downloadUrl: "#" },
      { id: "r13", title: "Author Interviews", type: "video", size: "200 MB", downloadUrl: "#" },
    ]
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-greetings",
    courseId: "intro-kiswahili",
    title: "Greetings Quiz",
    level: "beginner",
    questions: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Kiswahili?",
        questionSwahili: "Unasemaje 'Hello' kwa Kiswahili?",
        options: ["Habari", "Kwaheri", "Asante", "Tafadhali"],
        correctAnswer: 0,
        explanation: "'Habari' is the most common greeting in Kiswahili, meaning 'Hello' or 'How are you?'"
      },
      {
        id: "q2",
        question: "What does 'Asante sana' mean?",
        questionSwahili: "'Asante sana' inamaanisha nini?",
        options: ["Goodbye", "Good morning", "Thank you very much", "Please"],
        correctAnswer: 2,
        explanation: "'Asante' means 'thank you' and 'sana' means 'very much', so together they mean 'thank you very much'."
      },
      {
        id: "q3",
        question: "How do you respond to 'Habari yako?'",
        questionSwahili: "Unajibu vipi 'Habari yako?'",
        options: ["Kwaheri", "Nzuri", "Hapana", "Ndio"],
        correctAnswer: 1,
        explanation: "'Nzuri' means 'good/fine' and is the standard response to 'Habari yako?' (How are you?)."
      },
      {
        id: "q4",
        question: "What is 'Good morning' in Kiswahili?",
        questionSwahili: "'Good morning' ni nini kwa Kiswahili?",
        options: ["Habari za jioni", "Habari za asubuhi", "Habari za usiku", "Habari za mchana"],
        correctAnswer: 1,
        explanation: "'Habari za asubuhi' literally means 'news of the morning' and is used as 'Good morning'."
      },
      {
        id: "q5",
        question: "How do you say 'Goodbye' in Kiswahili?",
        questionSwahili: "Unasemaje 'Goodbye' kwa Kiswahili?",
        options: ["Karibu", "Kwaheri", "Pole", "Sawa"],
        correctAnswer: 1,
        explanation: "'Kwaheri' is used to say 'Goodbye' in Kiswahili."
      }
    ]
  },
  {
    id: "quiz-numbers",
    courseId: "intro-kiswahili",
    title: "Numbers Quiz",
    level: "beginner",
    questions: [
      {
        id: "q6",
        question: "What is 'five' in Kiswahili?",
        questionSwahili: "'Five' ni nini kwa Kiswahili?",
        options: ["Tatu", "Tano", "Sita", "Nne"],
        correctAnswer: 1,
        explanation: "'Tano' means 'five' in Kiswahili."
      },
      {
        id: "q7",
        question: "How do you say 'ten' in Kiswahili?",
        questionSwahili: "Unasemaje 'ten' kwa Kiswahili?",
        options: ["Kumi", "Ishirini", "Thelathini", "Mia"],
        correctAnswer: 0,
        explanation: "'Kumi' means 'ten' in Kiswahili."
      },
      {
        id: "q8",
        question: "What number is 'saba'?",
        questionSwahili: "'Saba' ni nambari gani?",
        options: ["Six", "Seven", "Eight", "Nine"],
        correctAnswer: 1,
        explanation: "'Saba' means 'seven' in Kiswahili."
      }
    ]
  },
  {
    id: "quiz-grammar",
    courseId: "grammar-essentials",
    title: "Basic Grammar Quiz",
    level: "intermediate",
    questions: [
      {
        id: "q9",
        question: "Which prefix is used for the M-WA noun class in singular?",
        questionSwahili: "Kiambishi gani kinatumika kwa ngeli ya M-WA katika umoja?",
        options: ["Ki-", "M-", "Ji-", "U-"],
        correctAnswer: 1,
        explanation: "The M-WA class uses 'M-' prefix for singular nouns, typically for people."
      },
      {
        id: "q10",
        question: "What does 'Ninakula' mean?",
        questionSwahili: "'Ninakula' inamaanisha nini?",
        options: ["I will eat", "I am eating", "I ate", "I want to eat"],
        correctAnswer: 1,
        explanation: "'Ni-na-kula' breaks down to 'I' + 'present tense' + 'eat', meaning 'I am eating'."
      }
    ]
  }
];

export const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case "beginner": return "bg-beginner text-white";
    case "intermediate": return "bg-intermediate text-foreground";
    case "advanced": return "bg-advanced text-white";
  }
};

export const getLevelLabel = (level: SkillLevel): string => {
  switch (level) {
    case "beginner": return "Mwanzo (Beginner)";
    case "intermediate": return "Kati (Intermediate)";
    case "advanced": return "Juu (Advanced)";
  }
};
