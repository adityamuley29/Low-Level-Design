import { Checkbox } from "./types";

export class MacCheckbox implements Checkbox {
  paint(): void {
    console.log("Painting MacOS style Checkbox");
  }
}
