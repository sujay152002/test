import {
  algorithms,
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
    company_name: "Employed at VNJ Innovations",
    date: "July 2024 - Present",
    details: [
      "Performed Data Analysis on large data with over <span style='color: white;'>100,000 entries</span> as well as cleaned the data, and used visualization tools like Looker Studio to present data to stakeholders.",
      "Crafted visually appealling website with over <span style='color: white;'>20 pages</span>.",
      "Proven ability to <span style='color: white;'>translate complex analytical findings</span> into clear and actionable recommendations.",
      "Produced reports based on Data collected by a streamline methods created by myself to better the existing performance for <span style='color: white;'>Sales and Medicine</span>, which ultimately helped progress.",
    ],
  },
  {
    title: "Natural Language Processing",
    company_name: "Cymbeline Innovatiions",
    date: "Jan 2024 - Mar 2024",
    details: [
      "Developed and delivered <span style='color: white;'> custom Machine Learning models</span> as per requested by the project leader.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Repute",
    date: "Jan 2022 - Feb 2023",
    details: [
      "Led a team of 20 and successfully coordinated high-profile events such as music, dancing and other types of recreational events while contributing to the creation of revenue-generating marketing visual content and <span style='color: white;'>showcasing exceptional leadership skills</span>.",
      "Utilised Raw Data of past events to better the quality of future events and also <span style='color: white;'>predict the qualitative and quantitative parameters</span> of the audience.",
      "<span style='color: white;'>Gathered and managed data</span> both primary and secondary , as well as created visual representations using python to convey thee findings to non-technical personnel",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Campalin Innovations",
    date: "2015 - 2018",
    details: [
      "Developed and <span style='color: white;'>executed an efficient Intelligent System</span> for various purposes which include but are not limited to Loan Prediction using Machine Learning, Housing Prices Prediction Project, Stock Price Prediction using Machine Learning, Titanic Survival Project",
    ],
  },
];

const portfolio = [
  {
    name: "Sign Language to Audio Project",
    description:
      "A Project in which I created a website which converts Sign Language, from a live feed camera to convert it into text and audio both in realtime.",
    image: oscs,
  },
  {
    name: "Website",
    description:
      "Created a website for a Data Analyst company which was visually appealing and informative.",
    image: devnotes,
  },
  {
    name: "Courses Completed",
    description:
      "Completed various courses on coursera which include but are not limited to Artificial Intelligence, Machine Learning, 90 days of Python Bootcamp, etc.",
    image: algorithms,
  },
];

export { experiences, portfolio };

