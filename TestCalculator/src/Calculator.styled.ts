import {StyleSheet} from "react-native";
import {theme} from "./theme";

export const CalculatorScreenStyled = StyleSheet.create({
    topContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 12,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: "black",
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: "black",
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})
