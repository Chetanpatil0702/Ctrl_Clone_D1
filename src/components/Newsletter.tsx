"use client";

export default function Newsletter() {
  return (
    <section id="resources" className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Newsletter</h2>
        <p className="mt-3 text-white/80">
          Subscribe to receive the latest news and updates.
        </p>
        <form
          className="mt-6 flex gap-3 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full max-w-sm rounded-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
          />
          <button
            type="submit"
            className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}


