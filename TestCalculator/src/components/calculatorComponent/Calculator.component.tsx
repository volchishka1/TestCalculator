import React, {FC} from "react";
import {Text, View} from 'react-native';
import {ButtonComponent} from "../../button/Button.component";
import {CalculatorScreenStyled} from "./Calculator.styled";
import {CalculatorViewProps} from "./Calculator.types";
import {
    AC,
    DELETE_NUMBER,
    DIVIDE,
    DIVIDED,
    DOT,
    EQUAL,
    MINUS,
    MULTIPLIES,
    MULTIPLY,
    NUMBER_EIGHT,
    NUMBER_FIVE,
    NUMBER_FOUR,
    NUMBER_NINE,
    NUMBER_ONE, NUMBER_SEVEN,
    NUMBER_SIX,
    NUMBER_THREE,
    NUMBER_TWO, NUMBER_ZERO, PERCENT, PLUS,
    PLUS_MINUS
} from "../../constants/globalText";

export const CalculatorView: FC<CalculatorViewProps> = (props) => {
    const {
        firstNumber = "",
        setFirstNumber = () => {},
        secondNumber = "",
        operation = "",
        isTruePlus = false,
        isTrueMinus = false,
        isTrueDivide = false,
        isTrueMultiply = false,
        getResult = () => {},
        handleNumberPress = () => {},
        handleOperationPress = () => {},
        handleOperationPressPlus = () => {},
        handleOperationPressMinus = () => {},
        handleOperationPressDivide = () => {},
        handleOperationPressMultiply = () => {},
        handleClearPress = () => {},
        firstNumberDisplay = () => {},
    } = props;

    return (
        <View style={CalculatorScreenStyled.calculatorContainer}>
            <View style={CalculatorScreenStyled.input}>
                <Text style={CalculatorScreenStyled.screenSecondNumber}>
                    {secondNumber}
                    <Text style={CalculatorScreenStyled.operator}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText={AC} isGrey onPress={handleClearPress} />
                <ButtonComponent buttonText={PLUS_MINUS} isGrey onPress={() => handleOperationPress(PLUS_MINUS)} />
                <ButtonComponent buttonText={PERCENT} isGrey onPress={() => handleOperationPress(PERCENT)} />
                <ButtonComponent buttonText={DIVIDE} isTrueDivide={isTrueDivide} isOrange onPress={() => handleOperationPressDivide(DIVIDED)} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText={NUMBER_SEVEN} isDarkGrey onPress={() => handleNumberPress(NUMBER_SEVEN)} />
                <ButtonComponent buttonText={NUMBER_EIGHT} isDarkGrey onPress={() => handleNumberPress(NUMBER_EIGHT)} />
                <ButtonComponent buttonText={NUMBER_NINE} isDarkGrey onPress={() => handleNumberPress(NUMBER_NINE)} />
                <ButtonComponent buttonText={MULTIPLY} isTrueMultiply={isTrueMultiply} isOrange onPress={() => handleOperationPressMultiply(MULTIPLIES)} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText={NUMBER_FOUR} isDarkGrey onPress={() => handleNumberPress(NUMBER_FOUR)} />
                <ButtonComponent buttonText={NUMBER_FIVE} isDarkGrey onPress={() => handleNumberPress(NUMBER_FIVE)} />
                <ButtonComponent buttonText={NUMBER_SIX} isDarkGrey onPress={() => handleNumberPress(NUMBER_SIX)} />
                <ButtonComponent buttonText={MINUS} isTrueMinus={isTrueMinus} isOrange onPress={() => handleOperationPressMinus(MINUS)} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText={NUMBER_ONE} isDarkGrey onPress={() => handleNumberPress(NUMBER_ONE)} />
                <ButtonComponent buttonText={NUMBER_TWO} isDarkGrey onPress={() => handleNumberPress(NUMBER_TWO)} />
                <ButtonComponent buttonText={NUMBER_THREE} isDarkGrey onPress={() => handleNumberPress(NUMBER_THREE)} />
                <ButtonComponent buttonText={PLUS} isTruePlus={isTruePlus} isOrange onPress={() => handleOperationPressPlus(PLUS)} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText={NUMBER_ZERO} isDarkGrey onPress={() => handleNumberPress(NUMBER_ZERO)} />
                <ButtonComponent buttonText={DOT} isDarkGrey onPress={() => handleNumberPress(DOT)} />
                <ButtonComponent buttonText={DELETE_NUMBER} isDarkGrey onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <ButtonComponent buttonText={EQUAL} isOrange  onPress={() => getResult()} />
            </View>
        </View>
    )
}
