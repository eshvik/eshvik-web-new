import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // remove port if exists
  const cleanHost = host.split(":")[0];

  const parts = cleanHost.split(".");

  // get subdomain
  const subdomain = parts.length > 2 ? parts[0] : null;

  // ignore main domains
  if (
    !subdomain ||
    subdomain === "www" ||
    subdomain === "eshvik" ||
    subdomain === "web"
  ) {
    return NextResponse.next();
  }

  // rewrite to dynamic route
  return NextResponse.rewrite(
    new URL(`/${subdomain}`, req.url)
  );
}
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};