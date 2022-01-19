import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <h1 className="home-title">Mahen Seneviratne</h1>

      <p>
        I&apos;m a software engineer at{" "}
        <a
          className="home-link"
          href="https://www.nytimes.com"
          target="_blank"
          rel="noreferrer"
        >
          The New York Times.
        </a>
      </p>

      <p>My expertise is in:</p>
      <ul>
        <li>REST/GraphQL APIs</li>
        <li>Machine learning</li>
        <li>Big data ETL pipelines</li>
        <li>Web applications</li>
      </ul>
    </React.Fragment>
  );
};

export default Home;
