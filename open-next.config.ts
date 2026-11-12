import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Serve the build-time prerendered pages from Workers Static Assets (only the
// default ASSETS binding is needed; no R2 or KV). It is read-only, which fits
// this site: pages change on deploy, not at runtime.
//
// Without this file the Cloudflare build auto-generates a config with an R2
// incremental cache but no R2 binding, so every request misses the cache and
// the Worker renders every page in full — the cause of 1102 resource-limit
// errors seen on the Saudi Taxi Worker before the same fix.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
