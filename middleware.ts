import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["uz", "en"],
  defaultLocale: "uz",
});

export default authMiddleware({
  beforeAuth: (req) => {
    if (req.nextUrl.pathname.startsWith("/api")) return;
    return intlMiddleware(req);
  },
  publicRoutes: [
    "/:lng",
    "/:lng/sign-in",
    "/:lng/sign-up",
    "/:lng/courses",
    "/:lng/dashboard",
    "/:lng/onboarding",
  ],
  ignoredRoutes: ["/api/webhook"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

