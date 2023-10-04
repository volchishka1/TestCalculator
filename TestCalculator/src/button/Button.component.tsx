import React, {FC} from 'react';
import {TouchableOpacity, Text, TextProps, TouchableOpacityProps} from 'react-native'
import {buttonStyle} from "./Button.style";
import {theme} from "../theme";

export type CustomButtonProps = {
    buttonText: string;
    onPress: () => void;
    isOrange?: boolean;
    isGrey?: boolean;
    isDarkGrey?: boolean;
}

export const ButtonComponent: FC<CustomButtonProps> = (props) => {
    const {buttonText, isOrange, isGrey, onPress, isDarkGrey} = props;

    return (
        <TouchableOpacity
            style={
                isGrey
                ? buttonStyle.buttonStyleGrey
                : isOrange
                ? buttonStyle.buttonStyleOrange
                : buttonStyle.buttonStyleDarkGrey
            }
            onPress={onPress}
        >
            <Text style={
                    isDarkGrey || isOrange
                    ? buttonStyle.buttonTextWhite
                    : buttonStyle.buttonTextDarkGrey
            }>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}
