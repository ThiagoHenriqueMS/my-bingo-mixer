import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[var(--color-milk)] text-[var(--color-ink)]">
      <div className="pointer-events-none absolute left-[-6rem] top-20 h-48 w-48 rounded-full bg-[rgba(209,143,93,0.14)] blur-2xl" />
      <div className="flex flex-col min-h-full">
        <header className="flex items-center justify-between gap-3 border-b border-[rgba(62,44,36,0.12)] bg-[var(--color-card)]/95 px-5 py-4 shadow-sm backdrop-blur-sm">
          <button
            onClick={onReset}
            className="rounded-full border border-[rgba(62,44,36,0.12)] bg-[var(--color-cream)] px-4 py-2 text-sm font-semibold text-[var(--color-bean)] transition hover:bg-[var(--color-card)]"
          >
            ← Back
          </button>

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-mocha)]">Latte list</p>
            <h1 className="text-2xl font-[var(--font-display)] font-bold text-[var(--color-espresso)]">Coffee Bingo</h1>
          </div>

          <div className="w-16" />
        </header>

        <div className="px-5 pt-4">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[rgba(62,44,36,0.12)] bg-[var(--color-card)] p-4 shadow-[var(--shadow-soft)]">
            <p className="text-sm leading-relaxed text-[var(--color-mocha)]">
              Tap a square when you find someone who matches the prompt, then fill a row to earn your Bingo badge.
            </p>
          </div>
        </div>

        {hasBingo && (
          <div className="mx-5 mt-4 rounded-[1.75rem] border border-[rgba(209,143,93,0.28)] bg-[rgba(209,143,93,0.14)] px-4 py-3 text-center text-[var(--color-espresso)] shadow-sm">
            🎉 BINGO! You brewed a winning line.
          </div>
        )}

        <div className="flex-1 flex items-center justify-center p-5">
          <div className="w-full max-w-4xl rounded-[2rem] border border-[rgba(62,44,36,0.12)] bg-[var(--color-paper)] p-5 shadow-[var(--shadow-soft)]">
            <div className="mb-5 flex items-center justify-between rounded-[1.5rem] border border-[rgba(62,44,36,0.1)] bg-[var(--color-cream)] px-4 py-3 text-sm uppercase tracking-[0.22em] text-[var(--color-mocha)]">
              <span>Today’s board</span>
              <span>Barista’s choice</span>
            </div>
            <BingoBoard
              board={board}
              winningSquareIds={winningSquareIds}
              onSquareClick={onSquareClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
