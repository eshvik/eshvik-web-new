import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  const subdomain = host.split(".")[0];

  if (
    subdomain &&
    subdomain !== "www" &&
    subdomain !== "eshvik" &&
    subdomain !== "web"
  ) {
    return NextResponse.rewrite(
      new URL(`/${subdomain}`, req.url)
    );
  }

  return NextResponse.next();
}