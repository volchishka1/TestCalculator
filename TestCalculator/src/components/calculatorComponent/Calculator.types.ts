export type CalculatorViewProps = {
    firstNumber?: string;
    secondNumber?: string;
    operation?: string;
    isTruePlus?: boolean;
    isTrueMinus?: boolean;
    isTrueMultiply?: boolean;
    isTrueDivide?: boolean;
    setFirstNumber?: (arg: string) => void;
    getResult?: () => void;
    handleNumberPress?: (arg: string) => void;
    handleOperationPress?:(arg: string) => void;
    handleOperationPressPlus?:(arg: string) => void;
    handleOperationPressMinus?:(arg: string) => void;
    handleOperationPressMultiply?:(arg: string) => void;
    handleOperationPressDivide?:(arg: string) => void;
    handleClearPress?: () => void;
    firstNumberDisplay?: () => void;
}
