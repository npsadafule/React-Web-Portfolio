import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Photo = ({ title, description, imageSrc }) => {
  return (
    <div>
      <HStack spacing={3}>
        <Box
          backgroundColor="#F2F4F4"
          textColor="black"
        >
          <VStack spacing={3}>
            <Image src={imageSrc} alt={title} boxSize={'100%'}/>         
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Photo;
