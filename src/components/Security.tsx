export default function Security() {
  return (
    <section id="security" className="py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">The secure way to Web3</h2>
            <p className="mt-4 text-white/80 max-w-2xl">
              Track your portfolio, connect your hardware wallets, and stay protected with malicious address alerts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Portfolio overview</h3>
              <p className="mt-2 text-sm text-white/80">Track your entire portfolio in one place.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Hardware wallet support</h3>
              <p className="mt-2 text-sm text-white/80">Use Ledger and Trezor for cold storage.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Malicious address alerts</h3>
              <p className="mt-2 text-sm text-white/80">We flag suspicious addresses for you.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">No IP tracking</h3>
              <p className="mt-2 text-sm text-white/80">We do not record any user IP addresses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


