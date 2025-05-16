import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/useplatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const PlatFormSelector = () => {
  const { data: platforms } = usePlatform();
  const setplatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setselectedplatformId = useGameQueryStore((s) => s.setPlatFormId);
  const selectedplatform = usePlatforms(setplatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        {selectedplatform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.slug}
            onClick={() => setselectedplatformId(platform.id)}
          >
            {platform.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
