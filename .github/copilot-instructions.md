# Copilot Instructions for Bingo Mixer

This repository is a small interactive front-end app built with React, TypeScript, Vite, and Tailwind CSS v4.

## Project essentials
- Frontend-only SPA, no backend/server code.
- Uses React 19 + TypeScript with Vite.
- Tailwind v4 is configured in `src/index.css` via `@import 'tailwindcss'` and `@theme` tokens.
- Game logic is centralized in `src/hooks/useBingoGame.ts` with support helpers in `src/utils/bingoLogic.ts`.
- Question data lives in `src/data/questions.ts`.
- UI is composed from `src/components/` plus `src/App.tsx` and `src/main.tsx`.

## Useful commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm test`

## What to do first
- Preserve the existing component structure and the simple page flow.
- Keep state and game behavior in `useBingoGame.ts` and related components.
- Use current Tailwind v4 conventions, CSS-first tokens, and simple utility classes.
- Keep the app lightweight and accessible: focus on clear interactions and responsive layout.

## Key files
- `src/App.tsx` — top-level routing and screen rendering
- `src/components/StartScreen.tsx` — game entry UI
- `src/components/GameScreen.tsx` — bingo play area
- `src/components/BingoBoard.tsx` / `src/components/BingoSquare.tsx` — board rendering
- `src/components/BingoModal.tsx` — win/modal display
- `src/hooks/useBingoGame.ts` — game state, selection, restart
- `src/utils/bingoLogic.ts` — bingo detection and board utilities
- `src/data/questions.ts` — bingo prompts

## Best practices
- Keep UI and game logic separated.
- Use stable TypeScript typings from `src/types/index.ts`.
- Follow the existing style and naming conventions.
- Link to documentation rather than duplicating it: `README.md`, `workshop/GUIDE.md`, and the `.github/instructions/` notes.

## Avoid
- Do not add server-side APIs or backend dependencies.
- Do not rewrite the app into a different framework.
- Do not overcomplicate the small demo with large architecture changes.
