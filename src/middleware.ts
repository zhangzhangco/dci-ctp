import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    console.log('[MIDDLEWARE] Request:', request.method, request.nextUrl.pathname);
    console.log('[MIDDLEWARE] Headers:', {
        'next-action': request.headers.get('next-action'),
        'content-type': request.headers.get('content-type')
    });

    // Temporarily bypass ALL middleware logic for testing
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
