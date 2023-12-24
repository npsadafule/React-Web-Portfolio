import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Calculator Application using React",
    description:
      "Completed a fully functional calculator application using React, demonstrating proficiency in front-end development and React framework.",
    getImageSrc: () => require("../images/calphoto.png"),
  },
  {
    title: "SFU's Mountain Mayhem",
    description:
      "A game created within 24 hours for a game jam with the theme 'Peak'.",
    getImageSrc: () => require("../images/mmphoto.jpeg"),
  },
  {
    title: "Mangata and Galio",
    description:
      "Developed a responsive webpage for a Fictional Client using HTML and CSS.",
    getImageSrc: () => require("../images/mgphoto.png"),
  },
  {
    title: "Urban Shack",
    description:
      "A UX design case study for a food delivery app.",
    getImageSrc: () => require("../images/usphoto.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#FA8072"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
