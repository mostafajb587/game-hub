import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Games.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchGame from "./SearchGame";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="70px" objectFit={"cover"}></Image>
      </Link>
      <SearchGame></SearchGame>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
