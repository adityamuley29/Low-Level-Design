import { Notification } from "../interface";

export abstract class NotificationCreator {
  // Factory Method
  abstract createNotification(): Notification;

  // Common logic using the factory method
  send(message: string) {
    // this notification will have send() bec it will return Notification product
    const notification = this.createNotification();
    notification.send(message);
  }
}
