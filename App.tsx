import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainRoutes from "./src/navigation";
import AppProviders from "./src/components/AppProvider";

export default function App() {
  const [isFontsLoaded] = useFonts({
    MontserratLight: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppProviders>
        <MainRoutes />
        <StatusBar style="inverted" />
      </AppProviders>
    </SafeAreaProvider>
  );
}
