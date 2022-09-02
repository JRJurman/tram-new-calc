import { registerHtml, TramOneComponent } from "tram-one";
import "./calc-input.css";

const html = registerHtml();

const calcInput: TramOneComponent = () => {
  // need to make these buttons send events to the window
  return html`<section class="calc-input">
    <button class="clear">C</button>
    <button class="undo">U</button>
    <button class="one">1</button>
    <button class="two">2</button>
    <button class="three">3</button>
    <button class="four">4</button>
    <button class="five">5</button>
    <button class="six">6</button>
    <button class="seven">7</button>
    <button class="eight">8</button>
    <button class="nine">9</button>
    <button class="zero">0</button>
    <button class="point">.</button>
    <button class="add">+</button>
    <button class="minus">-</button>
    <button class="divide">/</button>
    <button class="multiply">*</button>
  </section>`;
};

export default calcInput;
