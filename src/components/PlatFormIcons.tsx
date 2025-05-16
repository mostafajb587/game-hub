import { HStack } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiAndroid, SiApple, SiLinux } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

interface props {
  views: string[];
}
const PlatFormIcons = ({ views }: props) => {
  const iconMap: { [key: string]: React.ComponentType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    android: SiAndroid,
    ios: MdPhoneIphone,
    mac: SiApple,
    linux: SiLinux,
  };

  return (
    <HStack spacing={4}>
      {views.map((view, index) => {
        const IconComponent = iconMap[view];
        return IconComponent ? <IconComponent key={index} /> : null;
      })}
    </HStack>
  );
};
export default PlatFormIcons;
