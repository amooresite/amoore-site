import Link from "next/link";
import {
  Box,
  Flex,
  Link as StlyedLink,
  Modal,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

import MainLogo from "./MainLogo";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={"100%"} h={"10vh"} boxShadow={"lg"}>
      <Flex
        w="85%"
        h="100%"
        mx="auto"
        alignItems={"center"}
        justifyContent={["center", "center", "unset"]}
      >
        <Box w={"9em"}>
          <MainLogo stroke="black" fill="black" subTextFill="white" />
        </Box>

        {/* Desktop nav items */}
        <Flex
          display={["none", "none", "flex"]}
          position={"relative"}
          color={"primary.500"}
          fontWeight={"semibold"}
          fontSize={"sm"}
          letterSpacing={"wider"}
          gap={"3em"}
          ml={["unset", "unset", "6em"]}
        >
          {[
            ["/", "Home"],
            ["about", "About"],
            ["media", "Media"],
            ["contact", "Contact"],
          ].map((navItem, i) => {
            return (
              <Link key={i} href={navItem[0]}>
                <StlyedLink
                  _hover={{ textDecoration: "none", color: "primary.800" }}
                >
                  {navItem[1]}
                </StlyedLink>
              </Link>
            );
          })}
        </Flex>

        {/* Mobile Nav Button*/}
        <Box
          w={"28px"}
          h={"33px"}
          position={"absolute"}
          right={"5%"}
          zIndex={"10"}
          _hover={{ cursor: "pointer" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex
          flexDirection={"column"}
          display={["flex", "flex", "none"]}
          position={"absolute"}
          right={"5%"}
          w={"28px"}
          h={"3px"}
          backgroundColor={"primary.500"}
          borderRadius={"3xl"}
          transition={"ease-in-out"}
          transitionDuration={"300ms"}
          _before={{
            content: '""',
            position: "absolute",
            w: "28px",
            h: "3px",
            backgroundColor: "primary.500",
            top: "-8px",
          }}
          _after={{
            content: '""',
            position: "absolute",
            w: "28px",
            h: "3px",
            backgroundColor: "primary.500",
            top: "8px",
          }}
        />

        {/* Mobile Nav Items */}
        <Modal onClose={onClose} isOpen={isOpen} size={"full"} motionPreset="slideInBottom">
          <ModalContent
            backgroundColor={"primary.500"}
            justifyContent="center"
            alignItems="center"
            gap={"2em"}
          >
            <Box
              w={"28px"}
              h={"2.5px"}
              backgroundColor={"white"}
              position="absolute"
              right={"5%"}
              top={"5%"}
              transform={"rotate(45deg);"}
              _after={{
                content: '""',
                position: "absolute",
                w: "28px",
                h: "2.5px",
                backgroundColor: "white",
                transform: "rotate(90deg);",
              }}
            />
            <Box
              position="absolute"
              right={"5%"}
              top={"3%"}
              h={"30px"}
              w={"30px"}
              cursor={"pointer"}
              onClick={onClose}
            />
            {[
              ["/", "Home"],
              ["about", "About"],
              ["media", "Media"],
              ["contact", "Contact"],
            ].map((navItem, i) => {
              return (
                <Link key={i} href={navItem[0]}>
                  <StlyedLink
                    color={"white"}
                    fontWeight="bold"
                    _hover={{ textDecoration: "none" }}
                    onClick={onClose}
                  >
                    {navItem[1]}
                  </StlyedLink>
                </Link>
              );
            })}
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
}
