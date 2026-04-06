import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-content">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              David Wylie for County Commissioner
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Republican Fighter for Denton County Precinct 4. Fighting for
              better roads, safer communities, and responsible government.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-3 uppercase tracking-wide text-sm">
              Menu
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/endorsements", label: "Endorsements" },
                { href: "/contact", label: "Contact" },
                { href: "/donate", label: "Donate" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-white transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-3 uppercase tracking-wide text-sm">
              Contact Us
            </h4>
            <div className="flex flex-col gap-2 mb-4">
              <Link
                href="/contact"
                className="btn btn-primary btn-sm text-white w-fit"
              >
                Send a Message
              </Link>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/groups/2412414962464899"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <h4 className="font-bold mb-2">Subscribe for Updates</h4>
          <p className="text-sm opacity-80 mb-4">
            Receive the latest updates, news, and information from the campaign.
          </p>
          <form action="/api/subscribe" method="POST" className="flex gap-2 max-w-md">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="input input-bordered flex-1 text-base-content bg-white"
              required
            />
            <button type="submit" className="btn btn-primary text-white">
              Subscribe
            </button>
          </form>
        </div>

        {/* Legal */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs opacity-60">
          <p>
            Political Advertisement Paid for by David Wylie for County
            Commissioner © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
