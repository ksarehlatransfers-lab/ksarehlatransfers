import { cn } from "cn";

/**
 * Shared section heading so every block on every page shares one rhythm:
 * eyebrow, H2, supporting line. Pages vary their layouts, not their type.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  tone = "default",
  className,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "start" | "center";
  tone?: "default" | "invert";
  className?: string;
  /** Set when the H2 is the labelled target of an aria-labelledby. */
  id?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-eyebrow",
            tone === "invert" ? "text-brass" : "text-palm"
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={id}
        className={cn(
          "text-h2 max-w-2xl text-balance",
          tone === "invert" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={cn(
            "text-lead max-w-2xl text-pretty",
            tone === "invert" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
