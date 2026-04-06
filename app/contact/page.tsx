import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - David Wylie for County Commissioner",
  description: "Get in touch with the David Wylie for County Commissioner campaign.",
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80">
            Have a question or want to get involved? Reach out to the campaign.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-base-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-base-200 p-8">
            <h2 className="text-2xl font-extrabold text-secondary mb-2">Send a Message</h2>
            <p className="text-base-content/70 mb-6">
              Fill out the form below and the campaign team will get back to you
              as soon as possible.
            </p>
            <form action="/api/contact" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">First Name *</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Last Name *</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email Address *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(817) 555-0000"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="General inquiry, volunteer info..."
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message *</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  className="textarea textarea-bordered h-32"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary text-white w-full font-bold text-lg mt-2">
                Send Message
              </button>
            </form>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 text-center">
            <p className="text-base-content/70 mb-4">Or connect with us on social media:</p>
            <a
              href="https://www.facebook.com/groups/2412414962464899"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
