import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {CalculatorScreen} from "./src/components/calculatorComponent/Calculator.container";
import {theme} from "./src/styles/theme";


export const App = () => {

  return (
    <SafeAreaView style={styles.safeAreaBackground}>
      <View style={styles.backgroundColor}>
        <CalculatorScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: theme.colors.blackColor,
    height: "100%",
    alignItems: "center",
  },
  safeAreaBackground: {
    backgroundColor: theme.colors.blackColor,
  }

});

