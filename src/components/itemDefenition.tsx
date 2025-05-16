import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface props {
  item: string;
  children: ReactNode | ReactNode[];
}
const ItemDefenition = ({ item, children }: props) => {
  return (
    <Box marginY={5}>
      <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
        {item}
      </Heading>
      <Box as="dd">{children}</Box>
    </Box>
  );
};

export default ItemDefenition;
