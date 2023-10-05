import React, { useState }  from 'react';
import {Text} from 'react-native';
import {CalculatorView} from "./Calculator.component";
import {CalculatorScreenStyled} from "./Calculator.styled";

export const CalculatorScreen = () => {

    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);

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
        setFirstNumber("");
    };

    const handleClearPress = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return (
                <Text style={result < 99999
                    ? [CalculatorScreenStyled.screenFirstNumber, {color: "black"}]
                    : [CalculatorScreenStyled.screenFirstNumber, {fontSize: 50, color: "black"}]
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
            firstNumber={firstNumber}
            setFirstNumber={setFirstNumber}
            secondNumber={secondNumber}
            operation={operation}
            getResult={getResult}
            handleNumberPress={handleNumberPress}
            handleOperationPress={handleOperationPress}
            handleClearPress={handleClearPress}
            firstNumberDisplay={firstNumberDisplay}
        />
    )
}
