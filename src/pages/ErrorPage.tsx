import Navbar from "@/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const Error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>OPPS</Heading>
        <Text>
          {isRouteErrorResponse(Error)
            ? "this page does not exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
