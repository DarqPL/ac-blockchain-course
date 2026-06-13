# AGENTS.md

## Rules

- Always present options for the user to choose — never ask them to type free-form answers.
- Only edit `solution.ts`. **Never modify** `test.ts`.
- Never commit private keys, `.env` ~~files, or~~ secrets.
- Before finishing any task: run `npx ts-node run.ts <lesson>` and confirm tests pass.
- Keep code clean, follow TypeScript strict mode, and follow security best practices.

## Project overview

Blockchain course for final-year CS students. Each lesson lives in `lessons/baiX_Y/`.

## How to run lessons

- **Preferred:** `npx ts-node run.ts bai1_1` (or `npm run lesson bai1_1`)
- **Manual:** `cd lessons/bai1_1 && npx ts-node test.ts`
- The argument is the lesson folder name (e.g. `bai1_1`, `bai7_2`).

## Lesson structure

- `problem.md` – exercise description (lessons bai1–bai3)
- `README.md` – exercise description (lessons bai4–bai7, often Hardhat/Solidity tasks)
- `solution.ts` – where students write code (only bai1_1 and bai2_1 have these)
- `test.ts` – auto-test that imports from `solution.ts` and runs assertions

## Key conventions

- `run.ts` dynamically imports `<lesson>/test.ts` via ESM `import()`.
- Lessons bai4+ are external-tool exercises (Hardhat, Sepolia deploy, Etherscan verify) — they do not have `solution.ts` and their `test.ts` is a placeholder.

## Toolchain

- TypeScript (ESNext target, CommonJS, strict mode)
- `ethers` v6 for blockchain interaction
- No linter, formatter, or test framework — verification is via `test.ts` scripts only.
- `npm install` to restore deps; `ts-node` is required (global or via npx).