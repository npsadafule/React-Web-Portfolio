import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import AvatarImage from "../images/profilepic.jpg";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Neel Sadafule!";
const bio1 = "A certified React frontend developer";
const bio2 = "UI/UX designer";
const bio3 = "Photographer | Videographer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#151515"
  >
    <VStack spacing={8}>
    <VStack spacing={3}>

<Avatar name="Neel Sadafule" src={AvatarImage} size="2xl"/>
<Heading size="md">{greeting}</Heading>
    </VStack>
<Heading size="2xl">{bio1}</Heading>
<Heading size="2xl">{bio2}</Heading>
<Heading size="2xl">{bio3}</Heading>


    </VStack>
  </FullScreenSection>
);

export default LandingSection;
