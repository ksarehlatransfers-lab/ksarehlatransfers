import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  /**
   * Canonical URLs carry a trailing slash: /en/riyadh/, never /en/riyadh.
   * Next.js then answers 308 on the slashless form. The paths the site
   * generates come from `localePath()` in lib/i18n/config.ts, which appends
   * the same slash — change one and the other must follow, or every canonical
   * would point at a redirect.
   */
  trailingSlash: true,
  /**
   * Every page lives under a locale segment, so the bare root has nothing of
   * its own to serve. It is a temporary redirect rather than a permanent one:
   * a 308 would be cached by browsers indefinitely, and the root is where a
   * language-detecting entry point would go if one is added later.
   *
   * Both destinations are written with the trailing slash so each request
   * takes a single hop. Pointing them at the slashless form would make
   * /get-quote a two-hop chain through the trailing-slash redirect.
   */
  async redirects() {
    return [
      { source: "/", destination: "/en/", permanent: false },
      { source: "/get-quote", destination: "/en/get-quote/", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
