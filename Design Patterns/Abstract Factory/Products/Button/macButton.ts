import { Button } from "./types";

export class MacButton implements Button {
  paint(): void {
    console.log("Painting MacOS style button");
  }
}
