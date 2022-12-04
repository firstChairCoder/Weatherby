import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { IBoxProps } from "native-base";
import { Flex, Icon, Box, Text } from "native-base";
import React from "react";

import BasicLoader from "./BasicLoader";

interface InfoCardProps extends IBoxProps {
  label: string;
  iconName: string;
  isLoading?: boolean;
  lines: string[];
}

export const InfoCard = ({
  label,
  iconName,
  isLoading = false,
  lines,
  ...rest
}: InfoCardProps) => {
  return (
    <Box {...rest}>
      <Text color="trueGray.50" fontWeight="bold" fontSize="lg">
        {label}
      </Text>

      <BasicLoader align="center" isLoading={isLoading}>
        <Icon
          as={MaterialCommunityIcons}
          name={iconName}
          color="primary.500"
          size="xl"
          mr="4"
        />

        <Flex flex="1">
          {lines.map((line) => (
            <Text key={line} color="trueGray.50" fontSize="md">
              {line}
            </Text>
          ))}
        </Flex>
      </BasicLoader>
    </Box>
  );
};
