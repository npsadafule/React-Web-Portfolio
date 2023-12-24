import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Photo from "./Photos";

const photopgraphs = [

  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      getImageSrc: () => require("../clicks/8.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      getImageSrc: () => require("../clicks/10.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    getImageSrc: () => require("../clicks/3.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      getImageSrc: () => require("../clicks/9.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    getImageSrc: () => require("../clicks/6.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    getImageSrc: () => require("../clicks/2.jpg"),
  },
 
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    getImageSrc: () => require("../clicks/4.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    getImageSrc: () => require("../clicks/5.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      getImageSrc: () => require("../clicks/7.jpg"),
  },
];

const PhotoSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#111111"
      isDarkBackground
      p={10}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="photography-section">
        My Photography
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={3}
      >
        {photopgraphs.map((project) => (
          <Photo
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

export default PhotoSection;
