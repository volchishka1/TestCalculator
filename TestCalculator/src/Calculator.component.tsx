import React, { useState } from "react";
import {Text, View} from 'react-native';
import {ButtonComponent} from "./button/Button.component";
import {CalculatorScreenStyled} from "./Calculator.styled";

export const CalculatorView = () => {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("")
    };

    const handleClearPress = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
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

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [CalculatorScreenStyled.screenFirstNumber] : [CalculatorScreenStyled.screenFirstNumber, {fontSize: 50}]}>{result?.toString()}</Text>
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={CalculatorScreenStyled.screenFirstNumber}>{firstNumber}</Text>
        }
        if (firstNumber === "") {
            return <Text style={CalculatorScreenStyled.screenFirstNumber}>{"0"}</Text>
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[CalculatorScreenStyled.screenFirstNumber, {fontSize: 70}]}>{firstNumber}</Text>
            );
        }
        if(firstNumber.length > 7) {
            return (
                <Text style={[CalculatorScreenStyled.screenFirstNumber, {fontSize: 50}]}>{firstNumber}</Text>
            );
        }
        };

    };

    return (
        <View style={{position: "absolute", bottom: 0}}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <Text style={CalculatorScreenStyled.screenSecondNumber}>{secondNumber}</Text>
                {firstNumberDisplay()}
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText="AC" isGrey onPress={handleClearPress} />
                <ButtonComponent buttonText="+/-" isGrey onPress={() => handleOperationPress("+/-")} />
                <ButtonComponent buttonText="%" isGrey onPress={() => handleOperationPress("+/-")} />
                <ButtonComponent buttonText="÷" isOrange onPress={() => handleOperationPress("+/-")} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText="7" isDarkGrey onPress={() => handleNumberPress("7")} />
                <ButtonComponent buttonText="8" isDarkGrey onPress={() => handleNumberPress("8")} />
                <ButtonComponent buttonText="9" isDarkGrey onPress={() => handleNumberPress("9")} />
                <ButtonComponent buttonText="×" isOrange onPress={() => handleOperationPress("*")} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText="4" isDarkGrey onPress={() => handleNumberPress("4")} />
                <ButtonComponent buttonText="5" isDarkGrey onPress={() => handleNumberPress("5")} />
                <ButtonComponent buttonText="6" isDarkGrey onPress={() => handleNumberPress("6")} />
                <ButtonComponent buttonText="-" isOrange onPress={() => handleOperationPress("-")} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText="1" isDarkGrey onPress={() => handleNumberPress("1")} />
                <ButtonComponent buttonText="2" isDarkGrey onPress={() => handleNumberPress("2")} />
                <ButtonComponent buttonText="3" isDarkGrey onPress={() => handleNumberPress("3")} />
                <ButtonComponent buttonText="+" isOrange onPress={() => handleOperationPress("+")} />
            </View>
            <View style={CalculatorScreenStyled.topContainer}>
                <ButtonComponent buttonText="0" isDarkGrey onPress={() => handleNumberPress("0")} />
                <ButtonComponent buttonText="." isDarkGrey onPress={() => handleNumberPress(".")} />
                <ButtonComponent buttonText="⌫" isDarkGrey onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <ButtonComponent buttonText="=" isOrange  onPress={() => getResult()} />
            </View>
        </View>
    )
}
