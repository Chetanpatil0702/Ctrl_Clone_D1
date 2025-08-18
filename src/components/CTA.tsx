import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";

export default function CTA() {
  return (
    <section id="download" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Take Ctrl</h2>
        <p className="mt-3 text-white/80">Join 600,000+ people who trust Ctrl.</p>
        <div className="mt-8 flex items-center justify-center">
          <DownloadButton href="#download" />
        </div>
      </div>
    </section>
  );
}


