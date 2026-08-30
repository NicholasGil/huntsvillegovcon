import { submitSampleOptIn } from "@/app/sample/actions";

export function SampleOptInForm({
  next = "/sample",
  className = "mt-10 max-w-md",
}: {
  next?: "/" | "/sample";
  className?: string;
}) {
  return (
    <form action={submitSampleOptIn} className={className}>
      <input type="hidden" name="next" value={next} />
      <label htmlFor="sample-email" className="block text-sm text-ink">
        Email
      </label>
      <input
        id="sample-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        className="mt-2 w-full border border-rule bg-paper px-3 py-2"
      />
      <button
        type="submit"
        className="mt-4 bg-brick px-4 py-2.5 text-sm text-paper hover:bg-brick-dark"
      >
        Email me the sample
      </button>
      <p
        id="sample-invalid"
        className="mt-4 hidden text-sm text-brick target:block"
        role="alert"
      >
        That email address is not valid.
      </p>
      <p
        id="sample-received"
        className="mt-4 hidden text-sm text-muted target:block"
        role="status"
      >
        Request received. Email delivery is not wired in this scaffold.
      </p>
    </form>
  );
}
