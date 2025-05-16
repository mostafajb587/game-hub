import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface props {
  children: string;
}
const ExpandedText = ({ children }: props) => {
  const [expanded, setExpanded] = useState(false);
  const maxchar = 300;
  const expandedText = expanded
    ? children
    : children.substring(0, maxchar) + "...";
  if (!children) return null;
  if (children.length <= maxchar) return <Text>{children}</Text>;
  return (
    <Text>
      {expandedText}
      <Button marginStart={6} onClick={() => setExpanded(!expanded)}>
        {expanded ? "show less" : "show more"}
      </Button>
    </Text>
  );
};

export default ExpandedText;
