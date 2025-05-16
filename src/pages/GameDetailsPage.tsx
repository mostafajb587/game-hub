import ExpandedText from "@/components/ExpandedText";
import GameAttrebutes from "@/components/GameAttrebutes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandedText children={game.description_raw}></ExpandedText>
        <GameAttrebutes game={game}></GameAttrebutes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} key={game.id}></GameTrailer>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
