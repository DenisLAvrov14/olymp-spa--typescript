// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // проверяем корень и все подпути с локалью
  matcher: ["/", "/:locale(ru|en)/:path*"],
};
