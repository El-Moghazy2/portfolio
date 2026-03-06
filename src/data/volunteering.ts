export interface Talk {
  event: string;
  topic: string;
}

export interface Leadership {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export const talks: Talk[] = [
  { event: "DSC MENA", topic: "How to Build and Evaluate Your First RAG" },
  { event: "Engineerex Summit Pro Edition", topic: "Utilizing Big Data for Predictive Analytics" },
  { event: "Right Direction, GDSC Cairo University", topic: "Introduction to Machine Learning" },
  { event: "IBM Learn From The Best | MEA", topic: "How to Make an Impactful Contribution" },
  { event: "Data Science For a Better Future", topic: "Showcasing Different Projects" },
  { event: "Henkel PowerX", topic: "Unlocking Business Potential Using Recommender Systems" },
];

export const leadership: Leadership[] = [
  {
    role: "President & Co-founder",
    organization: "GUC Brain — Machine Learning Community",
    period: "2018 - 2020",
    bullets: [
      "Mentored research intern students throughout their learning process.",
      "Designed and taught a practical Machine Learning curriculum including hands-on ML and Computer Vision projects.",
      "Led the organization team of Data Science For a Better Future event with 300+ attendees.",
    ],
  },
];
