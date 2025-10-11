import { Notification } from "../interface";

export class SlackNotification implements Notification {
  send(message: string): void {
    console.log("Sending slack notification: ", message);
  }
}
