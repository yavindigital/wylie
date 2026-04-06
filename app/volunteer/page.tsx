import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer - David Wylie for County Commissioner",
  description:
    "Join the fight! Volunteer for the David Wylie for County Commissioner campaign.",
};

const volunteerOptions = [
  {
    title: "Knock on Doors",
    description:
      "Help us reach voters in Precinct 4 by going door-to-door to share David's message.",
    icon: "🚪",
  },
  {
    title: "Phone Banking",
    description:
      "Call voters from the comfort of your home to talk about the issues that matter to Denton County.",
    icon: "📞",
  },
  {
    title: "Put Up Yard Signs",
    description:
      "Show your support by placing campaign signs in your yard or neighborhood.",
    icon: "🪧",
  },
  {
    title: "Host a Meetup",
    description:
      "Invite friends and neighbors to meet David at your home or local community center.",
    icon: "🏠",
  },
  {
    title: "Share on Social Media",
    description:
      "Spread the word on Facebook and other social platforms to reach more voters.",
    icon: "📱",
  },
  {
    title: "Help at Events",
    description:
      "Assist at campaign events, rallies, and community gatherings across Denton County.",
    icon: "🎉",
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Volunteer</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Volunteer</h1>
          <p className="text-xl text-white/80 max-w-xl">
            Join the fight for Denton County! Together we can deliver real change
            for Precinct 4.
          </p>
        </div>
      </section>

      {/* VOLUNTEER OPTIONS */}
      <section className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-secondary text-center mb-12">
            Ways to Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {volunteerOptions.map((opt) => (
              <div
                key={opt.title}
                className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="card-body">
                  <div className="text-4xl mb-3">{opt.icon}</div>
                  <h3 className="card-title text-secondary font-bold">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SIGNUP FORM */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-base-200 p-8">
            <h2 className="text-2xl font-extrabold text-secondary mb-2">
              Sign Up to Volunteer
            </h2>
            <p className="text-base-content/70 mb-6">
              Fill out the form below and a campaign representative will reach
              out to coordinate your involvement.
            </p>
            <form action="/api/volunteer" method="POST" className="space-y-4">
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
                  <span className="label-text font-semibold">City / Community</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Argyle, Flower Mound, Justin..."
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">How would you like to help?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {volunteerOptions.map((opt) => (
                    <label key={opt.title} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="interests"
                        value={opt.title}
                        className="checkbox checkbox-primary"
                      />
                      <span className="text-sm">{opt.title}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn btn-primary text-white w-full font-bold text-lg mt-4">
                Sign Up to Volunteer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="bg-secondary text-white py-12 text-center">
        <p className="text-lg mb-4">
          Can&apos;t volunteer but still want to help? Donate to the campaign.
        </p>
        <Link href="/donate" className="btn btn-primary text-white font-bold">
          Donate Now
        </Link>
      </section>
    </>
  );
}
