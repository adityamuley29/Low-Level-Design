import { NotificationCreator } from "../factories/notification-creator";
import { Notification } from "../interface";
import { PushNotification } from "../Notification Products/push-notification";

export class PushNotificationCreator extends NotificationCreator {
  createNotification(): Notification {
    return new PushNotification();
  }
}
