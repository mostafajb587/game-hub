import { game } from "@/Entities/game";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Box,
  Badge,
} from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatFormIcons from "./PlatFormIcons";
import CropedBackgroundImage from "@/services/CropedBackgroundImage";
import { Link } from "react-router-dom";

interface props {
  Game: game;
}

const GameCard = ({ Game }: props) => {
  return (
    <Card
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
        boxShadow: "xl",
      }}
      transition="all .2s ease-in"
      height="100%"
      position="relative"
    >
      <Image
        src={CropedBackgroundImage(Game.background_image)}
        alt={Game.name}
        objectFit="cover"
        height="200px"
        width="100%"
      />

      <Box position="absolute" top="2" right="2">
        <CriticScore score={Game.metacritic} />
      </Box>

      <CardBody p={4}>
        <HStack justifyContent="space-between" mb={2}>
          <PlatFormIcons
            views={Game.parent_platforms.map(
              (platform) => platform.platform.slug
            )}
          />
        </HStack>

        <Heading as="h3" size="md" mb={2} noOfLines={1}>
          <Link to={"/games/" + Game.slug}>{Game.name}</Link>
        </Heading>

        {Game.genres?.length > 0 && (
          <HStack spacing={2} mt={3} flexWrap="wrap">
            {Game.genres.slice(0, 3).map((genre) => (
              <Badge
                key={genre.id}
                colorScheme="purple"
                variant="subtle"
                borderRadius="full"
                px={2}
                py={1}
              >
                {genre.name}
              </Badge>
            ))}
          </HStack>
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
