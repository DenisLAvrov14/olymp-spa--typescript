import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Roboto } from "next/font/google";
import Header from "./components/header/Header";
import ClarityScript from "./components/ClarityScript/ClarityScript";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

export const metadata = {
  title: "OLYMP SPA",
  icons: {
    icon: "/favicon.png",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale: locale as Locale });

  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <ClarityScript />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}