import { NotificationCreator } from "../factories/notification-creator";
import { Notification } from "../interface";
import { SmsNotification } from "../Notification Products/sms-notification";

export class SmsNotificationCreator extends NotificationCreator {
  createNotification(): Notification {
    return new SmsNotification();
  }
}
