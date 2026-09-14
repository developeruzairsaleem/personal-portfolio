import { NextResponse, type NextRequest } from "next/server";

/**
 * Email clients often fold the sentence's period into a link, so
 * "uzairsaleem.dev/demo." arrives as /demo. and 404s. Strip trailing dots.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.length > 1 && pathname.endsWith(".")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\.+$/, "") || "/";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/).*)"],
};
