import { Button } from "../Products/Button/types";
import { Checkbox } from "../Products/Checkbox/types";

export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
