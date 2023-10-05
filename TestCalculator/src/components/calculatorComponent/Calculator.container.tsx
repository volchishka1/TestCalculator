import React, { useState }  from 'react';
import {Text} from 'react-native';
import {CalculatorView} from "./Calculator.component";
import {CalculatorScreenStyled} from "./Calculator.styled";
import {theme} from "../../styles/theme";

export const CalculatorScreen = () => {

    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);
    const [isTruePlus, setIsTruePlus] = useState(false);
    const [isTrueMinus, setIsTrueMinus] = useState(false);
    const [isTrueMultiply, setIsTrueMultiply] = useState(false);
    const [isTrueDivide, setIsTrueDivide] = useState(false);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        } if (result! > 0) {
            handleClearPress();
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber(secondNumber);
    };

    const handleOperationPressPlus = (buttonValue: string) => {
        handleOperationPress(buttonValue);
        setIsTruePlus(true)
        setIsTrueMinus(false);
        setIsTrueDivide(false);
        setIsTrueMultiply(false);
    };

    const handleOperationPressMinus = (buttonValue: string) => {
        handleOperationPress(buttonValue);
        setIsTrueMinus(true);
        setIsTruePlus(false);
        setIsTrueDivide(false);
        setIsTrueMultiply(false);
    };

    const handleOperationPressMultiply = (buttonValue: string) => {
        handleOperationPress(buttonValue);
        setIsTrueMultiply(true);
        setIsTruePlus(false);
        setIsTrueMinus(false);
        setIsTrueDivide(false);
    };

    const handleOperationPressDivide = (buttonValue: string) => {
        handleOperationPress(buttonValue);
        setIsTrueDivide(true);
        setIsTruePlus(false);
        setIsTrueMinus(false);
        setIsTrueMultiply(false);
    };
    const handleClearPress = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
        setIsTruePlus(false);
        setIsTrueMinus(false);
        setIsTrueDivide(false);
        setIsTrueMultiply(false);
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return (
                <Text style={result < 99999
                    ? [CalculatorScreenStyled.screenFirstNumber, {color: theme.colors.whiteColor}]
                    : [CalculatorScreenStyled.screenFirstNumber, {fontSize: 50, color: theme.colors.whiteColor}]
                }>
                    {result?.toString()}
                </Text>
            );
        }
        if (firstNumber && firstNumber.length < 6) {
            return (
                <Text style={CalculatorScreenStyled.screenFirstNumber}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber === "") {
            return (
                <Text style={CalculatorScreenStyled.screenFirstNumber}>
                    {"0"}
                </Text>
            );
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[CalculatorScreenStyled.screenFirstNumber, {fontSize: 70}]}>
                    {firstNumber}
                </Text>
            );
        }
        if(firstNumber.length > 7) {
            return (
                <Text style={[CalculatorScreenStyled.screenFirstNumber, {fontSize: 50}]}>
                    {firstNumber}
                </Text>
            );
        }
    };

    const getResult = () => {
        switch (operation) {
            case "+":
                handleClearPress();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                handleClearPress();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                handleClearPress();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                handleClearPress();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                handleClearPress();
                setResult(0);
                break;
        }};

    return (
        <CalculatorView
            isTruePlus={isTruePlus}
            isTrueMinus={isTrueMinus}
            isTrueDivide={isTrueDivide}
            isTrueMultiply={isTrueMultiply}
            firstNumber={firstNumber}
            setFirstNumber={setFirstNumber}
            secondNumber={secondNumber}
            operation={operation}
            getResult={getResult}
            handleNumberPress={handleNumberPress}
            handleOperationPress={handleOperationPress}
            handleOperationPressPlus={handleOperationPressPlus}
            handleOperationPressMinus={handleOperationPressMinus}
            handleOperationPressMultiply={handleOperationPressMultiply}
            handleOperationPressDivide={handleOperationPressDivide}
            handleClearPress={handleClearPress}
            firstNumberDisplay={firstNumberDisplay}
        />
    )
}
