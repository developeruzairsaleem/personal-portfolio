"use client";

import { useEffect, useRef, useState } from "react";
import { mark } from "./mark";

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

/**
 * Self-hosted demo player with brand-colored controls: poster + play
 * cover, then a minimal bar with play/pause, seek, time, mute, and
 * fullscreen. No native chrome, no external dependencies.
 */
export function DemoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("0:00");
  const [duration, setDuration] = useState(0);
  const barPlayRef = useRef<HTMLButtonElement>(null);

  // The cover button unmounts on first play; keep keyboard focus in the player.
  useEffect(() => {
    if (started) barPlayRef.current?.focus({ preventScroll: true });
  }, [started]);

  function nudge(seconds: number) {
    const v = ref.current;
    if (!v || !v.duration) return;
    v.currentTime = Math.min(v.duration, Math.max(0, v.currentTime + seconds));
  }

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const v = ref.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  }

  return (
    <div className="vp" id="demo-video">
      <video
        ref={ref}
        src="/satraj-demo-2.mp4"
        poster="/satraj-demo-poster.jpg"
        preload="metadata"
        playsInline
        muted={muted}
        onPlay={() => {
          if (!started) mark("video_play");
          setPlaying(true);
          setStarted(true);
        }}
        onEnded={() => mark("video_complete")}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={() => setDuration(ref.current?.duration ?? 0)}
        onTimeUpdate={() => {
          const v = ref.current;
          if (!v) return;
          setProgress(v.duration ? v.currentTime / v.duration : 0);
          setTime(fmt(v.currentTime));
        }}
        onClick={toggle}
      />
      {!started && (
        <button
          type="button"
          className="vp-cover"
          onClick={toggle}
        >
          <span className="vp-play">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          </span>
          <span className="vp-caption">Watch the 90 second demo</span>
        </button>
      )}
      {started && (
        <div className="vp-bar">
          <button type="button" ref={barPlayRef} onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
            {playing ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            )}
          </button>
          <div
            className="vp-track"
            onClick={seek}
            role="slider"
            tabIndex={0}
            aria-label="Seek"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${time} of ${fmt(duration)}`}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowUp") { e.preventDefault(); nudge(5); }
              else if (e.key === "ArrowLeft" || e.key === "ArrowDown") { e.preventDefault(); nudge(-5); }
              else if (e.key === "Home") { e.preventDefault(); nudge(-Infinity); }
              else if (e.key === "End") { e.preventDefault(); nudge(Infinity); }
            }}
          >
            <div className="vp-rail"><div className="vp-fill" style={{ width: `${progress * 100}%` }} /></div>
          </div>
          <span className="vp-time">{time}</span>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 9v6h4l5 4V5L8 9H4zm12.5 3l3-3-1.4-1.4-3 3-3-3L10.7 9l3 3-3 3 1.4 1.4 3-3 3 3 1.4-1.4-3-3z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 9v6h4l5 4V5L8 9H4zm11 3a4 4 0 0 0-2-3.5v7A4 4 0 0 0 15 12zm-2-7.5v2.1a6 6 0 0 1 0 10.8v2.1a8 8 0 0 0 0-15z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              const v = ref.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
              if (!v) return;
              if (v.requestFullscreen) void v.requestFullscreen();
              else v.webkitEnterFullscreen?.();
            }}
            aria-label="Fullscreen"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm14 0h2v6h-6v-2h4v-4z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      )}
      <style>{`
        .vp { position: relative; border-radius: 14px; overflow: hidden; background: #000; box-shadow: 0 30px 70px rgba(20,25,22,0.22); }
        .vp video { width: 100%; display: block; cursor: pointer; }
        .vp-cover { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; width: 100%; background: linear-gradient(180deg, rgba(13,26,23,0.3), rgba(13,26,23,0.72)); border: 0; cursor: pointer; color: #fff; transition: background 0.15s; }
        .vp-cover:focus-visible { outline-offset: -6px; }
        .vp :focus-visible { outline-color: var(--fz-amber); }
        .vp-cover:hover { background: linear-gradient(180deg, rgba(13,26,23,0.4), rgba(13,26,23,0.8)); }
        .vp-play { display: flex; align-items: center; justify-content: center; width: 88px; height: 88px; border-radius: 50%; background: var(--fz-amber); color: #1a1f1d; box-shadow: 0 10px 30px rgba(0,0,0,0.35); transition: transform 0.15s; }
        .vp-play svg { width: 36px; height: 36px; margin-left: 4px; }
        .vp-cover:hover .vp-play { transform: scale(1.06); }
        .vp-caption { font-size: 18px; font-weight: 700; letter-spacing: 0.01em; text-shadow: 0 1px 8px rgba(0,0,0,0.5); }
        .vp-bar { display: flex; align-items: center; gap: 8px; padding: 6px 12px; background: var(--fz-deeper); }
        .vp-bar button { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 8px; background: transparent; color: #fff; cursor: pointer; opacity: 0.92; }
        .vp-bar button:hover { opacity: 1; background: rgba(255,255,255,0.12); }
        .vp-bar svg { width: 22px; height: 22px; }
        .vp-track { flex: 1; height: 44px; display: flex; align-items: center; cursor: pointer; border-radius: 8px; }
        .vp-rail { position: relative; width: 100%; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.5); }
        .vp-track:hover .vp-rail, .vp-track:focus-visible .vp-rail { height: 8px; }
        .vp-fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 3px; background: var(--fz-amber); }
        .vp-time { font-variant-numeric: tabular-nums; font-size: 14px; font-weight: 600; color: #fff; min-width: 40px; text-align: right; }
        @media (max-width: 640px) { .vp { border-radius: 10px; } .vp-play { width: 72px; height: 72px; } .vp-play svg { width: 30px; height: 30px; } .vp-caption { font-size: 16px; } }
      `}</style>
    </div>
  );
}
