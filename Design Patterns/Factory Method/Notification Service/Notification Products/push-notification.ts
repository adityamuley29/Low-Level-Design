import { Notification } from "../interface";

export class PushNotification implements Notification {
  send(message: string): void {
    console.log("Sending push notification: ", message);
  }
}
