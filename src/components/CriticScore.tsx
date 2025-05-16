import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}
const CriticScore = ({ score }: props) => {
  let color = score > 90 ? "green" : score > 60 ? "yellow" : undefined;
  return (
    <Badge borderRadius={5} paddingX={3} fontSize={20} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
