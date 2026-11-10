"use client";

import * as React from "react";
import { useActionState } from "react";
import { usePathname } from "next/navigation";
import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  Loader2Icon,
  SendIcon,
} from "lucide-react";

import { cn } from "cn";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { readAttribution } from "@/components/attribution/first-touch";
import { locationOptions } from "@/lib/content/destinations";
import { fieldErrors, formCopy } from "@/lib/content/form-copy";
import {
  ATTRIBUTION_FIELDS,
  EMPTY_FORM_VALUES,
  FORM_DEFAULTS,
  LUGGAGE_OPTIONS,
  PASSENGER_OPTIONS,
  VEHICLE_OPTIONS,
  type FormValues,
} from "@/lib/inquiry/schema";
import type { Locale } from "@/lib/i18n/config";

const initialState: InquiryState = { status: "idle" };

/**
 * Quote request form.
 *
 * Functionally the original Saudi Private Transfers form — same field names,
 * options, defaults, browser-required fields, attribution fields and CRM
 * schema (lib/inquiry/schema.ts) — in this website's own design. It submits
 * through a Server Action that validates with the CRM's schema and hands the
 * lead to the shared CRM; the UI only says "received" when the CRM said so.
 *
 * "Send another request" remounts the inner form, so each request gets a
 * fresh submission id (the CRM's duplicate-protection key).
 */
export function BookingForm({
  locale,
  className,
  defaults,
  showIntro = true,
  serviceType = FORM_DEFAULTS.serviceType,
}: {
  locale: Locale;
  className?: string;
  defaults?: Partial<FormValues>;
  /** Turn off when the surrounding page supplies its own heading. */
  showIntro?: boolean;
  /** Page context saved with the lead, as on the original site. */
  serviceType?: string;
}) {
  const [round, setRound] = React.useState(0);
  return (
    <BookingFormInner
      key={round}
      locale={locale}
      className={className}
      defaults={defaults}
      showIntro={showIntro}
      serviceType={serviceType}
      onReset={() => setRound((r) => r + 1)}
    />
  );
}

