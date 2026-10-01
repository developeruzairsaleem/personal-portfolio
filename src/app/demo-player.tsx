import { VideoPlayer } from "@/components/site/video-player";

/**
 * The real-system screen recording (Sat-Raj screens on fictional demo data).
 * Keeps its original analytics events: video_play / video_complete.
 */
export function DemoPlayer({ id = "demo-video" }: { id?: string }) {
  return (
    <VideoPlayer
      id={id}
      src="/fuel-demo-v3.mp4"
      poster="/fuel-demo-v3-poster.jpg"
      title="See the real system"
      meta="0:50 · Real screens, demo data"
      playEvent="video_play"
      completeEvent="video_complete"
      variant="screen"
    />
  );
}
