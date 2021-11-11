import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Card from "../molecules/Card";
import IconObject from "../molecules/IconObject";
import Paragraph from "../atoms/Paragraph";

const projects = [
 {
  title: "awos.com",
  role: "Front-end",
  description: [
   "awos.com is my personal web site, Currently it is in contruction, the idea is create a place for create a new tech community",
  ],
  tecnologies: ["Next", "i18", "sanity-cms", "gsap", "antDesing", "Typescript"],
  image: "/images/projects/awos.png",
 },
 {
  title: "arrupi.jeluchu.com",
  role: "Front-end",
  description: [
   "Arrupi is an anime page, where you can share with the nimpone culture",
  ],
  tecnologies: ["html", "sass", "js", "revel.js"],
  image: "/images/projects/Arrupi.png",
 },

 {
  title: "ecomerce",
  role: "Front-end",
  description: ["basic ecomerce to learn new tecnologies "],
  tecnologies: ["react", "styled-component", "Typescript", "redux"],
  image: "/images/projects/Arrupi.png",
 },
 {
  title: "task-admin",
  role: "Front-end",
  description: ["Single page aplication for manage task and create notes"],
  tecnologies: [
   "next.js",
   "redux",
   "firebase",
   "antDesing",
   "Typescript",
   "Tailwindcss",
  ],
  image: "/images/projects/book-ez.png",
 },
];

const Career = () => {
 return (
  <Container>
   <Heading size="md" isCentered>
    <strong>My</strong> experience <strong>in</strong> projects
   </Heading>
   <Carousel
    items={projects.map((el) => ({
     title: el.title,
     subtitle: el.role,
     content: (
      <div className="projects-container">
       <Image src={el.image} alt="" />
       <Card title={el.title} text="" items={el.description} />
       <div className="tecnologies">
        <Paragraph>Tecnologies</Paragraph>
        {el.tecnologies.map((item, index) => (
         <IconObject title={item} text="" key={index} />
        ))}
       </div>
      </div>
     ),
    }))}
   />
   <style jsx>{`
    .projects-container {
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-wrap: wrap;
     padding: 0 1rem;
    }
    .tecnologies {
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
    }
    img {
     height: 200px;
     width: 400px;
    }
   `}</style>
  </Container>
 );
};

export default Career;
