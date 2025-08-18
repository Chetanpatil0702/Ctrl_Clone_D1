import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="#">Wallet</Link></li>
              <li><Link href="#">NFT gallery</Link></li>
              <li><Link href="#">Connect</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Security</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="#">Audits</Link></li>
              <li><Link href="#">Best practices</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">News</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Ctrl. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#">Terms of use</Link>
            <span>•</span>
            <Link href="#">Privacy policy</Link>
            <span>•</span>
            <Link href="#">Cookie preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


