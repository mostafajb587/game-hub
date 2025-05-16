import useGenres from "@/hooks/useGernels";
import CropedBackgroundImage from "@/services/CropedBackgroundImage";
import useGameQueryStore from "@/store";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.gameQuery.gerneId);
  const setselectedgemreid = useGameQueryStore((s) => s.setGenreId);
  if (error) return;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data?.results.map((gerne) => (
        <ListItem key={gerne.id} paddingY={5}>
          <HStack>
            <Image
              src={CropedBackgroundImage(gerne.image_background)}
              boxSize="50px"
              borderRadius={10}
            ></Image>
            <Button
              onClick={() => setselectedgemreid(gerne.id)}
              as={Link}
              fontSize="30px"
              fontWeight={setGenreId === gerne.id ? "bold" : "normal"}
            >
              {gerne.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
