import useImage from "@/hooks/useImage";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: props) => {
  const { data, isLoading, error } = useImage(gameId);
  if (isLoading) return null;
  if (error) return null;
  console.log(data);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((im) => (
        <Image key={im.id} src={im.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
