import { auth } from "./_lib/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isOnLanding = nextUrl.pathname === "/";
  const isOnStart = nextUrl.pathname === "/start";
  const isInAuthenticatedRoute = nextUrl.pathname.startsWith("/parts");

  if (isLoggedIn && (isOnStart || isOnLanding)) {
    return Response.redirect(new URL("/dashboard", nextUrl));
  }

  if (!isLoggedIn && isInAuthenticatedRoute) {
    return Response.redirect(new URL("/(auth)/signin", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
