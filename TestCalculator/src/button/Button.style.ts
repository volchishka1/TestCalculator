import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {theme} from "../styles/theme";

export type ButtonStyles = {
    buttonTextWhite: TextStyle;
    buttonTextOrange: TextStyle;
    buttonTextDarkGrey: TextStyle;
    buttonStyleWhite: ViewStyle;
    buttonStyleOrange: ViewStyle;
    buttonStyleGrey: ViewStyle;
    buttonStyleDarkGrey: ViewStyle;
};

export const buttonStyle = StyleSheet.create<ButtonStyles>({
    buttonTextWhite: {
        fontWeight: "600",
        textAlign: "center",
        marginTop: 22,
        fontSize: 30,
        color: theme.colors.whiteColor,
    },
    buttonTextOrange: {
        fontWeight: "600",
        textAlign: "center",
        marginTop: 22,
        fontSize: 30,
        color: theme.colors.orangeColor,
    },
    buttonTextDarkGrey: {
        fontWeight: "600",
        textAlign: "center",
        marginTop: 22,
        fontSize: 30,
        color: theme.colors.darkGreyColor,
    },
    buttonStyleOrange: {
        width: 80,
        height: 80,
        backgroundColor: theme.colors.orangeColor,
        borderRadius: 40,
    },
    buttonStyleWhite: {
        width: 80,
        height: 80,
        backgroundColor: theme.colors.whiteColor,
        borderRadius: 40,
    },
    buttonStyleGrey: {
        width: 80,
        height: 80,
        backgroundColor: theme.colors.greyColor,
        borderRadius: 40,
    },
    buttonStyleDarkGrey: {
        width: 80,
        height: 80,
        backgroundColor: theme.colors.darkGreyColor,
        borderRadius: 40,
    },
})
