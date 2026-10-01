import { SplitWords, delay } from "@/components/site/split";
import { VideoPlayer } from "@/components/site/video-player";
import { ScrollScale } from "./scroll-scale";

export function Film() {
  return (
    <section id="film" className="fx-sec fx-film" aria-labelledby="film-title">
      <div className="fx-film-bg" aria-hidden="true" />
      <div className="fx-wrap">
        <header className="fx-sec-head fx-sec-head-center">
          <p className="fx-kicker fx-reveal">
            <b>01</b> The film
          </p>
          <h2 id="film-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["See it in", { em: "50 seconds." }]} />
          </h2>
          <p className="fx-lead fx-reveal" style={delay(120)}>
            One load, from the terminal ticket to an approved invoice in QuickBooks. Turn the sound on.
          </p>
        </header>

        <ScrollScale className="fx-film-frame">
          <div className="fx-film-glow" aria-hidden="true" />
          <VideoPlayer
            id="film-player"
            src="/fuel-film.mp4"
            poster="/fuel-film-poster.jpg"
            title="Watch the film"
            meta="0:50 · Sound on"
            playEvent="film_play"
            completeEvent="film_complete"
            variant="film"
          />
        </ScrollScale>
      </div>
    </section>
  );
}
