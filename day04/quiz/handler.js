import { elements } from "./elements.js";
import { validateLength, validateSepcial } from "./validator.js";

export const handlerInputEvent = (e) => {
  const { value } = e.target;
  const isLengthValid = validateLength(value);
  const isSpecialValid = validateSepcial(value);
  const validation = [
    { element: elements.charLength, valid: isLengthValid },
    { element: elements.special, valid: isSpecialValid },
    { element: elements.checkButton, valid: isLengthValid && isSpecialValid },
  ];
  validation.forEach((v) => changeLight(v.element, v.valid));
};
