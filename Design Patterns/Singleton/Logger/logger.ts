export class Logger {
  // holds single instance of logger class
  private static instance: Logger;

  // make constructor private, so any one cant create object out of it
  private constructor() {}

  public static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public info(message: string): void {
    console.log(`[INFO]: ${message}`);
  }

  public error(message: string): void {
    console.log(`[ERROR]: ${message}`);
  }
}
