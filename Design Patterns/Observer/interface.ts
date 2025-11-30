// A simple data model for videos
export type Video = {
  id: string;
  title: string;
  durationInMinutes: number;
};

// The Observer interface: anyone who wants updates implements this.
// subscribers
export interface Observer {
  update(channelName: string, video: Video): void;
}

// The Subject (Observable) interface
export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(video: Video): void;
}
