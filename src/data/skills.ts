export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    skills: ["Predictive Modeling", "Time Series Forecasting", "Computer Vision", "NLP"],
  },
  {
    name: "Generative AI",
    skills: ["RAG", "LangGraph", "GenAI Chatbots", "LLMs"],
  },
  {
    name: "Languages & Tools",
    skills: ["Python", "SQL", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    name: "Data & Analysis",
    skills: ["Data Analysis", "Research", "Statistical Modeling", "Bayesian Optimization"],
  },
];
