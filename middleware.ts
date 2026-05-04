import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  // skip main domain
  if (hostname === "eshvik.in" || hostname === "web.eshvik.in") {
    return NextResponse.next();
  }

  // rewrite to dynamic route
  url.pathname = `/${subdomain}`;
  return NextResponse.rewrite(url);
}