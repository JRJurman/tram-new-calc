import { registerHtml, TramOneComponent } from "tram-one";
import "./calc-display.css";

const html = registerHtml();

type calcDisplayProps = {
  values: string[];
};

const calcDisplay: TramOneComponent<calcDisplayProps> = ({ values }) => {
  // investigate why this is required, potentially look at the multiple console-logs :/
  const realValues = values.filter((value) => value !== undefined);
  const lastValue = realValues.at(-1);
  const lastValueIsNumber = !isNaN(parseFloat(lastValue || "0"));

  // determine what to display as the active value
  const active = lastValueIsNumber
    ? realValues.slice(-2)
    : realValues.slice(-1);

  // determine what to display as historical values
  const history = lastValueIsNumber
    ? realValues.slice(0, -2)
    : realValues.slice(0, -1);

  // determine what to display as the right-side evaluation
  const calculation = lastValueIsNumber
    ? realValues.join("")
    : realValues.slice(0, -1).join("");

  console.log({ realValues: [...realValues], lastValue, calculation });
  const value = eval(calculation);
  return html`<section class="calc-display">
    <span class="history">${history}</span>
    <span class="active">${active}</span>
    <span class="result">=${value}</span>
  </section>`;
};

export default calcDisplay;
