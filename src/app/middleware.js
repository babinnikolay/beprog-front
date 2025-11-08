import { auth } from "./_lib/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isOnLanding = nextUrl.pathname === '/';
  const isOnCatalogs = nextUrl.pathname === '/catalogs';
  const isInAuthenticatedRoute = nextUrl.pathname.startsWith('/parts');
  const isInUnauthenticatedRoute = nextUrl.pathname.startsWith('/parts/catalogs') || nextUrl.pathname.startsWith('/(auth)');

  if (isLoggedIn && (isOnCatalogs || isOnLanding)) {
    return Response.redirect(new URL('/dashboard', nextUrl));
  }

  if (!isLoggedIn && isInAuthenticatedRoute) {
    return Response.redirect(new URL('/(auth)/signin', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};