import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { addContact, Contact as EmailContact } from "../firebase/EmailList";
import emailJs from "emailjs-com";
import { useRouter } from "next/router";
import { messageTempalte, serviceID, userID } from "../emailjs";

type FormStatus = "Not Submitted" | "Submitting" | "Success" | "Failure";

export default function Contact() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contact, setContact] = useState({} as EmailContact);
  const [message, setMessage] = useState("");
  const [formStatusInfo, setFormStatusInfo] = useState({
    status: "Not Submitted" as FormStatus,
    error: "",
  });

  function createContactFieldUpdate<T extends keyof EmailContact>(field: T) {
    return (e: any) => {
      const c = { ...contact };
      c[field] = e.target.value;
      setContact(c);
    };
  }

  function sendMessage() {
    setFormStatusInfo({ ...formStatusInfo, status: "Submitting" });

    const emailJsTemplateInfo = {
      name: `${contact.fname} ${contact.lname}`,
      message: message,
    };


    Promise.all([
      addContact(contact),
      emailJs.send(serviceID, messageTempalte, emailJsTemplateInfo, userID),
    ])
      .then(() => {
        setFormStatusInfo({ ...formStatusInfo, status: "Success" });
      })
      .catch((err) => {
        setFormStatusInfo({ status: "Failure", error: err });
      });
  }

  function createRedirectToHome() {
    return () => {
      router.push("/");
    };
  }

  return (
    <>
      <Box
        w="100%"
        backgroundColor={"primary.500"}
        borderBottomLeftRadius={["10%", "10%", "20%"]}
        borderBottomRightRadius={["10%", "10%", "20%"]}
        pb={"5em"}
      >
        <Box width={["95%", "85%","70%", "60%"]} mx={"auto"}>
          <Text
            py="1em"
            color={"white"}
            fontSize={"3xl"}
            fontWeight={"semibold"}
          >
            CONTACT ME
          </Text>

          <Flex gap={5}>
            <FormControl>
              <FormLabel color={"white"}>First Name</FormLabel>
              <Input
                id="fname"
                
                backgroundColor={"white"}
                onChange={createContactFieldUpdate("fname")}
                value={contact.fname}
              />
            </FormControl>

            <FormControl>
              <FormLabel color={"white"}>Last Name</FormLabel>
              <Input
                id="lname"
                backgroundColor={"white"}
                onChange={createContactFieldUpdate("lname")}
                value={contact.lname}
              />
            </FormControl>
          </Flex>

          <Flex gap={5}>
            <FormControl>
              <FormLabel color={"white"}>Email</FormLabel>
              <Input
                id="email"
                type={"email"}
                backgroundColor={"white"}
                onChange={createContactFieldUpdate("email")}
                value={contact.email}
              />
            </FormControl>

            <FormControl>
              <FormLabel color={"white"}>Phone</FormLabel>
              <Input
                id="phone"
                backgroundColor={"white"}
                onChange={createContactFieldUpdate("phone")}
                value={contact.phone}
              />
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel color={"white"}>Message</FormLabel>
            <Textarea
              id="message"
              backgroundColor={"white"}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>

          <Button
            my="1em"
            isFullWidth
            backgroundColor={"primary.800"}
            color={"white"}
            letterSpacing={"wide"}
            _hover={{ backgroundColor: "primary.800" }}
            onClick={sendMessage}
          >
            SEND MESSAGE
          </Button>
        </Box>

        {formStatusInfo.status == "Failure" ? (
          <Text textAlign={"center"} color={"red.500"}>
            {formStatusInfo.error.toString()}
          </Text>
        ) : (
          ""
        )}
      </Box>

      {formStatusInfo.status == "Submitting" ? (
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent alignItems={"center"}>
            <ModalHeader>Sending Message</ModalHeader>
            <ModalBody>
              <Spinner
                size={"xl"}
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}

      {formStatusInfo.status == "Success" ? (
        <Modal isOpen={true} onClose={createRedirectToHome()}>
          <ModalOverlay />
          <ModalContent alignItems={"center"}>
            <ModalHeader>Message Received!</ModalHeader>
            <ModalBody>
              <Text>
                Thank you for contacting us. We have recieved your message.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={createRedirectToHome()} colorScheme={"green"}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
