

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {CalculatorScreen} from "./src/Calculator.container";


export const App = () => {

  return (
    <SafeAreaView>
      <View style={styles.backgroundColor}>
        <CalculatorScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    // flexDirection: "row",
    alignItems: "flex-end"
  },
});

