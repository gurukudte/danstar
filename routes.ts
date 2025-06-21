/**
 * Public routes that do not require authentication.
 *
 * @constant {string[]}
 */
export const publicRoutes = [
  "/",
  "/about",
  "/blogs",
  "/courses",
  "/services",
  "/blogs/study-abroad-consultants-bangalore",
  "/blogs/unlock-your-true-potential",
  "/blogs/best-admission-consultants-in-bangalore",
  "/blogs/best-education-consultants-in-india",
  "/blogs/best-mbbs-admission-consultants",
  "/blogs/best-career-after-12th-in-india",
  "/blogs/bsc-nursing-colleges-in-bangalore-with-fees",
  "/blogs/bba-admission-in-bangalore",
  "/blogs/BCA-WITH-AI-IN-BANGALORE",
  "/blogs/bcom-with-ACCA-IN-BANGALORE",
  "/blogs/education-consultants-in-india",
  "/blogs/hospital-management-course-in-bangalore",
  "/blogs/llb-admission-in-bangalore",
  "/blogs/mba-consultant",
  "/blogs/mha-course-in-bangalore",
  "/blogs/physiotherapy-colleges-in-bangalore-fee-structure",
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
