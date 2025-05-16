import usegenrels from "@/hooks/usegenrels";
import usePlatforms from "@/hooks/useplatforms";
import useGameQueryStore from "@/store";
import { Box, Heading } from "@chakra-ui/react";

const DynamicHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.gerneId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genre = usegenrels(genreId);
  const platform = usePlatforms(platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Box padding={5}>
      <Heading as={"h1"}>{heading}</Heading>
    </Box>
  );
};

export default DynamicHeading;
