import { Observer, Video } from "./interface";

export class MobileSubscriber implements Observer {
  constructor(private username: string) {}

  update(channelName: string, video: Video): void {
    console.log(
      `📱 [Mobile] Hey ${this.username}, new video on "${channelName}": "${video.title}" (${video.durationInMinutes} mins)`
    );
  }
}

export class EmailSubscriber implements Observer {
  constructor(private email: string) {}

  update(channelName: string, video: Video): void {
    console.log(
      `📧 [Email] Sending email to ${this.email}: ` +
        `New video from ${channelName}: "${video.title}" (${video.durationInMinutes} mins)`
    );
  }
}
