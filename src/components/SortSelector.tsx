import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const setorder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setselectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectors = [
    { value: "", label: "Revelence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentiem = selectors.find((item) => item.value === setorder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown></BsChevronBarDown>}>
        order by : {currentiem?.label || "Revelence"}
      </MenuButton>
      <MenuList>
        {selectors.map((item) => (
          <MenuItem
            onClick={() => setselectedSortOrder(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
