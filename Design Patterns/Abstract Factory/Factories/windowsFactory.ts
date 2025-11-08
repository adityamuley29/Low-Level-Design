import { Button } from "../Products/Button/types";
import { WindowsButton } from "../Products/Button/WindowsButton";
import { Checkbox } from "../Products/Checkbox/types";
import { WindowsCheckbox } from "../Products/Checkbox/windowsCheckbox";
import { GUIFactory } from "./type";

export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}
