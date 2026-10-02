import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { BOOK_HREF } from "@/app/service-contact";
import { SplitWords } from "@/components/site/split";
import { VideoPlayer } from "@/components/site/video-player";
import { ScrollScale } from "./scroll-scale";

export function Film() {
  return (
    <section id="film" className="fx-sec fx-film" aria-labelledby="film-title">
      <div className="fx-film-bg" aria-hidden="true" />
      <div className="fx-wrap">
        <header className="fx-sec-head fx-sec-head-center">
          <p className="fx-kicker fx-reveal">The film</p>
          <h2 id="film-title" className="fx-h2 fx-split fx-reveal">
            <SplitWords parts={["See it in 50 seconds."]} />
          </h2>
        </header>

        <ScrollScale className="fx-film-frame">
          <div className="fx-film-glow" aria-hidden="true" />
          <VideoPlayer
            id="film-player"
            src="/fuel-film.mp4"
            poster="/fuel-film-poster.jpg"
            title="Watch the film"
            meta="0:50 · Sound optional"
            playEvent="film_play"
            completeEvent="film_complete"
            variant="film"
          />
        </ScrollScale>

        <p className="fx-film-next fx-reveal">
          Want to see it on a load of yours?{" "}
          <TrackedLink
            event="cta_book_film"
            href={BOOK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="fx-inline-link"
          >
            Book a walkthrough
            <ArrowRight aria-hidden="true" />
            <span className="fx-sr"> (opens in new tab)</span>
          </TrackedLink>
        </p>
      </div>
    </section>
  );
}
