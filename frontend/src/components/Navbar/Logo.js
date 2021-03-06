import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="3xl" fontWeight="bold">
        Qurbit
      </Text>
    </Box>
  );
}
