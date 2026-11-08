"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { primaryNav } from "@/lib/content/navigation";
import { ui } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/config";

/**
 * Desktop navigation. Groups with children open a panel; the rest are plain
 * links. Items whose page does not exist yet render as text rather than as a
 * link to nowhere.
 */
export function DesktopNav({ locale }: { locale: Locale }) {
  const groups = primaryNav(locale);

  return (
    <NavigationMenu
      className="hidden lg:flex"
      align="center"
      aria-label={ui.mainNavigation[locale]}
    >
      <NavigationMenuList className="gap-0.5">
        {groups.map((group) =>
          group.items ? (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[26rem] gap-0.5 p-1.5 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      {item.planned ? (
                        <span className="flex h-full flex-col items-start gap-0.5 rounded-md p-2.5 opacity-60">
                          <span className="text-sm font-semibold text-ink">
                            {item.label}
                          </span>
                          {item.description ? (
                            <span className="text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </span>
                          ) : null}
                        </span>
                      ) : (
                        <NavigationMenuLink
                          render={<Link href={item.href} />}
                          className="flex h-full flex-col items-start gap-0.5 rounded-md p-2.5"
                        >
                          <span className="text-sm font-semibold text-ink">
                            {item.label}
                          </span>
                          {item.description ? (
                            <span className="text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </span>
                          ) : null}
                        </NavigationMenuLink>
                      )}
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuLink
                render={<Link href={group.href ?? "/"} />}
                className={navigationMenuTriggerStyle()}
              >
                {group.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
