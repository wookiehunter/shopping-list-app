import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "./src/infrastructure/theme";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyBUlQJhTi7v9gG7WOsosIF0jbMrIc3Vc7g",
  authDomain: "shoppinglist-xenos.firebaseapp.com",
  projectId: "shoppinglist-xenos",
  storageBucket: "shoppinglist-xenos.appspot.com",
  messagingSenderId: "940507744166",
  appId: "1:940507744166:web:3729f1a426443aca8b3167",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
