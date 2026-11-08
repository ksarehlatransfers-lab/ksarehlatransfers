"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { primaryNav, quoteCta } from "@/lib/content/navigation";
import { ui } from "@/lib/i18n/dictionary";
import { direction, type Locale } from "@/lib/i18n/config";

/**
 * The only interactive part of the header on small screens, kept in its own
 * client component so the rest of the header stays server-rendered. The sheet
 * slides in from the inline-end edge, which follows the reading direction.
 */
export function MobileNav({ locale }: { locale: Locale }) {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  const groups = primaryNav(locale);
  const cta = quoteCta(locale);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={ui.openMenu[locale]}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-lg" }),
          "lg:hidden"
        )}
      >
        <MenuIcon aria-hidden />
      </SheetTrigger>

      <SheetContent
        side={direction[locale] === "rtl" ? "left" : "right"}
        className="w-full gap-0 p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle className="text-start font-heading text-xl font-normal">
            {ui.menu[locale]}
          </SheetTitle>
        </SheetHeader>

        <nav
          aria-label={ui.mainNavigation[locale]}
          className="flex-1 overflow-y-auto px-5 py-5"
        >
          <ul className="flex flex-col gap-1">
            {groups.map((group) => (
              <li key={group.label}>
                <Link
                  href={group.href ?? "/"}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-secondary"
                >
                  {group.label}
                </Link>

                {group.items ? (
                  <ul className="mt-0.5 mb-2 ms-3 flex flex-col gap-0.5 border-s ps-3">
                    {group.items.map((item) =>
                      item.planned ? null : (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={close}
                            className="block rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 border-t px-5 py-4">
          <Link
            href={cta.href}
            onClick={close}
            className="flex h-11 flex-1 items-center justify-center rounded-lg bg-palm px-5 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {cta.label}
          </Link>
          <LanguageSwitcher locale={locale} className="h-11 shrink-0" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
