import React from "react";
import type { IButtonProps } from "native-base";
import { Button as NBButton, Text } from "native-base";

interface CustomButtonProps extends IButtonProps {
  label: string;
}

const Button = ({ label, ...rest }: CustomButtonProps) => {
  return (
    <NBButton colorScheme="dark" borderRadius="sm" {...rest}>
      <Text fontSize="2xl" textAlign="center">
        {label}
      </Text>
    </NBButton>
  );
};

export default Button;
