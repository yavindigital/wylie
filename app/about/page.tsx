import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About David Wylie - David Wylie for County Commissioner",
  description:
    "Learn about David Wylie — his background, values, and accomplishments in government.",
};

const accomplishments = [
  { year: "2023–present", title: "President, Argyle Municipal Development District" },
  { year: "2020–present", title: "State Republican Executive Committeeman – SD12" },
  { year: "2020–present", title: "Republican Precinct Chair 4198 Argyle" },
  { year: "2024", title: "Chairman Credentials Committee, Republican State Convention" },
  { year: "2024", title: "Chairman SD12 Denton Republican Convention" },
  { year: "2022", title: "Chairman Credentials Committee, Republican State Convention" },
  { year: "2021", title: "Grassroots America – We The People Champion of Freedom Award" },
  { year: "2020", title: "Area Leader, Denton County Republican Party" },
  { year: "2020", title: "Chairman Credentials Committee, Republican State Convention" },
  { year: "2018", title: "Registration Chair, 2018 & 2016 Republican State Convention" },
  { year: "2016", title: "Delegate pledged for Trump – Republican National Convention" },
  { year: "2014", title: "Chairman SD10 Tarrant Republican Convention" },
  { year: "2010–2016", title: "Area Leader, Tarrant County Republican Party" },
  { year: "1990–2016", title: "Republican Precinct Chair, Tarrant County" },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="relative py-20 bg-secondary text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://wyliefordenton.com/wp-content/uploads/2025/06/header_rounded_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-5xl font-extrabold">About</h1>
        </div>
      </section>

      {/* EARLY LIFE */}
      <section className="py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-secondary mb-4">
              An Early Love of Texas Liberty
            </h2>
            <p className="text-base-content/80 leading-relaxed mb-4">
              Being born into a middle-class family and raised in Arlington, I
              learned the basics of self-reliance and developed a deep love for
              Texas — its resilience, grit, and patriotism. I believe in God,
              Family &amp; then everything else, in that order.
            </p>
            <p className="text-base-content/80 leading-relaxed">
              From a young age, I worked for myself: mowing yards, delivering
              newspapers, and embracing the entrepreneurial spirit that still
              drives me today.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Rooted in Texas Values", "Entrepreneurial Spirit", "Driven by Purpose"].map(
                (tag) => (
                  <span key={tag} className="badge badge-primary text-white font-semibold py-3 px-4">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square max-w-sm mx-auto">
            <Image
              src="/images/david-flag.jpg"
              alt="David Wylie, candidate for Denton County Commissioner"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CAREER & SERVICE */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-secondary mb-6 text-center">
            Working Hard. Protecting Freedom. Serving You.
          </h2>
          <blockquote className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-primary italic text-base-content/80 leading-relaxed mb-8">
            &ldquo;Studying accounting, bookkeeping, and computer programming — leading
            to a career as a consultant helping companies small and large develop
            vital automation applications. I was troubled, however, as I saw
            local cities move to impose unreasonable limits on local entrepreneurs,
            their workforces, and the communities they served. That attack on
            liberty led me to volunteer for the local and state Republican Party.
            In this fight to safeguard liberty and prosperity, I've served as a
            precinct chair, election judge, and for the past 6 years as your
            representative on the 62-person Executive Committee of the Republican
            Party of Texas where I've concentrated on steering the direction of
            the Republican party toward laws that are pro-freedom and
            conservative. I was a national delegate for Donald Trump in 2016. And
            I have worked to get conservatives elected as well as ensure fair
            elections for over thirty years.&rdquo;
          </blockquote>

          <h3 className="text-2xl font-bold text-secondary mb-4">
            Building and Enjoying a Family
          </h3>
          <p className="text-base-content/80 leading-relaxed">
            Marrying my wife Debbie in 2017 brought me to Argyle and Denton
            County. Our blended family includes my son Hunter, who graduated from
            the University of Houston and lives there with his wife Lisa, as well
            as Debbie&apos;s adult sons Jason and Cody. Her daughter Ashley is
            married to Joseph and they have given us a lovely granddaughter —
            Isabella.
          </p>
        </div>
      </section>

      {/* ACCOMPLISHMENTS */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-secondary">
              What David Wylie Has Accomplished in Government
            </h2>
            <p className="text-base-content/60 mt-2 font-semibold uppercase tracking-widest text-sm">
              Accomplishments
            </p>
          </div>
          <div className="space-y-4">
            {accomplishments.map((a, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-base-100 border border-base-200 rounded-xl p-4 shadow-sm"
              >
                <div className="badge badge-secondary text-white font-bold whitespace-nowrap py-4 px-3 text-xs">
                  {a.year}
                </div>
                <p className="text-base-content font-medium">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KICKOFF PHOTO STRIP */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/kickoff-speaking.jpg"
          alt="David Wylie speaking at his campaign kickoff"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center">
          <p className="text-white text-xl md:text-3xl font-extrabold text-center px-4">
            A Neighbor You Can Trust. A Leader Who Will Deliver.
          </p>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-primary text-white py-8 text-center">
        <p className="text-lg font-bold uppercase tracking-widest">
          Working Hard. Serving Denton County. Putting People First.
        </p>
      </section>
    </>
  );
}
