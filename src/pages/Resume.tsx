import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import cvPdf from "../assets/CV.png";

const Resume = () => {
  return (
    <SimpleGrid justifyItems={"center"}>
      <Box paddingTop={5} width={"800px"}>
        <Image src={cvPdf} />
      </Box>
    </SimpleGrid>
  );
};

export default Resume;