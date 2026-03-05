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
      "Resolved critical operational issues, eliminating 6 months of manual work",
      "Enhanced team efficiency through business problem-solving frameworks",
    ],
  },
  {
    company: "Henkel",
    role: "Data Scientist",
    period: "Aug 2023 - Sep 2025",
    bullets: [
      "Developed time series forecasting and Bayesian optimization models",
      "Founded the GenAI Council at GBS+ Cairo",
      "Led training sessions on AI/ML across the organization",
    ],
  },
  {
    company: "Fatura",
    role: "Data Scientist",
    period: "Jun 2021 - Jul 2023",
    bullets: [
      "Led data science team through full project lifecycle",
      "Delivered data-driven insights using statistical tools and ML models",
    ],
  },
];
