import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useFonts, OpenSans_400Regular, OpenSans_700Bold} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import Routes from "./src/Routes";

export default function App() {
  let [fontsloaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsloaded) {
    return <AppLoading />
  }
  return (
      <View style={styles.container}>
        <Routes />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
