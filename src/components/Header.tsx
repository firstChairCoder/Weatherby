import React from "react";
import type { IFlexProps } from "native-base";
import { Heading, useColorMode, Flex } from "native-base";

// export const HEADER_TEST_ID = "header";

const Header = (props: IFlexProps) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      //   testID={HEADER_TEST_ID}
      justify="center"
      align="center"
      height="56"
      shadow={1}
      {...props}
    >
      <Flex direction="row">
        <Heading
          size="3xl"
          p={4}
          color={colorMode === "dark" ? "gray.100" : "trueGray.700"}
        >
          Weatherly
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
