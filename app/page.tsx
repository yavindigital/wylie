import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faLandmark,
  faShield,
  faCheckToSlot,
  faTreeCity,
  faHouseFlag,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const priorities: { title: string; description: string; icon: IconDefinition }[] = [
  {
    title: "Build Roads",
    description:
      "Fixing our roads and relieving congestion will be my #1 priority. In the last 10 years, not a single major road project has been started in Southwest Denton County. While I-35E has been completely rebuilt, I-35W and key corridors like US377 and FM407 have sat unfinished or untouched for years.",
    icon: faRoad,
  },
  {
    title: "Government Growth",
    description:
      "The County has clear responsibilities: Public Safety, Public Health, Roads & Infrastructure, Elections, Courts, and Tax Collection. Nothing more. Nothing less. Smart, limited, effective government. That's what I'll fight for.",
    icon: faLandmark,
  },
  {
    title: "Support for Police, Fire & Safety",
    description:
      "Public safety isn't just a priority — it's personal to me. My family serves in public safety. As your Commissioner, I will fully support our police, fire, EMS, and first responders, and work to combat human trafficking.",
    icon: faShield,
  },
  {
    title: "Secure Elections",
    description:
      "As an election judge and longtime grassroots leader, I've spent my entire adult life working inside our election process. I will defend Denton County's secure election systems and prioritize transparency in every election.",
    icon: faCheckToSlot,
  },
  {
    title: "Land Use and Development",
    description:
      "As President of the Argyle Municipal Development District, I've worked to manage growth responsibly — protecting our open spaces and ensuring development serves citizens, not government budgets or wealthy developers.",
    icon: faTreeCity,
  },
  {
    title: "Protecting Our Communities",
    description:
      "Denton County is one of the fastest-growing counties in Texas. As your Commissioner, I will ensure that new development aligns with our laws and values, and stand firm in protecting the character and traditions that make Denton County great.",
    icon: faHouseFlag,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/kickoff-hero.jpg"
          alt="David Wylie at his campaign kickoff with Denton County neighbors"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
            Denton County Commissioner · Precinct 4
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 max-w-2xl">
            Your Neighbor.<br />Your Commissioner.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-semibold mb-6 max-w-xl">
            David Wylie lives here, works here, and is ready to serve the
            people of Precinct 4 — not special interests.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 max-w-md">
            <p className="text-white font-bold mb-2">What you deserve from Denton County:</p>
            <ul className="text-white/90 space-y-1 text-sm">
              <li>✓ Better Roads &amp; Less Congestion</li>
              <li>✓ Safe Communities for Your Family</li>
              <li>✓ Responsible, Limited Government</li>
              <li>✓ Secure, Transparent Elections</li>
              <li>✓ A Commissioner Who Answers to You</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/donate" className="btn btn-primary text-white text-lg px-8 font-bold">
              Support David
            </Link>
            <Link href="/volunteer" className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary text-lg px-8">
              Get Involved
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
            gets daily traffic headaches. SH114, FM156, and FM1171 were the last
            road projects started in SW Denton County — over ten years ago.{" "}
            <strong>David knows this county because he lives in it.</strong> And
            he&apos;s ready to get things done.
          </p>
          <Link href="/about" className="btn btn-secondary text-white font-bold">
            Meet David Wylie
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
                  <div className="text-primary mb-3">
                    <FontAwesomeIcon icon={p.icon} className="w-8 h-8" />
                  </div>
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

      {/* COMMUNITY PHOTO BREAK */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/kickoff-rally.jpg"
          alt="David Wylie with supporters at a community rally"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
          <p className="text-white text-2xl md:text-4xl font-extrabold text-center px-4">
            Rooted in Denton County. Ready to Serve.
          </p>
        </div>
      </section>

      {/* DONATE CTA SECTION */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Invest in Denton County&apos;s Future
          </h2>
          <p className="text-xl font-semibold mb-4 text-white/90">
            Stand with a neighbor who will stand up for you.
          </p>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            For too long, Precinct 4 has been overlooked. Crumbling roads.
            Mounting congestion. Explosive growth with no leadership. David
            Wylie is a proven community servant with deep local roots — and he
            needs your support to get across the finish line.
          </p>
          <Link href="/donate" className="btn btn-primary text-white text-lg px-10 font-bold">
            Donate to the Campaign
          </Link>
        </div>
      </section>

      {/* PEOPLE FIRST CTA */}
      <section className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-80">
            <Image
              src="/images/kickoff-community.jpg"
              alt="David Wylie with Denton County community members"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
              People First
            </h3>
            <h2 className="text-4xl font-extrabold text-secondary mb-4">
              A Commissioner Who Knows This County
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6">
              David Wylie isn&apos;t a career politician — he&apos;s a neighbor,
              a business owner, a husband, and a grandfather who sees the same
              problems you do every single day. He&apos;s earned the trust of
              community leaders and everyday residents alike because he
              listens, shows up, and gets things done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/volunteer" className="btn btn-primary text-white font-bold px-8">
                Volunteer Today
              </Link>
              <Link href="/endorsements" className="btn btn-outline btn-secondary font-bold px-8">
                See Who Supports David
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING HARD BANNER */}
      <section className="bg-primary text-white py-8 text-center">
        <p className="text-lg font-bold uppercase tracking-widest">
          Working Hard. Serving Denton County. Putting People First.
        </p>
      </section>
    </>
  );
}

