import {
  pythonbootcamp,
  sc,
  website2,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "VNJ Innovations",
    date: "Jul 2024 - Present",
    details: [
      "Specializing in <span style='color: white;'>delivering data-driven solutions</span> to clients in various industries, including the pharmaceutical sector (Furbo Pharma). ",
      "Expertise in extracting actionable insights from large datasets and <span style='color: white;'>creating impactful visualizations</span> using Looker Studio.",
      "Additionally, contributed to the <span style='color: white;'>creation of client-facing websites</span> to enhance data communication and stakeholder engagement. Proven ability to <span style='color: white;'>translate complex analytical findings</span> into clear and actionable recommendations",
    ],
  },
  {
    title: "NLP Specialist",
    company_name: "Cymbelline Innovations",
    date: "Jan 2024 - Mar 2024",
    details: [
      "Created and trained <span style='color: white;'>multiple machine learning models</span> that convert natural language to SQL, and subsequently leveraged all NLP techniques to better the models that were created, and were tested on a custom dataset. ",
      "Helped in <span style='color: white;'>Designing and developing innovative</span> AI applications.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Repute",
    date: "Jan 2022 - Feb 2023",
    details: [
      "<span style='color: white;'>Led a team of 20</span> and successfully coordinated high-profile events such as music, dancing and other types of recreational events while contributing to the creation of revenue-generating marketing visual content and showcasing exceptional leadership skills. ",
      " worked as data analyst and <span style='color: white;'>analysed raw data of past events</span> to better the quality of future events and also predict the qualitative and quantitative parameters of the audience.",
      "Visualized data for all the ongoing events <span style='color: white;'>using visualizing tools such as Looker Studio</span> and conducted a benchmark analysis",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Campallin Innovations",
    date: "Aug 2022 - Oct 2022",
    details: [
      "<span style='color: white;'>Developed and executed efficient Intelligent Systems</span> for various purposes which include but are not limited to Loan Prediction using Machine Learning, Housing Prices Prediction Project, Stock Price Prediction using Machine Learning, Titanic Survival Project. ",
    ],
  },
];

const portfolio = [
  {
    name: "Sign Language to Audio Project",
    description:
      "Created a website which converts sign language to text and audio in realtime, using the feed from the camera efficiently.",
    image: sc,
  },
  {
    name: "Website Development",
    description:
      "Created a Website which is visually appealing and informative for a Data Analyst Company called VNJ Innovations.",
    image: website2,
  },
  {
    name: "Courses Completed in Coursera",
    description:
      "Completed various courses on coursera which include but are not limited to Artificial Intelligence, Machine Learning, 90 days of Python Bootcamp, etc.",
    image: pythonbootcamp,
  },
];

export { experiences, portfolio };

