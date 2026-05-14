interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[var(--color-milk)] text-[var(--color-ink)]">
      <div className="pointer-events-none absolute left-0 top-0 h-48 w-full bg-[radial-gradient(circle_at_top_left,_rgba(209,143,93,0.24),_transparent_32%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-24 h-60 w-60 rounded-full bg-[rgba(209,143,93,0.18)] blur-2xl" />

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-xl rounded-[2rem] border border-[rgba(62,44,36,0.12)] bg-[var(--color-card)]/95 p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.75rem] bg-[var(--color-bean)] text-3xl text-[var(--color-cream)] shadow-sm">
              ☕
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-mocha)]">Cozy Coffee Shop</p>
              <h1 className="mt-2 text-5xl font-[var(--font-display)] font-bold leading-tight text-[var(--color-espresso)]">
                Bingo Mixer
              </h1>
            </div>
          </div>

          <p className="text-[1.05rem] leading-relaxed text-[var(--color-ink)]">
            Pull up a chair, discover who belongs in your table, and collect five good stories in a row.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-[rgba(62,44,36,0.12)] bg-[var(--color-cream)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[var(--color-espresso)] mb-3">How it works</h2>
            <ul className="space-y-3 text-sm text-[var(--color-mocha)]">
              <li>• Meet someone who matches the prompt</li>
              <li>• Tap a square to mark it off</li>
              <li>• Bingo when five are done in a row</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="mt-10 inline-flex w-full items-center justify-center rounded-[1.5rem] bg-[var(--color-bean)] px-6 py-4 text-lg font-semibold uppercase tracking-[0.08em] text-[var(--color-cream)] shadow-[0_16px_40px_rgba(62,44,36,0.18)] transition duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Start brewing
          </button>
        </div>
      </div>
    </div>
  );
}
