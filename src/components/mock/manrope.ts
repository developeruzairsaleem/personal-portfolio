import { Manrope } from "next/font/google";

/**
 * The real back-office app is set in Manrope. Only the product mock panels
 * use it, so it is not preloaded: the site's own type comes first.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});
