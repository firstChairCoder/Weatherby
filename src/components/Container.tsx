import React from "react";
import type { IScrollViewProps } from "native-base";
import { ScrollView } from "native-base";

import Header from "./Header";

const Container: React.FC<IScrollViewProps> = ({ children, ...rest }) => {
  return (
    <ScrollView
      flex="1"
      px="4"
      bg="gray.700"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      {...rest}
    >
      <Header safeArea />
      {children}
    </ScrollView>
  );
};

export default Container;
