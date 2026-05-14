import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[88px] items-center justify-center rounded-[1.35rem] border px-4 py-5 text-center text-sm font-medium leading-snug shadow-[0_10px_25px_rgba(62,44,36,0.08)] transition-all duration-200 select-none';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[var(--color-honey)] border-[rgba(209,143,93,0.45)] text-[var(--color-espresso)] shadow-[0_0_0_4px_rgba(209,143,93,0.18)] scale-[1.01]'
      : 'bg-[var(--color-latte)] border-[rgba(166,124,97,0.35)] text-[var(--color-espresso)]'
    : 'bg-[var(--color-cream)] border-[rgba(145,98,68,0.16)] text-[var(--color-bean)] hover:bg-[rgba(209,143,93,0.12)] active:translate-y-0.5';

  const freeSpaceClasses = square.isFreeSpace
    ? 'bg-[var(--color-card)] border-[rgba(145,98,68,0.18)] text-[var(--color-espresso)] font-semibold'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="whitespace-pre-wrap break-words hyphens-auto">
        {square.text}
      </span>
      {square.isFreeSpace && (
        <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-mocha)]">
          Barista’s choice
        </span>
      )}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-2 right-2 text-[var(--color-espresso)] text-xs">✓</span>
      )}
    </button>
  );
}
