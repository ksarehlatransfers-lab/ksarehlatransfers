"use client";

import * as React from "react";
import { useActionState } from "react";
import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  Loader2Icon,
  SendIcon,
} from "lucide-react";

import { cn } from "cn";
import { initialInquiryState, submitInquiry } from "@/app/actions/inquiry";
import { locationOptions } from "@/lib/content/destinations";
import { errorMessages, formCopy, tripTypeLabels } from "@/lib/content/form-copy";
import { TRIP_TYPES, type Inquiry, type InquiryErrorCode } from "@/lib/inquiry/schema";
import type { Locale } from "@/lib/i18n/config";

/**
 * Journey enquiry form.
 *
 * Submits through a Server Action which re-validates everything and hands the
 * enquiry to the delivery module. The UI reports exactly what happened: it
 * only says an enquiry was sent when it actually reached a destination.
 *
 * `defaults` seeds the fields from whatever the hero starter already collected.
 * Values returned by a failed submission always win over them, so a correction
 * is never overwritten.
 */
export function BookingForm({
  locale,
  className,
  defaults,
  showIntro = true,
}: {
  locale: Locale;
  className?: string;
  defaults?: Partial<Inquiry>;
  /** Turn off when the surrounding page supplies its own heading. */
  showIntro?: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState
  );

  const copy = formCopy;
  const label = copy.labels;
  const errors = state.status === "invalid" ? state.errors : {};
  const values: Partial<Inquiry> | undefined =
    ("values" in state ? state.values : undefined) ?? defaults;

  const message = (code?: InquiryErrorCode) =>
    code ? errorMessages[code][locale] : undefined;

  // Stop the date picker offering past days. Set on the DOM node after mount
  // rather than rendered, so the prerendered HTML carries no build-time date
  // and there is nothing to mismatch on hydration. The server rejects past
  // dates regardless of what the picker allows.
  const dateRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const el = dateRef.current;
    if (el) el.min = new Date().toISOString().slice(0, 10);
  }, []);

  const listId = `inquiry-locations-${locale}`;

  if (state.status === "sent") {
    return (
      <div
        className={cn(
          "rounded-2xl bg-card p-7 shadow-xl ring-1 ring-ink/10",
          className
        )}
      >
        <Outcome
          tone="success"
          icon={<CheckCircle2Icon aria-hidden className="size-5" />}
          title={copy.outcomes.sentTitle[locale]}
          body={
            <>
              {copy.outcomes.sentBody[locale]}{" "}
              <span className="numeric font-semibold text-ink">
                {state.reference}
              </span>
              .
            </>
          }
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl bg-card p-5 shadow-xl ring-1 ring-ink/10 sm:p-7",
        className
      )}
    >
      {showIntro ? (
        <div className="mb-5">
          <h2 className="text-h4 text-ink">{copy.intro.title[locale]}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {copy.intro.lead[locale]}
          </p>
        </div>
      ) : null}

      {state.status === "unconfigured" ? (
        <Outcome
          className="mb-5"
          tone="notice"
          icon={<InfoIcon aria-hidden className="size-5" />}
          title={copy.outcomes.unconfiguredTitle[locale]}
          body={
            <>
              {copy.outcomes.unconfiguredBody[locale]}{" "}
              <code
                dir="ltr"
                className="rounded bg-ink/5 px-1 py-0.5 text-[0.8em]"
              >
                lib/inquiry/delivery.ts
              </code>{" "}
              {copy.outcomes.unconfiguredSuffix[locale]}
            </>
          }
        />
      ) : null}

      {state.status === "error" ? (
        <Outcome
          className="mb-5"
          tone="error"
          icon={<AlertTriangleIcon aria-hidden className="size-5" />}
          title={copy.outcomes.errorTitle[locale]}
          body={copy.outcomes.errorBody[locale]}
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

      <form action={formAction} noValidate className="flex flex-col gap-4">
        {/* Hidden from people and assistive tech; only bots fill it in. */}
        <div aria-hidden className="hidden">
          <label htmlFor="company">{label.company[locale]}</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <Field
          label={label.tripType[locale]}
          name="tripType"
          error={message(errors.tripType)}
        >
          <Select
            name="tripType"
            defaultValue={values?.tripType}
            invalid={!!errors.tripType}
          >
            <option value="">{label.tripTypePlaceholder[locale]}</option>
            {TRIP_TYPES.map((t) => (
              <option key={t} value={t}>
                {tripTypeLabels[t][locale]}
              </option>
            ))}
          </Select>
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={label.pickup[locale]}
            name="pickup"
            required
            error={message(errors.pickup)}
          >
            <Input
              name="pickup"
              list={listId}
              placeholder={label.pickupPlaceholder[locale]}
              defaultValue={values?.pickup}
              invalid={!!errors.pickup}
              autoComplete="off"
            />
          </Field>

          <Field
            label={label.destination[locale]}
            name="destination"
            required
            error={message(errors.destination)}
          >
            <Input
              name="destination"
              list={listId}
              placeholder={label.destinationPlaceholder[locale]}
              defaultValue={values?.destination}
              invalid={!!errors.destination}
              autoComplete="off"
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
          <Field
            label={label.date[locale]}
            name="date"
            required
            error={message(errors.date)}
          >
            <Input
              ref={dateRef}
              type="date"
              name="date"
              defaultValue={values?.date}
              invalid={!!errors.date}
            />
          </Field>

          <Field
            label={label.time[locale]}
            name="time"
            required
            error={message(errors.time)}
          >
            <Input
              type="time"
              name="time"
              defaultValue={values?.time}
              invalid={!!errors.time}
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={label.passengers[locale]}
            name="passengers"
            required
            error={message(errors.passengers)}
          >
            <Input
              type="number"
              name="passengers"
              min={1}
              max={60}
              inputMode="numeric"
              placeholder="2"
              defaultValue={values?.passengers}
              invalid={!!errors.passengers}
            />
          </Field>

          <Field
            label={label.luggage[locale]}
            name="luggage"
            hint={label.optional[locale]}
            error={message(errors.luggage)}
          >
            <Input
              type="number"
              name="luggage"
              min={0}
              max={99}
              inputMode="numeric"
              placeholder="2"
              defaultValue={values?.luggage}
              invalid={!!errors.luggage}
            />
          </Field>
        </div>

        <Field
          label={label.flightNumber[locale]}
          name="flightNumber"
          hint={label.flightHint[locale]}
          error={message(errors.flightNumber)}
        >
          <Input
            name="flightNumber"
            placeholder="SV 553"
            defaultValue={values?.flightNumber}
            invalid={!!errors.flightNumber}
            autoComplete="off"
          />
        </Field>

        <hr className="my-1 border-border" />

        <Field
          label={label.name[locale]}
          name="name"
          required
          error={message(errors.name)}
        >
          <Input
            name="name"
            autoComplete="name"
            placeholder={label.namePlaceholder[locale]}
            defaultValue={values?.name}
            invalid={!!errors.name}
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={label.email[locale]}
            name="email"
            error={message(errors.email)}
          >
            <Input
              type="email"
              name="email"
              dir="ltr"
              autoComplete="email"
              placeholder="you@example.com"
              defaultValue={values?.email}
              invalid={!!errors.email}
            />
          </Field>

          <Field
            label={label.phone[locale]}
            name="phone"
            error={message(errors.phone)}
          >
            <Input
              type="tel"
              name="phone"
              dir="ltr"
              autoComplete="tel"
              placeholder="+966 ..."
              defaultValue={values?.phone}
              invalid={!!errors.phone}
            />
          </Field>
        </div>

        <Field
          label={label.notes[locale]}
          name="notes"
          hint={label.notesHint[locale]}
          error={message(errors.notes)}
        >
          <textarea
            id="notes"
            name="notes"
            rows={3}
            maxLength={2000}
            defaultValue={values?.notes}
            aria-invalid={!!errors.notes}
            className="w-full resize-y rounded-lg border border-input bg-transparent px-3 py-2.5 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive"
            placeholder={label.notesPlaceholder[locale]}
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

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {copy.privacy[locale]}
        </p>
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
      <label
        htmlFor={name}
        className="flex items-baseline justify-between gap-2 text-sm font-medium text-ink"
      >
        <span>
          {label}
          {required ? (
            <span className="ms-0.5 text-destructive" aria-hidden>
              *
            </span>
          ) : null}
        </span>
        {hint ? (
          <span className="text-xs font-normal text-muted-foreground">
            {hint}
          </span>
        ) : null}
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

  return React.cloneElement(
    children as React.ReactElement<Record<string, unknown>>,
    {
      id: name,
      "aria-describedby": hasError ? errorId : undefined,
    }
  );
}

const controlClass =
  "h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive";

function Input({
  invalid,
  className,
  ...props
}: React.ComponentProps<"input"> & { invalid?: boolean }) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(controlClass, className)}
    />
  );
}

function Select({
  invalid,
  className,
  children,
  ...props
}: React.ComponentProps<"select"> & { invalid?: boolean }) {
  return (
    <select
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(
        controlClass,
        "cursor-pointer appearance-none bg-no-repeat pe-9",
        className
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23707a76' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        backgroundPosition: "right 0.75rem center",
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
    <div
      role="status"
      aria-live="polite"
      className={cn("flex gap-3 rounded-xl p-4", tones[tone], className)}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div className="text-sm">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 leading-relaxed opacity-90">{body}</p>
      </div>
    </div>
  );
}
