type RevealerOptions = {
  /** Milliseconds between reveal ticks */
  tickMs?: number;
  /** Base characters revealed per tick */
  baseCharsPerTick?: number;
};

type TextRevealer = {
  push: (chunk: string) => void;
  finish: () => void;
  cancel: () => void;
};

/**
 * Queues incoming text and reveals it gradually — ChatGPT-style typing
 * even when the full answer arrives at once (local fallback).
 */
export function createTextRevealer(
  onUpdate: (text: string) => void,
  onComplete: () => void,
  options: RevealerOptions = {}
): TextRevealer {
  const tickMs = options.tickMs ?? 18;
  const baseCharsPerTick = options.baseCharsPerTick ?? 2;

  let pending = "";
  let displayed = "";
  let sourceDone = false;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let cancelled = false;

  const tick = () => {
    if (cancelled) return;

    if (pending.length > 0) {
      const catchUp = Math.min(6, Math.floor(pending.length / 24));
      const charsPerTick = Math.min(8, baseCharsPerTick + catchUp);
      const n = Math.min(pending.length, charsPerTick);
      displayed += pending.slice(0, n);
      pending = pending.slice(n);
      onUpdate(displayed);
      timer = setTimeout(tick, tickMs);
      return;
    }

    if (sourceDone) {
      timer = null;
      onComplete();
      return;
    }

    timer = setTimeout(tick, tickMs);
  };

  const ensureRunning = () => {
    if (!timer && !cancelled) tick();
  };

  return {
    push(chunk: string) {
      if (cancelled || !chunk) return;
      pending += chunk;
      ensureRunning();
    },
    finish() {
      sourceDone = true;
      ensureRunning();
    },
    cancel() {
      cancelled = true;
      if (timer) clearTimeout(timer);
      timer = null;
    },
  };
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
