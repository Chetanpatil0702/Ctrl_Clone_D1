"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const QAS: QA[] = [
  { q: "Do you have a mobile wallet application?", a: "Yes, available on iOS and Android." },
  { q: "Can I migrate my MetaMask, Phantom or Keplr wallet to Ctrl?", a: "Yes, using your seed phrase in a few seconds." },
  { q: "How do I connect to a dapp if I don't see the Ctrl logo?", a: "Click the first wallet (e.g. MetaMask) and enable 'prioritize Ctrl'." },
  { q: "What is a non-custodial wallet?", a: "You control your seed phrase, private keys and assets." },
  { q: "How do you handle security?", a: "We use state-of-the-art encryption and security protocols to protect your assets." },
  { q: "What chains are supported?", a: "Ctrl Wallet supports millions of assets and NFTs on 2,300+ blockchains." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="support" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {QAS.map((qa, idx) => (
            <QAItem 
              key={idx} 
              q={qa.q} 
              a={qa.a} 
              isOpen={openIndex === idx} 
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface QAItemProps extends QA {
  isOpen: boolean;
  onToggle: () => void;
}

function QAItem({ q, a, isOpen, onToggle }: QAItemProps) {
  return (
    <div>
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{q}</span>
        <span 
          className="text-white/60 transform transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ↓
        </span>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "200px" : "0", // Adjust max-height as needed
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? "1.5rem" : "0", // pb-6
          paddingLeft: isOpen ? "1.5rem" : "0", // px-6
          paddingRight: isOpen ? "1.5rem" : "0", // px-6
        }}
      >
        <p className="text-white/80 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}


