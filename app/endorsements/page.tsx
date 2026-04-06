import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Endorsements - David Wylie for County Commissioner",
  description:
    "See the growing list of endorsements for David Wylie for Denton County Commissioner.",
};

const endorsements = [
  { name: "Mitch Little", title: "State Representative HD-65" },
  { name: "Andy Hopper", title: "State Representative HD-64" },
  { name: "Lisa Hendrickson", title: "SREC SD12" },
  { name: "David Lowe", title: "State Representative HD-91" },
  { name: "Darlene Pendery", title: "Tour 18" },
  { name: "Tony Tinderholt", title: "State Representative HD94" },
  { name: "Amy Bundgus", title: "Lantana" },
  { name: "Jonathan Stickland", title: "Frmr State Rep HD92" },
  { name: "Sam Slaton", title: "Argyle ISD President" },
  { name: "Jeff Cason", title: "Frmr State Rep HD92" },
  { name: "Dave Augustus", title: "Argyle" },
  { name: "Cindi Castilla", title: "President, Texas Eagle Forum" },
  { name: "LTC Allen West", title: "Dallas County Party Chair" },
  { name: "Matt Rinaldi", title: "Frmr RPT Chairman" },
  { name: "Lacey Riley", title: "Frmr Denton County Party Chair" },
  { name: "Rachel Horton", title: "SREC SD30" },
  { name: "Patrick Wamhoff", title: "SREC SD30" },
  { name: "Susan Fountain", title: "SREC SD16" },
  { name: "Gaylyn Devine", title: "SREC SD11" },
  { name: "Melissa Knerr", title: "SREC SD20" },
  { name: "Gwen Withrow", title: "SREC SD04" },
  { name: "Ron Schmidt", title: "Argyle Mayor" },
  { name: "Peyton Inge", title: "Pct Chair 4199 Argyle" },
  { name: "Mike Montes", title: "Pct Chair 4196 Argyle" },
  { name: "Susan Passariello", title: "Argyle" },
  { name: "Rena Hardeman", title: "Pct Chair 4195 Northlake" },
  { name: "Guy Anderson", title: "Pct Chair 4204 Flower Mound" },
  { name: "Susan Borella", title: "Pct Chair 3140 Flower Mound" },
  { name: "Chris Corbett", title: "Pct Chair 3151 Flower Mound" },
  { name: "Missy Grau", title: "Pct Chair 4205 Flower Mound" },
  { name: "Tom & Cindy Clark", title: "Pct Chair 3142 Tour 18" },
  { name: "Ronnie Jones", title: "Pct Chair 3151 Flower Mound" },
  { name: "Jennifer Lundy", title: "Pct Chair 3144 Flower Mound" },
  { name: "Dan Ottinger", title: "Pct Chair 3147 Flower Mound" },
  { name: "Mary Regan", title: "Pct Chair 3143 Flower Mound" },
  { name: "Lisa Beck", title: "Pct Chair 4222 Haslet" },
  { name: "Joel McGregor", title: "Pct Chair 4217 Roanoke" },
  { name: "Rick Lifto", title: "Pct Chair 4210 Trophy Club" },
  { name: "Sean Nelson", title: "Pct Chair 4200 Trophy Club" },
  { name: "Beverly Foley", title: "Trophy Club" },
  { name: "Vickie McGovern", title: "Pct Chair 1056 Denton" },
  { name: "Deloy Nelson, Jr", title: "Pct Chair 4181 Denton" },
  { name: "Jennifer Moulton", title: "Pct Chair 1059 Denton" },
  { name: "Joel Plangman", title: "Pct Chair 1064 Denton" },
  { name: "Michelle Pique'", title: "Pct Chair 3157 Copper Canyon" },
  { name: "Dottie Hurst", title: "Pct Chair 3152 Highland Village" },
  { name: "Phil Maloney", title: "Pct Chair 3155 Highland Village" },
  { name: "Jean Bassinger", title: "Pct Chair 3153 Highland Village" },
  { name: "Mark Solow", title: "Pct Chair 3154 Highland Village" },
  { name: "Elizabeth Hopkins", title: "Pct Chair 1031 Little Elm" },
  { name: "George McCullough", title: "Pct Chair 1044 Little Elm" },
  { name: "Lois McDougall", title: "Pct Chair 1034 Little Elm" },
  { name: "Carol Pazdernik", title: "Pct Chair 1046 Lakewood Village" },
  { name: "Jacquie Wasson", title: "Pct Chair 1054 Providence Village" },
  { name: "Shannon Greer", title: "Pct Chair 1028 Frisco" },
  { name: "Susan Kershaw", title: "Pct Chair 1033 Frisco" },
  { name: "Jennifer White", title: "Pct Chair 1024 Frisco" },
  { name: "Jane Anne Sellars", title: "Pct Chair 1172 Frisco" },
  { name: "Jacquez Jones", title: "Little Elm" },
  { name: "Brandie Kennedy", title: "Pct Chair 2097 Carrollton" },
  { name: "Deb Avellano", title: "Pct Chair 2073 Corinth" },
  { name: "Marcia Barnett", title: "Pct Chair 2113 Carrollton" },
  { name: "Darlene Howell", title: "Pct Chair 2098 Carrollton" },
  { name: "Sheree Rose", title: "Pct Chair 2091 Plano" },
  { name: "Carol Adams", title: "Pct Chair 2089 Frisco" },
  { name: "Brittany Byrd Flower", title: "Pct Chair 2079 The Colony" },
  { name: "Mark Eisenmann", title: "Pct Chair 2083 Frisco" },
  { name: "Janet Gadd", title: "Pct Chair 2084 The Colony" },
  { name: "Teri Wilson", title: "Pct Chair 1000 Sanger" },
  { name: "Yamilet Segarra", title: "Pct Chair 1225 Krugerville" },
  { name: "Jeff Younger", title: "Flower Mound" },
  { name: "Charles Bass", title: "Wise County" },
  { name: "Tim Terry", title: "Wise County" },
  { name: "Monica Hamilton", title: "Wise County" },
  { name: "Natalie Genco", title: "Tarrant" },
  { name: "Ralph Brotherton", title: "Tarrant" },
  { name: "John Holcomb", title: "Tarrant" },
  { name: "Weston Martinez", title: "San Antonio" },
  { name: "Richard Steenson", title: "Smith County" },
  { name: "Christina Drewry", title: "Smith County" },
  { name: "Ginger McDaniel", title: "Cooke County" },
  { name: "John Beckmeyer", title: "Ector County" },
  { name: "Sharon Van Baele", title: "Jack County" },
];

export default function EndorsementsPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Endorsements</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Endorsements</h1>
          <Link href="/endorsements#list" className="btn btn-primary text-white font-bold">
            Current List ↓
          </Link>
        </div>
      </section>

      {/* ENDORSEMENT LIST */}
      <section id="list" className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-secondary">Those Endorsing</h2>
            <p className="text-base-content/60 mt-2">
              A growing coalition of conservatives and community leaders across Denton County
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {endorsements.map((e, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-base-200 shadow-sm p-4 flex flex-col"
              >
                <p className="font-bold text-secondary">{e.name}</p>
                <p className="text-sm text-base-content/60">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-primary text-white py-8 text-center">
        <p className="text-lg font-bold uppercase tracking-widest">
          Working Hard. Protecting Freedom. Serving You.
        </p>
      </section>
    </>
  );
}
