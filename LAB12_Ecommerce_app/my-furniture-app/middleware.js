import { NextResponse } from 'next/server';

export function middleware(request) {
	// Example: allow all requests to continue.
	return NextResponse.next();
}

export const config = {
	// Apply middleware to all routes — adjust matcher as needed.
	matcher: '/:path*',
};
