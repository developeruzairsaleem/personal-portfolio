"use client";

import { useRef, useState } from "react";

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
        src="/satraj-demo.mp4"
        poster="/satraj-demo-poster.jpg"
        preload="metadata"
        playsInline
        muted={muted}
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
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
          aria-label="Play the 90 second demo"
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
          <button type="button" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
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
            aria-label="Seek"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="vp-fill" style={{ width: `${progress * 100}%` }} />
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
            onClick={() => ref.current?.requestFullscreen?.()}
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
        .vp { position: relative; border-radius: 10px; overflow: hidden; background: #000; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 24px 60px rgba(0,0,0,0.4); }
        .vp video { width: 100%; display: block; cursor: pointer; }
        .vp-cover { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; width: 100%; background: linear-gradient(180deg, rgba(12,13,12,0.08) 40%, rgba(12,13,12,0.58)); border: 0; cursor: pointer; }
        .vp-play { display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: var(--fz-amber); color: #121412; transition: transform 0.15s; }
        .vp-play svg { width: 26px; height: 26px; margin-left: 2px; }
        .vp-cover:hover .vp-play { transform: scale(1.07); }
        .vp-caption { color: #fff; font-size: 13.5px; font-weight: 700; letter-spacing: 0.01em; }
        .vp-bar { position: absolute; bottom: 0; left: 0; right: 0; display: flex; align-items: center; gap: 10px; padding: 10px 12px 8px; background: linear-gradient(0deg, rgba(10,11,10,0.85), rgba(10,11,10,0)); }
        .vp-bar button { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; padding: 0; border: 0; background: transparent; color: #fff; cursor: pointer; opacity: 0.9; }
        .vp-bar button:hover { opacity: 1; }
        .vp-bar svg { width: 18px; height: 18px; }
        .vp-track { position: relative; flex: 1; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.28); cursor: pointer; }
        .vp-track:hover { height: 6px; }
        .vp-fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 2px; background: var(--fz-amber); }
        .vp-time { font-family: var(--font-mono), monospace; font-size: 11px; color: #fff; opacity: 0.9; min-width: 34px; text-align: right; }
      `}</style>
    </div>
  );
}
