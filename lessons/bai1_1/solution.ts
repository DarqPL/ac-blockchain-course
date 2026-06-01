import { createHash } from "crypto";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  if (
    !block ||
    typeof block.index !== "number" ||
    !block.timestamp ||
    !Array.isArray(block.transactions) ||
    !block.previous_hash ||
    !block.current_hash
  ) {
    return false;
  }
  const data = `${block.index}${block.timestamp}${JSON.stringify(block.transactions)}${block.previous_hash}`;
  return block.current_hash === createHash("sha256").update(data).digest("hex");
}
