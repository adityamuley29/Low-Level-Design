import { Notification } from "../interface";

export class SmsNotification implements Notification {
  send(message: string): void {
    console.log("Sending sms notification: ", message);
  }
}
