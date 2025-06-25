import { blogs } from "./app/blogs/blog-data/blogs";

const blogRoutes = blogs.map((blog) => `/blogs/${blog.slug}`);

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
  ...blogRoutes,
  "/courses/pgdm-ai-data-analytics",
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
