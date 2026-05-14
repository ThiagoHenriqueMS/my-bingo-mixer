interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-[rgba(26,16,10,0.7)] flex items-center justify-center p-5 z-50">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-[rgba(62,44,36,0.16)] bg-[var(--color-card)] p-8 text-center shadow-[0_30px_70px_rgba(46,25,10,0.18)] animate-[float-in_0.45s_ease-out]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-bean)] text-[var(--color-cream)] text-3xl shadow-xl">
          ☕
        </div>
        <div className="mt-10">
          <h2 className="text-4xl font-[var(--font-display)] font-bold text-[var(--color-espresso)] mb-3">BINGO!</h2>
          <p className="text-[var(--color-mocha)] mb-6">
            Your board just got a perfect pour.
          </p>
          <button
            onClick={onDismiss}
            className="w-full rounded-[1.5rem] bg-[var(--color-bean)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)] shadow-[0_16px_40px_rgba(62,44,36,0.18)] transition duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Keep sipping
          </button>
        </div>
      </div>
    </div>
  );
}
