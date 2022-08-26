import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from './src/infrastructure/theme';

const IntroText = styled(Text)`
	color: ${(props) => props.theme.colors.brand.primary};
	font-size: ${(props) => props.theme.fontSizes.h3};
  text-align: center;
`;

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<View style={styles.container}>
					<IntroText>Never lose your shopping list again...</IntroText>
				</View>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
