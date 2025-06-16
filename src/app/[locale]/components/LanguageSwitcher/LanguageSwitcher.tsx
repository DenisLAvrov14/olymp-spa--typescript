"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "ru";

  const changeLanguage = (locale: string) => {
    if (locale !== currentLocale) {
      const newPath = `/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`;
      router.replace(newPath);
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center rounded bg-[#2A2723] px-3 py-1 text-[#EDEAE4] transition hover:text-[#C8A96A]"
      >
        {currentLocale.toUpperCase()} <ChevronDown size={16} className="ml-1" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-28 rounded border border-[#3A3632] bg-[#2A2723] shadow-lg">
          {["ru", "en", "zh"]
            .filter((code) => code !== currentLocale)
            .map((locale) => (
              <button
                key={locale}
                onClick={() => changeLanguage(locale)}
                className="block w-full px-4 py-2 text-left text-[#EDEAE4] transition hover:bg-[#3A3632]"
              >
                {locale === "ru" ? "Русский" : locale === "en" ? "English" : "中文"}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
