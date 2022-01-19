import type { NextPage } from "next";
import React from "react";

interface IJobHistory {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

const jobHistory: IJobHistory[] = [
  {
    title: "Software Engineer",
    company: "The New York Times",
    date: "Sep 2020 - Present",
    bullets: [
      "Worked on in-house A/B testing software, maintaining multiple backend APIs and client libraries written in Golang and JavaScript.",
      "Designed ETL pipeline in Google Cloud BigQuery to allow newsroom editors to understand how the New York Times homepage is performing.",
      "Created System of Record (SOR) containing a curated set of metrics enabling the company to interpret A/B test performance to drive growth and engagement.",
      "Overhauled an outdated user interface for creating A/B tests into a modern React application using server side rendering and code splitting.",
      "Developed migration software to help transition company between business intelligence tools.",
    ],
  },
  {
    title: "Manager of Software Engineering",
    company: "Innovu LLC.",
    date: "Jan 2019 - Sep 2020",
    bullets: [
      "Continued previous responsibilities as a lead contributor to the codebase. Implemented caching of expensive Redshift queries with Redis to decrease response times. Created an event-based queue system with Golang and PostgreSQL, which allowed us to extract long-running resource-intensive work from our Node.js REST API. The queue reliably handles multiple jobs with configurable concurrency and priority.",
      "Managed a team of 8 remote software engineers through daily scrum calls and frequent one-on-one meetings.",
      "Kept engineers challenged and motivated by securing dedicated time for developers to work on exploratory projects and open source software that aligned with their career goals and personal interests.",
      "Coordinated with product managers, engineers, data scientists, and executives to ensure goals were met. Helped guide the technical roadmap for the company, and used my previous experience as a Software Engineer to bring attention to any potential hurdles we may face.",
      "Deployed software and monitored all production systems. Debugged issues such as system outages and memory leaks directly on EC2 Linux servers.",
      "Revamped the DevOps process for the company. Used AWS Cloudformation to codify deployment infrastructure and CodeDeploy to automatically deploy latest changes from our GitHub repositories to a test EC2 instance. Formalized a company-wide release policy so all software was continuously deployed every 2 weeks for all engineering teams, instead of ad-hoc with every team on their own schedule.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Innovu LLC.",
    date: "Jan 2016 - Jan 2019",
    bullets: [
      "Worked on a full-stack web application using Node.js, Ember, and PostgreSQL.",
      "Developed a dynamic SQL query builder, exposing data from AWS Redshift and supporting complex analysis such as distinct counts and pivoted tables. Used streaming and list virtualization to progressively load large amounts of data in the web application. This product became the core of our business intelligence tool.",
      "Created an interactive report builder for users to visualize data and build collaborative dashboards. Wrote a microservice in Node.js to export reports to PDF, Word, PowerPoint, and CSV.",
      "Built a desktop application in React and Electron to help Innovu analysts determine if a prospective client's insurance claims data met the requirements to be loaded into our data warehouse. This tool automated the checks analysts previously performed manually in Excel and reduced the back-and-forth between Innovu and insurance vendors.",
    ],
  },
  {
    title: "Contract Developer",
    company: "Google",
    date: "Jan 2015 - Sep 2015",
    bullets: [
      "Wrote JavaScript functions as part of a data transformation pipeline to correct inconsistencies in large product inventory datasets before ingestion into Google Shopping.",
    ],
  },
  {
    title: "SAT/ACT Tutor",
    company: "Kaplan",
    date: "Jan 2013 - Jan 2015",
    bullets: [
      "Tutored individual students and classes (20-30 students) in SAT and ACT concepts.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Schneider Lab",
    date: "Mar 2014 - Sep 2014",
    bullets: [
      "Built a full-stack web application with Spring MVC, MongoDB, and AngularJS to track clinical case reports for the Schneider Lab.",
    ],
  },
];

const Resume: NextPage = () => {
  return (
    <React.Fragment>
      {jobHistory.map((job, idx) => (
        <div key={idx} className="resume-entry">
          <div className="resume-info">
            <h4>{job.title}</h4>
            <h4>{job.company}</h4>
          </div>

          <i className="resume-date">{job.date}</i>

          <ul>
            {job.bullets.map((bullet, idx) => (
              <li key={idx} className="resume-bullet">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Resume;
