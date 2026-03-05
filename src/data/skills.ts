export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    skills: ["Scikit-learn", "Keras", "PyTorch", "TensorFlow", "Statistics"],
  },
  {
    name: "Generative AI",
    skills: ["RAG", "LangChain", "LangGraph", "LLMs"],
  },
  {
    name: "Languages & Tools",
    skills: ["Python", "OOP", "SQL", "Pandas", "Databricks", "Azure"],
  },
  {
    name: "Data & Business",
    skills: ["Data Visualization", "Data Storytelling", "Business Problem Solving", "Design Thinking"],
  },
];
