import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Text,
  Wrap,
  WrapItem,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import images from "../public/images";

export default function Media() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [viewingImage, setViewingImage] = useState(images[0]);

  const videos: Array<string> = [];

  function createViewingImageUpdateAndDisplay(img: typeof viewingImage) {
    return () => {
      setViewingImage(img);
      onOpen();
    };
  }

  return (
    <Box w={["90%", "90%", "80%"]} mx="auto">
      <Text
        my="1em"
        color={"primary.500"}
        fontSize={"xl"}
        fontWeight={"semibold"}
        letterSpacing={'wider'}

      >
        PICTURES
      </Text>

      <Wrap>
        {images.map((img, i) => {
          return (
            <WrapItem
              key={i}
              width={["150px", "150px", "200px"]}
              _hover={{ cursor: "pointer" }}
              onClick={createViewingImageUpdateAndDisplay(img)}
            >
              <Center>
                <Image src={img} />
              </Center>
            </WrapItem>
          );
        })}
      </Wrap>

      <Text
        my="1em"
        color={"primary.500"}
        fontSize={"xl"}
        fontWeight={"semibold"}
        letterSpacing={'wider'}
      >
        VIDEOS
      </Text>

      <Wrap>

          <Text fontSize={'lg'}>Video content coming soon!</Text>

      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={"transparent"}
          justifyContent="center"
          alignItems="center"
        >
          <ModalBody>
            <Image src={viewingImage} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
