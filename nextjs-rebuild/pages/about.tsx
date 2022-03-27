import { Box, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box w={['90%', '90%', '70%']} mx='auto' fontSize={'sm'}>
      <Text my='1em' textAlign={'center'} color={"primary.500"} fontSize={'xl'} fontWeight={'semibold'}>ANDREA MOORE</Text>
      <Text>
        I have worked as a defense attorney representing families throughout
        West Kentucky for well over a decade. I also clerked for retired Supreme
        Court Justice Bill Cunningham when he was Circuit Judge and learned
        first hand the type of judge I would like to be. I became concerned
        after covid hit when I saw many workers in the justice system leaving
        their positions to seek new opportunities. If we lose the dedicated men
        and women that make up our local justice system we all lose out. I want
        to put the focus back on these employees and do any and everything I can
        to assist them in bringing forth justice to our community. I want to
        make their day to day work life better so the justice system can
        continue to function the way it should without high turnover due to
        these valuable people being overlooked and taken for granted.
      </Text>
      <Text mt={'1.5em'}>
        I grew up in Calloway County, Kentucky. My granddad owned the local
        Singer sewing shop and my mother was employed by the US postal service
        in Murray, while my father worked as an engineer on the river. I have
        two daughters, Savannah who loves gymnastics, and Saylor who is into
        karate. My husband, Lance Moore, is a pharmacist at a local hospital and
        we live in his home county of Marshall in the small town of Possum Trot.
      </Text>
    </Box>
  );
}
