import React from "react";
import type { IFlexProps } from "native-base";
import { Flex, Skeleton } from "native-base";

export type CardProps = IFlexProps & {
  isLoading?: boolean;
};

const BasicLoader = ({ children, isLoading = false, ...rest }: CardProps) => {
  return (
    <Skeleton borderRadius="md" isLoaded={!isLoading}>
      <Skeleton.Text px="4" isLoaded={!isLoading} />
      <Flex direction="row" borderRadius="sm" bg="trueGray.700" p="8" {...rest}>
        {children}
      </Flex>
    </Skeleton>
  );
};

export default BasicLoader;
