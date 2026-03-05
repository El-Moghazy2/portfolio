export interface Project {
  title: string;
  description: string;
  tech: string[];
  achievement?: string;
  category: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "HealthPost",
    description:
      "CHW Decision Support system using MedGemma 4B-IT, LangGraph, and Gradio. Provides medical AI assistance for community health workers in resource-limited settings.",
    tech: ["MedGemma", "LangGraph", "Gradio", "Python"],
    achievement: "MedGemma Impact Challenge 2025",
    category: "GenAI / Healthcare",
    link: "https://github.com/El-Moghazy2/gemma",
    featured: true,
  },
  {
    title: "Smart Irrigation System",
    description:
      "ML-powered irrigation optimization system designed to help farmers make data-driven decisions about water usage and crop management.",
    tech: ["Machine Learning", "IoT", "Python"],
    achievement: "1st Place MEA - IBM Call for Code 2019",
    category: "ML / IoT",
  },
  {
    title: "Retail Recommender",
    description:
      "Hybrid recommendation engine combining collaborative filtering and content-based approaches to deliver personalized product suggestions.",
    tech: ["Collaborative Filtering", "Python", "Scikit-learn"],
    achievement: "16% average sales increase",
    category: "Machine Learning",
  },
  {
    title: "KGQA-RAG",
    description:
      "Retrieval-augmented generation for multi-hop question answering on knowledge graphs.",
    tech: ["RAG", "Knowledge Graphs", "LLMs", "Python"],
    category: "GenAI / NLP",
  },
  {
    title: "Extractor Agent",
    description:
      "GenAI agent to extract KPIs from unstructured documents and spec sheets using dynamic and static Pydantic models.",
    tech: ["LangGraph", "Chainlit", "Pydantic", "Python"],
    category: "GenAI / NLP",
  },
];
