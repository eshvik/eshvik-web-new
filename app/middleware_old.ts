import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const cleanHost = host.split(":")[0];

  const pathname = req.nextUrl.pathname;

  // ✅ Allow system routes (VERY IMPORTANT)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/dashboard") ||
    pathname === "/" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const parts = cleanHost.split(".");
  const subdomain = parts.length > 2 ? parts[0] : null;

  // ✅ If no subdomain → normal site
  if (!subdomain || subdomain === "www" || subdomain === "web") {
    return NextResponse.next();
  }

  // ✅ Rewrite only for subdomain
  return NextResponse.rewrite(new URL(`/${subdomain}`, req.url));
}

// ✅ Keep this
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};