function BookingFormInner({
  locale,
  className,
  defaults,
  showIntro,
  serviceType,
  onReset,
}: {
  locale: Locale;
  className?: string;
  defaults?: Partial<FormValues>;
  showIntro: boolean;
  serviceType: string;
  onReset: () => void;
}) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const pathname = usePathname();

  // Client-only values (submission id + attribution) are written straight
  // into the hidden inputs after mount, so the prerendered HTML carries no
  // per-visitor data, hydration cannot mismatch, and no re-render is needed.
  // React resets uncontrolled fields after every form action, so the values
  // are re-applied after each result. The id is created once per form and
  // kept in a ref: a retry after an error carries the same duplicate key.
  const hiddenRef = React.useRef<HTMLDivElement>(null);
  const submissionIdRef = React.useRef("");
  React.useEffect(() => {
    const root = hiddenRef.current;
    if (!root) return;
    const set = (name: string, value: string) => {
      const input = root.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (input) input.value = value;
    };
    if (!submissionIdRef.current) submissionIdRef.current = crypto.randomUUID();
    set("submissionId", submissionIdRef.current);
    const attribution = readAttribution();
    for (const key of ATTRIBUTION_FIELDS) set(key, attribution[key] ?? "");
  }, [state]);

  const copy = formCopy;
  const label = copy.labels;
  const invalid = new Set(state.status === "invalid" ? state.fields : []);
  const values: FormValues = {
    ...EMPTY_FORM_VALUES,
    ...defaults,
    ...("values" in state ? state.values : {}),
  };
  const errorFor = (field: keyof FormValues) =>
    invalid.has(field) ? fieldErrors[field]?.[locale] : undefined;

  const listId = `quote-locations-${locale}`;

  if (state.status === "sent") {
    return (
      <div className={cn("rounded-2xl bg-card p-7 shadow-xl ring-1 ring-ink/10", className)}>
        <Outcome
          tone="success"
          icon={<CheckCircle2Icon aria-hidden className="size-5" />}
          title={copy.outcomes.sentTitle[locale]}
          body={
            <>
              {copy.outcomes.sentBody[locale]}{" "}
              <span dir="ltr" className="numeric font-semibold text-ink">
                {state.reference}
              </span>
              .
            </>
          }
        />
        <button
          type="button"
          onClick={onReset}
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg border border-palm/30 px-5 text-sm font-semibold text-palm-deep transition-colors hover:bg-palm-soft"
        >
          {copy.outcomes.sendAnother[locale]}
        </button>
      </div>
    );
  }

  return (
    <div className={cn("rounded-2xl bg-card p-5 shadow-xl ring-1 ring-ink/10 sm:p-7", className)}>
      {showIntro ? (
        <div className="mb-5">
          <h2 className="text-h4 text-ink">{copy.intro.title[locale]}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{copy.intro.lead[locale]}</p>
        </div>
      ) : null}

      {state.status === "unconfigured" ? (
        <Outcome
          className="mb-5"
          tone="notice"
          icon={<InfoIcon aria-hidden className="size-5" />}
          title={copy.outcomes.unconfiguredTitle[locale]}
          body={copy.outcomes.unconfiguredBody[locale]}
        />
      ) : null}

      {state.status === "error" ? (
        <Outcome
          className="mb-5"
          tone="error"
          icon={<AlertTriangleIcon aria-hidden className="size-5" />}
          title={copy.outcomes.errorTitle[locale]}
          body={state.kind === "busy" ? copy.outcomes.busyBody[locale] : copy.outcomes.errorBody[locale]}
        />
      ) : null}

      {state.status === "invalid" ? (
        <Outcome
          className="mb-5"
          tone="error"
          icon={<AlertTriangleIcon aria-hidden className="size-5" />}
          title={copy.outcomes.invalidTitle[locale]}
          body={copy.outcomes.invalidBody[locale]}
        />
      ) : null}

      <form action={formAction} aria-label={copy.ariaLabel[locale]} className="flex flex-col gap-4">
        {/* Hidden from people and assistive tech; only bots fill it in. */}
        <div aria-hidden className="hidden">
          <label htmlFor="company">{label.company[locale]}</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Lead context and attribution, as on the original form. */}
        <div ref={hiddenRef} hidden>
          <input type="hidden" name="serviceType" value={serviceType} />
          <input type="hidden" name="pathname" value={pathname ?? ""} />
          <input type="hidden" name="submissionId" defaultValue="" />
          {ATTRIBUTION_FIELDS.map((key) => (
            <input key={key} type="hidden" name={key} defaultValue="" />
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={label.name[locale]} name="name" required error={errorFor("name")}>
            <Input
              name="name"
              required
              autoComplete="name"
              placeholder={label.namePlaceholder[locale]}
              defaultValue={values.name}
              invalid={invalid.has("name")}
            />
          </Field>
          <Field label={label.phone[locale]} name="phone" required hint={label.phoneHint[locale]} error={errorFor("phone")}>
            <Input
              type="tel"
              name="phone"
              required
              dir="ltr"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+966 5X XXX XXXX"
              defaultValue={values.phone}
              invalid={invalid.has("phone")}
            />
          </Field>
        </div>

        <Field label={label.email[locale]} name="email" hint={label.emailHint[locale]} error={errorFor("email")}>
          <Input
            type="email"
            name="email"
            dir="ltr"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            defaultValue={values.email}
            invalid={invalid.has("email")}
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={label.pickup[locale]} name="pickup" required error={errorFor("pickup")}>
            <Input
              name="pickup"
              required
              list={listId}
              autoComplete="off"
              placeholder={label.pickupPlaceholder[locale]}
              defaultValue={values.pickup}
              invalid={invalid.has("pickup")}
            />
          </Field>
          <Field label={label.dropoff[locale]} name="dropoff" required error={errorFor("dropoff")}>
            <Input
              name="dropoff"
              required
              list={listId}
              autoComplete="off"
              placeholder={label.dropoffPlaceholder[locale]}
              defaultValue={values.dropoff}
              invalid={invalid.has("dropoff")}
            />
          </Field>
        </div>

        {/* Suggestions, not a closed list — any Saudi address is valid. */}
        <datalist id={listId}>
          {locationOptions[locale].map((o) => (
            <option key={o} value={o} />
          ))}
        </datalist>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={label.date[locale]} name="date" required>
            <Input type="date" name="date" required defaultValue={values.date} />
          </Field>
          <Field label={label.time[locale]} name="time" required>
            <Input type="time" name="time" required defaultValue={values.time} />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label={label.passengers[locale]} name="passengers">
            <Select name="passengers" defaultValue={values.passengers}>
              {PASSENGER_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={label.luggage[locale]} name="luggage">
            <Select name="luggage" defaultValue={values.luggage}>
              {LUGGAGE_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={label.vehicle[locale]} name="vehicle">
            <Select name="vehicle" defaultValue={values.vehicle}>
              {VEHICLE_OPTIONS.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label[locale]}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field label={label.flight[locale]} name="flight" hint={label.optional[locale]} error={errorFor("flight")}>
          <Input
            name="flight"
            dir="ltr"
            autoComplete="off"
            placeholder={label.flightPlaceholder[locale]}
            defaultValue={values.flight}
            invalid={invalid.has("flight")}
          />
        </Field>

        <Field label={label.message[locale]} name="message" hint={label.optional[locale]} error={errorFor("message")}>
          <textarea
            name="message"
            rows={3}
            defaultValue={values.message}
            aria-invalid={invalid.has("message") || undefined}
            className="w-full resize-y rounded-lg border border-input bg-transparent px-3 py-2.5 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive"
            placeholder={label.messagePlaceholder[locale]}
          />
        </Field>

        <button
          type="submit"
          disabled={pending}
          className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <Loader2Icon className="size-4 animate-spin" aria-hidden />
              {copy.submit.pending[locale]}
            </>
          ) : (
            <>
              <SendIcon className="size-4 rtl:-scale-x-100" aria-hidden />
              {copy.submit.idle[locale]}
            </>
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">{copy.privacy[locale]}</p>
      </form>
    </div>
  );
}

/* --------------------------------------------------------------- helpers --- */

function Field({
  label,
  name,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="flex items-baseline justify-between gap-2 text-sm font-medium text-ink">
        <span>
          {label}
          {required ? (
            <span className="ms-0.5 text-destructive" aria-hidden>
              *
            </span>
          ) : null}
        </span>
        {hint ? <span className="text-xs font-normal text-muted-foreground">{hint}</span> : null}
      </label>

      <FieldControl name={name} errorId={errorId} hasError={!!error}>
        {children}
      </FieldControl>

      {error ? (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Wires id/aria-describedby onto whichever control the field wraps. */
function FieldControl({
  name,
  errorId,
  hasError,
  children,
}: {
  name: string;
  errorId: string;
  hasError: boolean;
  children: React.ReactNode;
}) {
  if (!React.isValidElement(children)) return <>{children}</>;

  return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    id: name,
    "aria-describedby": hasError ? errorId : undefined,
  });
}

const controlClass =
  "h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive";

function Input({ invalid, className, ...props }: React.ComponentProps<"input"> & { invalid?: boolean }) {
  return <input {...props} aria-invalid={invalid || undefined} className={cn(controlClass, className)} />;
}

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      {...props}
      className={cn(
        controlClass,
        // The arrow sits at the inline end in both directions (pe-9 reserves the space).
        "cursor-pointer appearance-none bg-no-repeat pe-9 bg-[position:right_0.75rem_center] rtl:bg-[position:left_0.75rem_center]",
        className
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23707a76' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      }}
    >
      {children}
    </select>
  );
}

function Outcome({
  tone,
  icon,
  title,
  body,
  className,
}: {
  tone: "success" | "notice" | "error";
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  className?: string;
}) {
  const tones = {
    success: "bg-palm-soft text-palm-deep",
    notice: "bg-brass/12 text-ink",
    error: "bg-destructive/8 text-destructive",
  } as const;

  return (
    <div role="status" aria-live="polite" className={cn("flex gap-3 rounded-xl p-4", tones[tone], className)}>
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div className="text-sm">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 leading-relaxed opacity-90">{body}</p>
      </div>
    </div>
  );
}
