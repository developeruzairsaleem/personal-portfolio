"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Maximize, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { mark } from "@/app/mark";

function fmt(s: number) {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export type VideoPlayerProps = {
  src: string;
  poster: string;
  /** Accessible name and the big line on the cover. */
  title: string;
  /** Small line under the title on the cover, e.g. "0:50 · Sound on". */
  meta?: string;
  /** Analytics event names, sent once per page view and on completion. */
  playEvent: string;
  completeEvent: string;
  id?: string;
  variant?: "film" | "screen";
};

/**
 * Branded, self-hosted video player. Poster + play cover, then a minimal bar:
 * play/pause, scrub, time, mute, fullscreen. Sound is on once the visitor
 * presses play. Keyboard: Space/K play, M mute, F fullscreen, arrows seek.
 */
export function VideoPlayer({
  src,
  poster,
  title,
  meta,
  playEvent,
  completeEvent,
  id,
  variant = "screen",
}: VideoPlayerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barPlayRef = useRef<HTMLButtonElement>(null);
  const sentPlay = useRef(false);
  const idleTimer = useRef<number | undefined>(undefined);
  const dragging = useRef(false);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [idle, setIdle] = useState(false);

  // The cover button unmounts on first play; keep keyboard focus in the player.
  useEffect(() => {
    if (started) barPlayRef.current?.focus({ preventScroll: true });
  }, [started]);

  useEffect(() => () => window.clearTimeout(idleTimer.current), []);

  function wake() {
    setIdle(false);
    window.clearTimeout(idleTimer.current);
    idleTimer.current = window.setTimeout(() => setIdle(true), 2600);
  }

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.muted = muted;
      void v.play().catch(() => {
        // Autoplay with sound refused (rare after a click): retry muted.
        v.muted = true;
        setMuted(true);
        void v.play().catch(() => {});
      });
    } else v.pause();
  }

  function seekTo(seconds: number) {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    v.currentTime = Math.min(v.duration, Math.max(0, seconds));
    setCurrent(v.currentTime);
  }

  function seekFromPointer(e: PointerEvent<HTMLDivElement>) {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekTo(ratio * v.duration);
  }

  function fullscreen() {
    const v = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!v) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else if (v.requestFullscreen) void v.requestFullscreen();
    else v.webkitEnterFullscreen?.();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (!started) return;
    const onButton = e.target instanceof HTMLButtonElement;
    const k = e.key.toLowerCase();
    if ((k === " " && !onButton) || k === "k") {
      e.preventDefault();
      toggle();
    } else if (k === "m") {
      setMuted((m) => !m);
    } else if (k === "f") {
      fullscreen();
    }
    wake();
  }

  const progress = duration ? current / duration : 0;
  const showBar = started && !ended;
  const barHidden = playing && idle;

  return (
    <div
      ref={wrapRef}
      id={id}
      className={`fx-player fx-player-${variant}`}
      data-playing={playing || undefined}
      data-idle={barHidden || undefined}
      onPointerMove={started ? wake : undefined}
      onFocusCapture={() => started && setIdle(false)}
      onKeyDown={onKeyDown}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        muted={muted}
        aria-label={title}
        onPlay={() => {
          if (!sentPlay.current) {
            sentPlay.current = true;
            mark(playEvent);
          }
          const v = videoRef.current;
          if (v?.duration) setDuration(v.duration);
          setPlaying(true);
          setStarted(true);
          setEnded(false);
          wake();
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          mark(completeEvent);
          setPlaying(false);
          setEnded(true);
        }}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration || 0)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          // Metadata can load before hydration, so pick up the length here too.
          if (!duration && v.duration) setDuration(v.duration);
          if (!dragging.current) setCurrent(v.currentTime);
        }}
        onClick={toggle}
      />

      {(!started || ended) && (
        <button type="button" className="fx-player-cover" onClick={toggle} aria-label={ended ? `Replay: ${title}` : `Play: ${title}`}>
          <span className="fx-player-disc" aria-hidden="true">
            <span className="fx-player-ring" />
            {ended ? <RotateCcw strokeWidth={2.2} /> : <Play fill="currentColor" strokeWidth={0} />}
          </span>
          <span className="fx-player-title">{ended ? "Watch again" : title}</span>
          {meta && !ended && <span className="fx-player-meta">{meta}</span>}
        </button>
      )}

      {showBar && (
        <div className="fx-player-bar" data-hidden={barHidden || undefined}>
          <button type="button" ref={barPlayRef} onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause fill="currentColor" strokeWidth={0} /> : <Play fill="currentColor" strokeWidth={0} />}
          </button>
          <div
            className="fx-player-track"
            role="slider"
            tabIndex={0}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(current)}
            aria-valuetext={`${fmt(current)} of ${fmt(duration)}`}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              seekFromPointer(e);
            }}
            onPointerMove={(e) => {
              if (dragging.current) seekFromPointer(e);
            }}
            onPointerUp={(e) => {
              dragging.current = false;
              e.currentTarget.releasePointerCapture(e.pointerId);
            }}
            onPointerCancel={() => {
              dragging.current = false;
            }}
            onKeyDown={(e) => {
              const v = videoRef.current;
              if (!v) return;
              let next: number | null = null;
              if (e.key === "ArrowRight" || e.key === "ArrowUp") next = v.currentTime + 5;
              else if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = v.currentTime - 5;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = v.duration;
              if (next !== null) {
                e.preventDefault();
                e.stopPropagation();
                seekTo(next);
              }
            }}
          >
            <div className="fx-player-rail">
              <div className="fx-player-fill" style={{ transform: `scaleX(${progress})` }} />
              <div className="fx-player-knob" style={{ left: `${progress * 100}%` }} />
            </div>
          </div>
          <span className="fx-player-time">
            {fmt(current)} <span aria-hidden="true">/</span> {fmt(duration)}
          </span>
          <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? "Unmute" : "Mute"}>
            {muted ? <VolumeX /> : <Volume2 />}
          </button>
          <button type="button" onClick={fullscreen} aria-label="Fullscreen">
            <Maximize />
          </button>
        </div>
      )}
    </div>
  );
}
