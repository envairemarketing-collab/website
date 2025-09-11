import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Allow access only to the maintenance page and its assets
  const { pathname } = request.nextUrl
  
  // Allow maintenance page and necessary assets
  if (
    pathname === '/maintenance' ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/logos/') ||
    pathname.startsWith('/public/')
  ) {
    return NextResponse.next()
  }
  
  // Redirect all other requests to maintenance page
  return NextResponse.redirect(new URL('/maintenance', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}