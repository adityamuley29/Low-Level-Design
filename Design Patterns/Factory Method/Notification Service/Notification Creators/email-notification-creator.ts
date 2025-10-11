import { NotificationCreator } from "../factories/notification-creator";
import { Notification } from "../interface";
import { EmailNotification } from "../Notification Products/email-notification";

export class EmailNotificationCreator extends NotificationCreator {
  createNotification(): Notification {
    return new EmailNotification();
  }
}
