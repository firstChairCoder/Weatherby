import React from "react";
import type { IFlexProps } from "native-base";
import { Flex, Text } from "native-base";

// export const HEADER_TEST_ID = "header";

const Header = (props: IFlexProps) => {
  return (
    <Flex
      //   testID={HEADER_TEST_ID}
      justify="center"
      align="center"
      height="56"
      {...props}
    >
      <Flex direction="row">
        <Text fontSize="4xl" color="primary.500" fontWeight="bold">
          Weatherly
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
