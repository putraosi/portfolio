import React from "react";
import "./portfolio.css";
import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6 } from "../../assets";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Chart Templates & Infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboar UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining task and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Chart tempaltes & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Chart tempaltes & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn" target="_blank">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
