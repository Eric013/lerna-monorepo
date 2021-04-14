import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    let customFontsFromGoogle = {
      Poppins_700Bold: require("@expo-google-fonts/poppins").Poppins_700Bold,
      Poppins_600SemiBold: require("@expo-google-fonts/poppins")
        .Poppins_600SemiBold,
      Poppins_400Regular: require("@expo-google-fonts/poppins")
        .Poppins_400Regular,
    };

    async function loadFonts() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...customFontsFromGoogle,
          // "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          "DelaGothicOne-Regular": require("./assets/fonts/DelaGothicOne-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadFonts();
  }, []);

  if (!isLoadingComplete) {
    return <Text>Chargement des fonts</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Test simple
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 20,
        }}
      >
        Test simple
      </Text>
      <Text
        style={{
          fontFamily: "DelaGothicOne-Regular",
          fontSize: 20,
        }}
      >
        Test simple
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
