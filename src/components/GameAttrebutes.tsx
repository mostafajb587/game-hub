import { game } from "@/Entities/game";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import ItemDefenition from "./itemDefenition";

interface props {
  game: game;
}
const GameAttrebutes = ({ game }: props) => {
  return (
    <SimpleGrid columns={2}>
      <ItemDefenition item="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </ItemDefenition>
      <ItemDefenition item="MetaScore">
        <CriticScore score={game.metacritic} />
      </ItemDefenition>
      <ItemDefenition item="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </ItemDefenition>
      <ItemDefenition item="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </ItemDefenition>
      <Box boxSize={"md"}></Box>
    </SimpleGrid>
  );
};

export default GameAttrebutes;
