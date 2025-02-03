// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import navbar from "./components/navbar/navbar";

export async function middleware(request: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req: request });

  // Define protected routes
  const protectedRoutes = ["/workouts"]; 

  // Check if the current route is protected
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    // If the user is not authenticated, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Define the routes where the middleware should run
export const config = {
  matcher: ["/workouts", "/dashboard"], // Add your protected routes here
};