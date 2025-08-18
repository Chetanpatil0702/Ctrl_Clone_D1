export default function Opportunity() {
  return (
    <section id="product" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Capture every opportunity on every chain.
            </h2>
            <div className="mt-6 space-y-4 text-white/80">
              <div>
                <h3 className="font-semibold">10M+ assets at your fingertips</h3>
                <p>Support for EVM chains, Cosmos, Solana, Bitcoin, THORChain, TRON and more.</p>
              </div>
              <div>
                <h3 className="font-semibold">Connect to every application</h3>
                <p>Works with dapps on 2,300+ blockchains and testnets.</p>
              </div>
              <div>
                <h3 className="font-semibold">One home for all your NFTs</h3>
                <p>Gallery across 30+ chains including ETH, BTC, Solana and more.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}


