import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box borderRadius={10} padding={5} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
