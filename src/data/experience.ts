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
      "Guided stakeholders in implementing data solutions, translating insights into actionable strategies",
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
  {
    company: "Udacity",
    role: "Data Analysis Session Lead (Tutor/Mentor)",
    period: "Feb 2022 - Jan 2023",
    bullets: [
      "Taught Statistics and Analytics concepts to 100+ students across 4 cohorts and 84+ sessions",
      "Mentored students to complete their nanodegree with a 90%+ success rate",
      "Achieved 4.86/5 average rating for the latest cohort",
    ],
  },
  {
    company: "Aigorithm",
    role: "Computer Vision Intern",
    period: "Aug 2020 - Oct 2020",
    bullets: [
      "Identified and analyzed possible solutions for computer vision projects",
      "Implemented and tested modern and classical CV solutions using AWS, TensorFlow, and PyTorch",
    ],
  },
  {
    company: "Siemens EDA",
    role: "Machine Learning Intern",
    period: "Jun 2019 - Dec 2019",
    bullets: [
      "Engineered unstructured data for Machine Learning usage",
      "Implemented ML pipelines and taught Applied ML track to other employees",
    ],
  },
];
