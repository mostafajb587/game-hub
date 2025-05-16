import DynamicHeading from "@/components/DynamicHeading";
import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import PlatFormSelector from "@/components/PlatFormSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: `"1fr"`,
        lg: `"200px 1fr"`,
      }}
    >
      <GridItem area={"nav"}></GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={10}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <DynamicHeading></DynamicHeading>
        <HStack paddingBottom={3} paddingLeft={3}>
          <PlatFormSelector></PlatFormSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
