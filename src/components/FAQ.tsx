"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const QAS: QA[] = [
  { q: "Do you have a mobile wallet application?", a: "Yes, available on iOS and Android." },
  { q: "Can I migrate my MetaMask, Phantom or Keplr wallet to Ctrl?", a: "Yes, using your seed phrase in a few seconds." },
  { q: "How do I connect to a dapp if I don't see the Ctrl logo?", a: "Click the first wallet (e.g. MetaMask) and enable 'prioritize Ctrl'." },
  { q: "What is a non-custodial wallet?", a: "You control your seed phrase, private keys and assets." },
];

export default function FAQ() {
  return (
    <section id="support" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {QAS.map((qa, idx) => (
            <QAItem key={idx} {...qa} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QAItem({ q, a }: QA) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{q}</span>
        <span className="text-white/60">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-6 pb-6 text-white/80 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}


