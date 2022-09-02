import { registerHtml, TramOneComponent, useEffect } from "tram-one";
import calcDisplay from "./calc-display";
import calcInput from "./calc-input";
import "./app.css";
import { useCalculatorStore } from "./useCalculatorStore";

const html = registerHtml({
  "calc-display": calcDisplay,
  "calc-input": calcInput,
});

const app: TramOneComponent = () => {
  const {
    calculatorStore,
    addDigitToStore,
    addDecimalPoint,
    addOperatorToStore,
    deleteLastKey,
  } = useCalculatorStore();

  useEffect(() => {
    const handleKeyboardInput = (keyEvent: KeyboardEvent) => {
      console.log(keyEvent.key);
      if (keyEvent.key.match(/\d/)) {
        addDigitToStore(keyEvent.key);
      }
      if (keyEvent.key === ".") {
        addDecimalPoint();
      }
      if (keyEvent.key.match(/[\+\-\/\*]/)) {
        addOperatorToStore(keyEvent.key);
      }
      if (keyEvent.key === "Backspace") {
        deleteLastKey();
      }
    };
    console.log("attach event listener");
    window.addEventListener("keydown", handleKeyboardInput);
    return () => window.removeEventListener("keydown", handleKeyboardInput);
  });

  return html`
    <main class="app">
      <calc-display values=${calculatorStore} />
      <calc-input />
    </main>
  `;
};

export default app;
