import type { NextPage } from "next";

import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

import LandingImage from "../public/images/landing2.png";

const Home: NextPage = () => {
  return (
    <>
      <Box w={"100%"} textAlign="center" backgroundColor={"black"}>
        <Box w={["100%", "80%", "60%"]} mx="auto">
          <Image src={LandingImage}></Image>
        </Box>
      </Box>

      <Flex h="10em" justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"md"}>Video content coming soon!</Text>
      </Flex>
    </>
  );
};

export default Home;
