import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Roboto } from "next/font/google";
import Header from "./components/header/Header";
import type { ReactNode } from "react";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

// ✅ Указываем метаинформацию — favicon + заголовок
export const metadata = {
  title: "OLYMP SPA",
  icons: {
    icon: "/favicon.png",
  },
};

// ✅ Генерация статических маршрутов для /en /ru /zh и т.д.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
