import type { CSSProperties, ReactNode } from "react";

export type Part = string | { em: string };

/**
 * Splits a headline into masked words for the line-reveal. `{ em }` parts are
 * set in the italic serif with the fuel gradient. Real spaces stay between
 * words so the heading reads normally to screen readers and when copied.
 */
export function SplitWords({ parts, start = 0 }: { parts: Part[]; start?: number }) {
  let i = start;
  const out: ReactNode[] = [];
  parts.forEach((part, pi) => {
    const em = typeof part !== "string";
    const words = (em ? part.em : part).split(/\s+/).filter(Boolean);
    words.forEach((word, wi) => {
      if (out.length) out.push(" ");
      out.push(
        <span className={em ? "w w-em" : "w"} key={`${pi}-${wi}`}>
          <span className={em ? "fx-em" : undefined} style={{ "--i": i++ } as CSSProperties}>
            {word}
          </span>
        </span>,
      );
    });
  });
  return <>{out}</>;
}

/** Inline style for a staggered reveal / load delay. */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}
