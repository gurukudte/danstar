/**
 * Public routes that do not require authentication.
 *
 * @constant {string[]}
 */
export const publicRoutes = [
  "/",
  "/about",
  "/blogs",
  "/blogs/study-abroad-consultants-bangalore",
  "/blogs/unlock-your-true-potential",
  "/blogs/best-admission-consultants-in-bangalore",
  "/blogs/best-education-consultants-in-india",
  "/blogs/best-mbbs-admission-consultants",
  "/blogs/best-career-after-12th-in-india",
  "/blogs/bsc-nursing-colleges-in-bangalore-with-fees",
  "/blogs/bba-admission-in-bangalore",
];
export const apiPublicRoutes = [
  "/api",
  // Add other public API routes here
];

/**
 * Routes for authentication.
 *
 * @constant {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/signup"];

/**
 * Prefix for authentication-related API routes.
 *
 * @constant {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default URL to which users are redirected after a successful login.
 *
 * @constant {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
