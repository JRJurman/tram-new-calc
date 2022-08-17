import { useStore } from "tram-one";

export const useCalculatorStore = () => {
  const calculatorStore = useStore(["200", "+"]);

  // function to handle a digit being pressed
  const addDigitToStore = (newDigit) => {
    const lastValue = calculatorStore.at(-1);
    const lastValueIsNumber = !isNaN(parseFloat(lastValue || "0"));
    // if the last value is not a number, push the digit as the start of a new number
    if (!lastValueIsNumber) {
      calculatorStore.push(newDigit);
    } else {
      // if the last value is a number, push the digit on the end of the last number
      calculatorStore[calculatorStore.length - 1] += newDigit;
    }
  };

  const addDecimalPoint = () => {
    const lastValue = calculatorStore.at(-1);
    if (lastValue?.match(/\./)) {
      // if we already have a decimal in our last value, don't process this one
      return;
    }
    const lastValueIsNumber = !isNaN(parseFloat(lastValue || "0"));
    // if the last value is not a number, start a decimal value with "0."
    if (!lastValueIsNumber) {
      calculatorStore.push("0.");
    } else {
      // otherwise add the "." to the existing number
      calculatorStore[calculatorStore.length - 1] += ".";
    }
  };

  // function to handle an operator being pressed
  const addOperatorToStore = (newOperator) => {
    calculatorStore.push(newOperator);
  };

  return {
    calculatorStore,
    addDigitToStore,
    addOperatorToStore,
    addDecimalPoint,
  };
};
