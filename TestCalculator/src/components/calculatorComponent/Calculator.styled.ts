import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {theme} from "../../styles/theme";

export type CalculatorScreenStyled = {
    calculatorContainer: ViewStyle;
    topContainer: ViewStyle;
    screenFirstNumber: TextStyle;
    screenSecondNumber: TextStyle;
    operator: TextStyle;
    input: TextStyle;

}

export const CalculatorScreenStyled = StyleSheet.create<CalculatorScreenStyled>({
    calculatorContainer: {
        position: "absolute",
        bottom: 10,
        width: "90%",
    },
    topContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 12,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: theme.colors.whiteColor,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: theme.colors.whiteColor,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    operator: {
        color: theme.colors.whiteColor,
        fontSize: 50,
        fontWeight: "500",
    },
    input: {
        height: 120,
        width: "95%",
        justifyContent: "flex-end",
        alignSelf: "center",
    },
})
