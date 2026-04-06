import Image from "next/image";
import Link from "next/link";

const priorities = [
  {
    title: "Build Roads",
    description:
      "Fixing our roads and relieving congestion will be my #1 priority. In the last 10 years, not a single major road project has been started in Southwest Denton County. While I-35E has been completely rebuilt, I-35W and key corridors like US377 and FM407 have sat unfinished or untouched for years.",
    icon: "🚧",
  },
  {
    title: "Government Growth",
    description:
      "The County has clear responsibilities: Public Safety, Public Health, Roads & Infrastructure, Elections, Courts, and Tax Collection. Nothing more. Nothing less. Smart, limited, effective government. That's what I'll fight for.",
    icon: "🏛️",
  },
  {
    title: "Support for Police, Fire & Safety",
    description:
      "Public safety isn't just a priority — it's personal to me. My family serves in public safety. As your Commissioner, I will fully support our police, fire, EMS, and first responders, and work to combat human trafficking.",
    icon: "🚔",
  },
  {
    title: "Secure Elections",
    description:
      "As an election judge and longtime grassroots leader, I've spent my entire adult life working inside our election process. I will defend Denton County's secure election systems and prioritize transparency in every election.",
    icon: "🗳️",
  },
  {
    title: "Land Use and Development",
    description:
      "As President of the Argyle Municipal Development District, I've worked to manage growth responsibly — protecting our open spaces and ensuring development serves citizens, not government budgets or wealthy developers.",
    icon: "🌿",
  },
  {
    title: "Protecting Our Communities",
    description:
      "Denton County is one of the fastest-growing counties in Texas. As your Commissioner, I will ensure that new development aligns with our laws and values, and stand firm in protecting the character and traditions that make Denton County great.",
    icon: "🏡",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="https://wyliefordenton.com/wp-content/uploads/2026/03/David-Wyle-Kick-off-105.jpg"
          alt="David Wylie Campaign"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
            Republican Fighter
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 max-w-2xl">
            ASK YOURSELF
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-semibold mb-6 max-w-xl">
            Will Denton County honor <em>YOUR</em> needs and wishes — or
            someone else&apos;s?
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 max-w-md">
            <p className="text-white font-bold mb-2">Denton County owes you:</p>
            <ul className="text-white/90 space-y-1 text-sm">
              <li>✓ Better Roads</li>
              <li>✓ Less Congestion</li>
              <li>✓ Better Infrastructure</li>
              <li>✓ Safer Roads</li>
              <li>✓ A Denton County that works for YOU</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/donate" className="btn btn-primary text-white text-lg px-8 font-bold">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary text-lg px-8">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="bg-base-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-base-content/80 leading-relaxed mb-6">
            Southeast Denton County gets road money — but{" "}
            <strong>Precinct 4, west Denton County</strong> where you live —
            gets daily traffic headaches! SH114, FM156 and FM1171 were the last
            road projects started in SW Denton County over ten years ago.{" "}
            <strong>Nothing has been done</strong> to improve traffic congestion
            we face every day.
          </p>
          <Link href="/about" className="btn btn-secondary text-white font-bold">
            That&apos;s Not All... Learn More About David
          </Link>
        </div>
      </section>

      {/* PRIORITIES SECTION */}
      <section className="py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
              Impact Needed
            </p>
            <h2 className="text-4xl font-extrabold text-secondary">
              My Priorities for Denton County
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorities.map((p) => (
              <div
                key={p.title}
                className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="card-body">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="card-title text-secondary font-bold text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA SECTION */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Donate To David Wylie for Commissioner
          </h2>
          <p className="text-xl font-semibold mb-4 text-white/90">
            Stand With a Fighter. Invest in Real Change.
          </p>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            For too long, Precinct 4 has been ignored. Crumbling roads. Mounting
            traffic congestion. Explosive growth with no leadership. That ends
            now. David Wylie is a bold conservative voice with a proven record —
            but this campaign can&apos;t do it alone.
          </p>
          <Link href="/donate" className="btn btn-primary text-white text-lg px-10 font-bold">
            Donate to the Campaign
          </Link>
        </div>
      </section>

      {/* FIGHTER CTA */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-base-content/70 uppercase tracking-widest mb-2">
            How do we deliver real change for this county?
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            Electing A Real Republican Fighter
          </h2>
          <p className="text-xl text-primary font-bold mb-8">
            To Fight the Battles Others Won&apos;t!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn btn-primary text-white font-bold px-8">
              Volunteer Today
            </Link>
            <Link href="/endorsements" className="btn btn-outline btn-secondary font-bold px-8">
              See Endorsements
            </Link>
          </div>
        </div>
      </section>

      {/* WORKING HARD BANNER */}
      <section className="bg-primary text-white py-8 text-center">
        <p className="text-lg font-bold uppercase tracking-widest">
          Working Hard. Protecting Freedom. Serving You.
        </p>
      </section>
    </>
  );
}

