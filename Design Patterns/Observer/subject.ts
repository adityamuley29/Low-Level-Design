import { Observer, Subject, Video } from "./interface";

export class YoutubeChannel implements Subject {
  private observers: Set<Observer> = new Set();
  private videos: Video[] = [];

  constructor(private name: string) {}

  public subscribe(observer: Observer): void {
    this.observers.add(observer);
    console.log(`[${this.name}] New subscriber added.`);
  }

  public unsubscribe(observer: Observer): void {
    this.observers.delete(observer);
    console.log(`[${this.name}] Subscriber removed.`);
  }

  public uploadVideo(title: string, durationInMinutes: number): void {
    const newVideo: Video = {
      id: `${Date.now()}`,
      title,
      durationInMinutes,
    };

    this.videos.push(newVideo);
    console.log(`\n[${this.name}] Uploaded new video: "${title}"`);

    // Notify all subscribers
    this.notify(newVideo);
  }

  public notify(video: Video): void {
    console.log(
      `[${this.name}] Notifying ${this.observers.size} subscribers...`
    );
    this.observers.forEach((observer) => observer.update(this.name, video));
  }
}
