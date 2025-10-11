import type { NotificationCreator } from "./factories/notification-creator";
import { EmailNotificationCreator } from "./Notification Creators/email-notification-creator";
import { PushNotificationCreator } from "./Notification Creators/push-notification-creator";
import { SmsNotificationCreator } from "./Notification Creators/sms-notification-creator";

class FactoryMethodDemo {
  static main(): void {
    let creator: NotificationCreator;

    creator = new EmailNotificationCreator();
    creator.send("Welcome to our platform");

    creator = new SmsNotificationCreator();
    creator.send("Your OTP is 12345");

    creator = new PushNotificationCreator();
    creator.send("You have a new follower!");
  }
}

FactoryMethodDemo.main();
