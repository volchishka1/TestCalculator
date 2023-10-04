import {StyleSheet} from "react-native";
import {theme} from "./theme";

export const CalculatorScreenStyled = StyleSheet.create({
    topContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        marginTop: 12,
    },
    textColor: {
        color: "white",
    },
    screenFirstNumber: {
        fontSize: 96,
        color: theme.colors.whiteColor,
        fontWeight: '200',
        alignItems: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: theme.colors.whiteColor,
        fontWeight: '200',
        alignItems: "flex-end",
    },
})
