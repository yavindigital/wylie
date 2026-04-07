import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoGallery from "@/components/PhotoGallery";
import {
  faRoad,
  faLandmark,
  faShield,
  faCheckToSlot,
  faTreeCity,
  faHouseFlag,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"]);

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

type Priority = {
  title: string;
  icon: IconDefinition;
  body: string[];
  bullets?: string[];
  closing?: string;
};

const priorities: Priority[] = [
  {
    title: "Build Roads",
    icon: faRoad,
    body: [
      "Fixing our roads and relieving congestion will be my #1 priority.",
      "In the last 10 years, not a single major road project has been started in Southwest Denton County.",
      "While I-35E has been completely rebuilt, I-35W and key corridors like US377 and FM407 have sat unfinished or untouched for years.",
      "Most of our main roads are state highways, requiring coordination with TXDOT — and right now, that coordination just isn't happening.",
    ],
  },
  {
    title: "Government Growth",
    icon: faLandmark,
    body: [
      "With cities no longer able to annex surrounding areas, Denton County must take the lead in managing growth. And how we do it matters.",
      "We need to focus on what truly makes a great, livable community — while protecting our quality of life and preventing the gridlock, overcrowding, and strain we see in other fast-growing counties.",
      "The County has clear responsibilities:",
    ],
    bullets: [
      "Public Safety",
      "Public Health",
      "Roads & Infrastructure",
      "Elections",
      "Courts",
      "Tax Collection",
    ],
    closing:
      "Nothing more. Nothing less. We must deliver these essential services with excellence — and resist the temptation to expand government into areas better managed by cities or the state. Smart, limited, effective government. That's what I'll fight for.",
  },
  {
    title: "Support for Police, Fire, and Community Safety",
    icon: faShield,
    body: [
      "Public safety isn't just a priority — it's personal to me. My family serves in public safety, so I understand firsthand how important it is to give our first responders the tools, training, and support they need to protect our communities.",
      "As your Commissioner, I will:",
    ],
    bullets: [
      "Fully support our police, fire, EMS, and first responders",
      "Ensure they have the resources to keep our neighborhoods and schools safe",
      "Expand the county's efforts to combat human trafficking",
      "Work closely with ICE and law enforcement to remove dangerous illegal criminals from our communities",
    ],
  },
  {
    title: "Secure Elections",
    icon: faCheckToSlot,
    body: [
      "As an election judge and longtime grassroots leader, I've spent my entire adult life working inside our election process. I know firsthand what works, what doesn't, and where improvements are needed.",
      "Denton County is one of the most secure and efficient election systems in Texas — with reliable electronic systems that offer both convenience and strong safeguards for voters.",
      "Protecting election integrity requires constant vigilance.",
      "As your Commissioner, I will:",
    ],
    bullets: [
      "Defend Denton County's secure election systems",
      "Prioritize transparency, accountability, and public confidence in every election",
      "Use my experience to serve as a watchdog for the voter — ensuring fair, honest, and secure elections for all",
    ],
  },
  {
    title: "Land Use and Development",
    icon: faTreeCity,
    body: [
      "Growing up in Tarrant County, I watched firsthand as open land was traded for high-density developments, straining infrastructure and changing the character of communities. Now, I'm seeing those same patterns take hold in the City of Denton.",
      "As President of the Argyle Municipal Development District, I've worked to manage growth responsibly — protecting our open spaces, preserving our community's beauty, and ensuring development serves citizens, not government budgets or wealthy developers.",
      "As your Commissioner, I will:",
    ],
    bullets: [
      "Fight to preserve the character and natural beauty of Southwest Denton County",
      "Promote thoughtful, balanced development that protects property values and quality of life",
      "Push back against overdevelopment and high-density sprawl",
      "Always put residents and taxpayers first — not special interests",
    ],
  },
  {
    title: "Protecting Our Communities, Preserving Our Values",
    icon: faHouseFlag,
    body: [
      "Denton County is one of the fastest-growing counties in Texas — and most of that growth will happen on the west side of the county in the coming years. It's crucial that we manage this growth wisely to protect our way of life and ensure new communities strengthen, not weaken, what makes Denton County special.",
      "We've seen situations in other North Texas counties where communities have tried to operate outside of our shared laws and values. We cannot allow that here.",
      "As your Commissioner, I will:",
    ],
    bullets: [
      "Ensure that new development aligns with local, state, and federal laws",
      "Stand firm in protecting the character, culture, and traditions that make Denton County a great place to live",
      "Manage growth in a way that enhances our communities while safeguarding public safety, infrastructure, and quality of life",
    ],
  },
];

export default function HomePage() {
  const galleryImages = getGalleryImages();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/kickoff-hero.jpg"
          alt="David Wylie at his campaign kickoff with Denton County neighbors"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/92 via-secondary/70 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none mb-6">
              ASK YOURSELF
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-8">
              Will Denton County honor <em>YOUR</em> needs and wishes —<br className="hidden md:block" /> or someone else&apos;s?
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
              <p className="text-white font-bold mb-3 text-lg">Denton County owes you:</p>
              <ul className="text-white/90 space-y-2 text-base font-medium">
                {["Better Roads","Less Congestion","Better Infrastructure","Safer Roads","A Denton County that works for YOU"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="btn btn-primary text-white text-xl px-10 font-bold">
                Donate Now
              </Link>
              <Link href="/volunteer" className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary text-xl px-10">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section className="bg-base-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-base-content/80 leading-relaxed mb-4">
            Southeast Denton County gets road money — but{" "}
            <strong>Precinct 4, west Denton County where you live</strong> —
            gets daily traffic headaches!
          </p>
          <p className="text-base text-base-content/70 leading-relaxed mb-8">
            SH114, FM156 and FM1171 were the last road projects to be started in
            SW Denton County over ten years ago while Andy Eads was Commissioner.
            Since he left to become County Judge eight years ago, nothing has been
            done to improve traffic congestion we face every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn btn-primary text-white font-bold px-8">
              Let&apos;s Fix This Together
            </Link>
            <Link href="/about" className="btn btn-outline btn-secondary font-bold px-8">
              That&apos;s Not All...
            </Link>
          </div>
        </div>
      </section>

      {/* ── PODCAST ── */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Image
              src="/images/LoneStarLadies.png"
              alt="Lone Star Ladies Podcast thumbnail"
              width={80}
              height={80}
              className="rounded-lg object-cover shrink-0"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Featured On</p>
              <h2 className="text-2xl font-extrabold">Closed Primaries Podcast</h2>
            </div>
          </div>
          <a
            href="https://www.closedprimaries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white font-bold px-8 shrink-0"
          >
            Click Here to Listen
          </a>
        </div>
      </section>

      {/* ── PRIORITIES ── */}
      <section className="py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
              Impact Needed
            </p>
            <h2 className="text-4xl font-extrabold text-secondary">
              My Priorities for Denton County are as follows.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {priorities.map((p) => (
              <div
                key={p.title}
                className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="card-body gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-xl p-3 shrink-0">
                      <FontAwesomeIcon icon={p.icon} className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-extrabold text-secondary leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <div className="text-sm text-base-content/80 leading-relaxed space-y-3">
                    {p.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    {p.bullets && (
                      <ul className="space-y-1 pl-1">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-primary font-bold shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {p.closing && <p className="font-medium text-secondary/80">{p.closing}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK ── */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/kickoff-rally.jpg"
          alt="David Wylie with supporters at a community rally"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </section>

      {/* ── GALLERY PREVIEW ── */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-base-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                From the Campaign Trail
              </p>
              <h2 className="text-3xl font-extrabold text-secondary">
                Photo Gallery
              </h2>
            </div>
            <PhotoGallery images={galleryImages} />
            <div className="text-center mt-8">
              <Link
                href="/gallery"
                className="btn btn-outline btn-secondary font-bold px-10 text-base"
              >
                See All Photos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── DONATE CTA ── */}
      <section className="bg-base-200 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-secondary mb-3">
            Donate To David Wylie for Commissioner
          </h2>
          <p className="text-xl font-bold text-primary mb-6">
            Stand With a Fighter. Invest in Real Change.
          </p>
          <div className="text-base-content/80 space-y-3 leading-relaxed mb-4 text-base">
            <p>Ask yourself: Will Denton County honor YOUR needs and wishes — or someone else&apos;s?</p>
            <p>For too long, Precinct 4 has been ignored.</p>
            <p>Crumbling roads. Mounting traffic congestion. Explosive growth with no leadership.</p>
            <p className="font-bold text-secondary">That ends now.</p>
            <p>
              David Wylie is not just another candidate — he&apos;s a bold conservative voice
              with a proven record of standing up for the people.
            </p>
            <p>But this campaign can&apos;t do it alone.</p>
          </div>
          <Link href="/donate" className="btn btn-primary text-white text-lg px-10 font-bold mt-4">
            Donate to the Campaign
          </Link>
        </div>
      </section>

      {/* ── REAL CHANGE CTA ── */}
      <section className="bg-secondary text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-white/70 uppercase tracking-widest text-sm font-bold mb-3">
            How do we deliver real change for this county?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Electing A Real Republican Fighter
          </h2>
          <p className="text-xl text-primary font-bold mb-10">
            To Fight the Battles Others Won&apos;t!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn btn-primary text-white font-bold px-8 text-lg">
              Volunteer Today
            </Link>
            <Link href="/endorsements" className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary font-bold px-8 text-lg">
              See Endorsements
            </Link>
          </div>
        </div>
      </section>

      {/* ── WORKING HARD BANNER ── */}
      <section className="bg-primary text-white py-6 text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-widest">
          Working Hard. Protecting Freedom. Serving You.
        </p>
      </section>
    </>
  );
}

