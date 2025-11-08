import { Button } from "./Products/Button/types";
import { GUIFactory } from "./Factories/type";
import { WindowsFactory } from "./Factories/windowsFactory";
import { MacFactory } from "./Factories/macFactory";
import { Checkbox } from "./Products/Checkbox/types";

/**
 * To COMPILE & RUN application:
 * - tsc .\application.ts --outDir Dist
 * - node .\Dist\application.js
 */

class Application {
  private factory: GUIFactory;
  private button!: Button;
  private checkbox!: Checkbox;

  constructor(osType: "win" | "mac") {
    if (osType === "win") {
      this.factory = new WindowsFactory();
    } else if (osType === "mac") {
      this.factory = new MacFactory();
    } else {
      throw new Error("Error! Unknown os type.");
    }

    this.createUI();
  }

  private createUI() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}

const macApplication = new Application("mac");
macApplication.paint();

const windowsApplication = new Application("win");
windowsApplication.paint();
