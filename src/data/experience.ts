export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "Fertiglobe",
    role: "Senior Data Scientist",
    period: "Sep 2025 - Present",
    bullets: [
      "Designed and implemented a GenAI description enhancer for SAP migration that automated 6 months of manual work",
      "Built an Agentic RAG pipeline with fallback search and automated evaluation, optimizing retrieval via Query pre-processing, HyDE and Semantic Re-ranking",
      "Conducted cross-functional discovery sessions to identify high-potential opportunities for Data Science interventions",
    ],
  },
  {
    company: "Henkel",
    role: "Data Scientist",
    period: "Aug 2023 - Sep 2025",
    bullets: [
      "Applied advanced Data Science techniques, including time series forecasting, Bayesian optimization and RAG, to solve end-to-end business challenges",
      "Guided stakeholders in implementing data solutions and translating insights into actions",
      "Delivered training sessions to enhance team skills and promote knowledge sharing",
    ],
  },
  {
    company: "Fatura",
    role: "Data Scientist",
    period: "Jun 2021 - Jul 2023",
    bullets: [
      "Directed end-to-end project execution, from requirements gathering to implementation and testing",
      "Provided actionable insights through advanced statistical analysis and machine learning",
      "Designed and deployed cancellation prediction, recommender systems, and customer segmentation solutions",
    ],
  },
  {
    company: "Udacity",
    role: "Data Analysis Session Lead",
    period: "Feb 2022 - Jan 2023",
    bullets: [
      "Delivered 80+ sessions and prepared materials for students from various fields and seniority levels",
      "Explained Statistical and Data Analytics concepts and their applications in case studies",
    ],
  },
];
