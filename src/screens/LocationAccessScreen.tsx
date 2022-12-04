import { Flex, Icon, Text, useToast } from "native-base";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PermissionStatus, useForegroundPermissions } from "expo-location";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "../components/Container";
import Button from "../components/Button";
import { Route } from "../typings";
import type { RootStackParamList } from "../typings";

export const GRANTED_TOAST_ID = "location_access_granted";
export const DENIED_TOAST_ID = "location_access_denied";

// interface LocationScreenProps {}

const LocationScreen = ({
  navigation
}: NativeStackScreenProps<RootStackParamList, Route.LOCATION_ACCESS>) => {
  const inset = useSafeAreaInsets();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [status, requestPermission] = useForegroundPermissions();

  function displayStatusToast(permissionStatus?: PermissionStatus) {
    if (
      permissionStatus === PermissionStatus.DENIED &&
      !toast.isActive(DENIED_TOAST_ID)
    ) {
      toast.show({
        id: DENIED_TOAST_ID,
        title: "An error occured",
        description: "Permission request has been denied",
        placement: "top",
        variant: "subtle"
      });
      return;
    }

    if (
      permissionStatus === PermissionStatus.GRANTED &&
      !toast.isActive(GRANTED_TOAST_ID)
    ) {
      toast.show({
        id: GRANTED_TOAST_ID,
        title: "Permission granted!",
        placement: "top",
        variant: "solid"
      });
    }
  }

  async function onPressAllowPermission() {
    setIsLoading(true);

    const currentStatus = await requestPermission();

    displayStatusToast(currentStatus?.status);

    setIsLoading(false);
  }

  useEffect(() => {
    if (status?.granted) {
      navigation.navigate(Route.WEATHER_DETAILS);
    }
  }, [navigation, status]);

  return (
    <Container>
      <Flex align="center" my="auto">
        <Icon
          as={MaterialCommunityIcons}
          name="alert"
          color="warning.500"
          size="16"
          mb="4"
        />
        <Text fontSize="2xl" textAlign="center">
          We require permission to access your current location
        </Text>
      </Flex>

      <Button
        label="Allow"
        mb={inset.top * 1.5}
        onPress={onPressAllowPermission}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default LocationScreen;
