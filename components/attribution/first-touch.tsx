"use client";

import { useEffect } from "react";

/**
 * Lead attribution, matching the original Saudi Private Transfers form.
 *
 * The original form stores first-touch data in localStorage under
 * `spt_first_touch` and, at submit time, adds the current page's landing URL,
 * referrer, UTM source/medium/campaign, gclid and a google_organic flag. The
 * same keys and rules are used here so both websites fill the CRM's
 * attribution columns identically. (The original captures no utm_term or
 * utm_content, so neither does this.)
 *
 * The original form appears on almost every page, so its first touch is the
 * visitor's real landing page. Here the form lives only on the quote page,
 * so this recorder runs site-wide (mounted once in the layout) to capture the
 * same thing. It renders nothing and sends nothing; data only leaves the
 * browser inside a quote request the visitor chooses to send.
 */

const KEY = "spt_first_touch";

export function FirstTouchRecorder() {
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const params = new URLSearchParams(window.location.search);
        const firstTouch = {
          firstLandingPage: window.location.href,
          firstReferrer: document.referrer || undefined,
          firstUtmSource: params.get("utm_source") || undefined,
          firstUtmMedium: params.get("utm_medium") || undefined,
          firstUtmCampaign: params.get("utm_campaign") || undefined,
        };
        localStorage.setItem(KEY, JSON.stringify(firstTouch));
      }
    } catch {
      // Storage access blocked or restricted.
    }
  }, []);
  return null;
}

/** The attribution fields the original form sends with a lead. */
export function readAttribution(): Record<string, string> {
  let first: Record<string, string | undefined> = {};
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) first = JSON.parse(raw);
  } catch {
    // Fallback: no first-touch data.
  }
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string | undefined> = {
    firstLandingPage: first.firstLandingPage,
    firstReferrer: first.firstReferrer,
    firstUtmSource: first.firstUtmSource,
    firstUtmMedium: first.firstUtmMedium,
    firstUtmCampaign: first.firstUtmCampaign,
    landingPage: window.location.href,
    referrer: document.referrer || undefined,
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    gclid: params.get("gclid") || undefined,
    searchSource: document.referrer.includes("google.") ? "google_organic" : undefined,
  };
  return Object.fromEntries(
    Object.entries(out).filter((e): e is [string, string] => typeof e[1] === "string" && e[1] !== "")
  );
}
