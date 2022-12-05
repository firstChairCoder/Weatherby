//single refresh usage only
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";

const FloatingActionButton = ({ ...rest }) => {
  return (
    <IconButton
      w="16"
      h="16"
      right="8"
      bottom="8"
      bg="primary.500"
      position="absolute"
      borderRadius="48px"
      alignItems="center"
      justifyContent="center"
      icon={
        <Icon
          color="gray.300"
          as={MaterialCommunityIcons}
          name={"refresh"}
          size={10}
        />
      }
      {...rest}
    />
  );
};

export default FloatingActionButton;
