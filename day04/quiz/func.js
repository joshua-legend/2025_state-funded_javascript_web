import { STYLE } from "./theme.js";

export const changeLight = (target, bool) => {
  target.style.setProperty("color", bool ? STYLE.TEXT.COLOR.VALID : STYLE.TEXT.COLOR.NOTVALID);
};
