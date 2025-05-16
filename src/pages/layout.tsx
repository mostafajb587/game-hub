import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={9}>
        <Outlet />
      </Box>
    </>
  );
};

export default layout;
