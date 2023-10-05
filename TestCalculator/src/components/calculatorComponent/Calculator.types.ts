export type CalculatorViewProps = {
    firstNumber?: string;
    secondNumber?: string;
    operation?: string;
    setFirstNumber?: (arg: string) => void;
    getResult?: () => void;
    handleNumberPress?: (arg: string) => void;
    handleOperationPress?:(arg: string) => void;
    handleClearPress?: () => void;
    firstNumberDisplay?: () => void;
}
