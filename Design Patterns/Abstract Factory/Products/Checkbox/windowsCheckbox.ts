import { Checkbox } from "./types";

export class WindowsCheckbox implements Checkbox {
  paint(): void {
    console.log("Painting MacOS style Checkbox");
  }
}
