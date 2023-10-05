import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native'
import {buttonStyle} from "./Button.style";

export type CustomButtonProps = {
    buttonText: string;
    onPress: () => void;
    isOrange?: boolean;
    isGrey?: boolean;
    isDarkGrey?: boolean;
    isTruePlus?: boolean;
    isTrueMinus?: boolean;
    isTrueDivide?: boolean;
    isTrueMultiply?: boolean;

}

export const ButtonComponent: FC<CustomButtonProps> = (props) => {
    const {buttonText, isOrange, isGrey, onPress, isDarkGrey, isTruePlus, isTrueMinus, isTrueMultiply, isTrueDivide} = props;

    return (
        <TouchableOpacity
            style={
                    isTruePlus || isTrueMinus || isTrueDivide || isTrueMultiply
                    ? buttonStyle.buttonStyleWhite
                    : isGrey
                    ? buttonStyle.buttonStyleGrey
                    : isOrange
                    ? buttonStyle.buttonStyleOrange
                    : buttonStyle.buttonStyleDarkGrey
            }
            onPress={onPress}
        >
            <Text style={
                    isTruePlus || isTrueMinus || isTrueDivide || isTrueMultiply
                    ? buttonStyle.buttonTextOrange
                    : isDarkGrey || isOrange
                    ? buttonStyle.buttonTextWhite
                    : buttonStyle.buttonTextDarkGrey
            }>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}
