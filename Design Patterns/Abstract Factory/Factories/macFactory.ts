import { MacButton } from "../Products/Button/MacButton";
import { Button } from "../Products/Button/types";
import { MacCheckbox } from "../Products/Checkbox/macCheckbox";
import { Checkbox } from "../Products/Checkbox/types";
import { GUIFactory } from "./type";

export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
