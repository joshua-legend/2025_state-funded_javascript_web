import { elements } from "./elements.js";
import { handlerInputEvent } from "./handler.js";

elements.input.addEventListener("input", (e) => handlerInputEvent(e));
