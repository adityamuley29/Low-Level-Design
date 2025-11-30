import { EmailSubscriber, MobileSubscriber } from "./observers";
import { YoutubeChannel } from "./subject";

const channel = new YoutubeChannel("Aditya Codes");

// Create observers
const mobileUser = new MobileSubscriber("Aditya");
const emailUser = new EmailSubscriber("aditya@example.com");

// Subscribe them
channel.subscribe(mobileUser);
channel.subscribe(emailUser);

// First video upload
channel.uploadVideo("Observer Pattern in TypeScript", 15);

// Unsubscribe email user
channel.unsubscribe(emailUser);

// Second video upload
channel.uploadVideo("Strategy Pattern Deep Dive", 20);
