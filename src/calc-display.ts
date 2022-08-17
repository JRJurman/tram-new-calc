import { registerHtml, TramOneComponent } from "tram-one";
import "./calc-display.css";

const html = registerHtml();

type calcDisplayProps = {
  values: string[];
};

const calcDisplay: TramOneComponent<calcDisplayProps> = ({ values }) => {
  const lastValueIsNumber = !isNaN(parseFloat(values.at(-1) || "0"));
  const active = lastValueIsNumber ? values.slice(-2) : values.slice(-1);
  const history = lastValueIsNumber ? values.slice(0, -2) : values.slice(0, -1);
  const value = lastValueIsNumber
    ? eval(values.join(""))
    : eval(values.slice(0, -1).join(""));
  return html`<section class="calc-display">
    <span class="history">${history}</span>
    <span class="active">${active}</span>
    <span class="result">=${value}</span>
  </section>`;
};

export default calcDisplay;
