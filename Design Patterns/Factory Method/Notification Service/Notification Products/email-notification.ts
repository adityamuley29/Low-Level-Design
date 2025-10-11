import { Notification } from "../interface";

export class EmailNotification implements Notification {
  send(message: string): void {
    console.log("Sending email notification: ", message);
  }
}
