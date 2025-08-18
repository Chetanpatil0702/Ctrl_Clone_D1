import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[1200px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,_#8A63F9_0%,_transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span>$CTRL</span>
            <span className="opacity-60">One wallet for all your crypto</span>
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight">
            <span className="shimmer-text">Take Ctrl</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Create your wallet in seconds. Pay gas in USDC or CTRL across supported chains. Connect to every dapp.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <DownloadButton href="#download" />
            <Link
              href="#chains"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Explore features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


