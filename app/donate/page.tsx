import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faChartLine, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const metadata: Metadata = {
  title: "Donate - David Wylie for County Commissioner",
  description:
    "Support David Wylie for Denton County Commissioner with a campaign donation.",
};

export default function DonatePage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Donate</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">
            Donate to the Campaign
          </h1>
          <p className="text-xl text-white/80 max-w-xl">
            Stand with a neighbor who will stand up for you. Invest in Denton
            County&apos;s future.
          </p>
        </div>
      </section>

      {/* WHY DONATE */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-secondary mb-6">
            Ask yourself:
          </h2>
          <p className="text-xl text-base-content/80 font-semibold mb-8">
            Will Precinct 4 finally get a Commissioner who lives here, works
            here, and answers to <em>you</em>?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {(
              [
                { icon: faRoad, text: "Crumbling roads and mounting traffic congestion" },
                { icon: faChartLine, text: "Explosive growth with no leadership" },
                { icon: faHandshake, text: "Precinct 4 ignored for too long" },
              ] as { icon: IconDefinition; text: string }[]
            ).map((item) => (
              <div
                key={item.text}
                className="bg-base-100 rounded-xl border border-base-200 shadow-sm p-6 text-center"
              >
                <div className="text-primary mb-3">
                  <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
                </div>
                <p className="text-base-content/80 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-base-content/70 text-lg leading-relaxed max-w-2xl mx-auto">
            David Wylie is not just another candidate — he&apos;s a bold
            conservative voice with a proven record of standing up for the
            people. But this campaign can&apos;t do it alone. Your donation
            helps fund yard signs, door-knocking efforts, advertising, and
            events across Precinct 4.
          </p>
        </div>
      </section>

      {/* DONATION FORM */}
      <section className="py-20 bg-base-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-8">
            <h2 className="text-2xl font-extrabold text-secondary mb-2">
              Make a Donation
            </h2>
            <p className="text-base-content/70 mb-6 text-sm">
              Political Advertisement Paid for by David Wylie for County
              Commissioner. Contributions are not tax deductible.
            </p>

            {/* Donation amount selector */}
            <div className="mb-6">
              <p className="font-semibold mb-3">Select an amount:</p>
              <div className="flex flex-wrap gap-3">
                {["$25", "$50", "$100", "$250", "$500", "Other"].map(
                  (amt) => (
                    <button
                      key={amt}
                      type="button"
                      className="btn btn-outline btn-primary font-bold hover:btn-primary hover:text-white"
                    >
                      {amt}
                    </button>
                  )
                )}
              </div>
            </div>

            <form action="/api/donate" method="POST" className="space-y-4">
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
                  <span className="label-text font-semibold">Email *</span>
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
                  <span className="label-text font-semibold">Employer</span>
                </label>
                <input
                  type="text"
                  name="employer"
                  placeholder="Company or self-employed"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Occupation</span>
                </label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Your occupation"
                  className="input input-bordered"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary text-white w-full font-bold text-lg mt-4"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
