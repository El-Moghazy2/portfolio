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
      "Hybrid recommendation engine combining collaborative filtering, content-based, and frequently-bought-together approaches to deliver personalized product suggestions.",
    tech: ["Collaborative Filtering", "Frequently Bought Together", "Python", "Scikit-learn"],
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
    achievement: "96% extraction accuracy",
    category: "GenAI / NLP",
  },
  {
    title: "Multi-modal House Price Prediction",
    description:
      "Built a model combining image and text data for more accurate property valuation.",
    tech: ["Deep Learning", "Multimodal", "Python"],
    category: "Machine Learning",
  },
  {
    title: "Price Monitoring System",
    description:
      "Automated product price monitoring and anomaly detection via Statistical Process Control (SPC).",
    tech: ["Statistics", "SPC", "Python"],
    category: "Data Science",
  },
  {
    title: "Customer Segmentation",
    description:
      "Enhanced promo-code allocation efficiency using clustering-based customer segmentation.",
    tech: ["Clustering", "Scikit-learn", "Python"],
    category: "Machine Learning",
  },
  {
    title: "Question Bot",
    description:
      "RAG-based chatbot answering queries on LLMs using Hugging Face course materials as a knowledge base.",
    tech: ["RAG", "Hugging Face", "LLMs", "Python"],
    category: "GenAI / NLP",
  },
];
