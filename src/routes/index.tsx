import { CountUp } from "@/components/count-up";
import { Link, createFileRoute } from "@tanstack/react-router";
import girlBg from "@/assets/girl-bg.jpeg";

import {
  ContactCards,
  ProgramCard,
  Reveal,
  SectionIntro,
  SiteShell,
} from "@/components/site-shell";
import {
  assets,
  donationUses,
  gallery,
  objectives,
  programGroups,
  registrations,
  stats,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sah Sahayog Sewa Samiti - NGO in Sarnath, Varanasi" },
      {
        name: "description",
        content:
          "Registered NGO empowering rural communities through vocational training, education, women empowerment and skill development since 2005.",
      },
      { property: "og:title", content: "Sah Sahayog Sewa Samiti" },
      {
        property: "og:description",
        content:
          "A Social, Cultural, Vocational Training and Academic Society in Sarnath, Varanasi.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredPrograms = programGroups.flatMap((group) => group.items).slice(0, 6);

  return (
    <SiteShell>
      <section
        className="relative flex h-screen items-center overflow-hidden pt-28 text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
          ), url(${girlBg})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "64px 64px, 96px 96px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
                Registered NGO - Estd. 2005
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-5xl">
                Empowering communities through skills, education and dignity.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                Sah Sahayog Sewa Samiti works from Sarnath, Varanasi to support rural youth, women,
                children and disadvantaged communities through vocational training, social awareness
                and placement-linked programmes.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/programs"
                  className="rounded-full bg-white px-7 py-3.5 font-bold text-primary shadow-elegant transition-smooth hover:scale-105"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/about"
                  className="rounded-full border-2 border-white/70 px-7 py-3.5 font-bold text-white transition-smooth hover:bg-white hover:text-primary"
                >
                  About the Samiti
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">OUR PROGRESS</p>

            <h2 className="mt-4 text-5xl font-extrabold text-slate-900">Quantifying Our Impact</h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
              Every number represents a person served, a life uplifted, and a stronger community
              built together.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.slice(0, 4).map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-10 text-center shadow-lg">
                <div className="text-5xl font-extrabold text-slate-900">
                  <CountUp end={item.value} />
                  {item.suffix}
                </div>

                <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={assets.office3}
              alt="Sah Sahayog Sewa Samiti campus"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
          </Reveal>
          <div>
            <SectionIntro
              eyebrow="About Us"
              title={
                <>
                  Service, skill and <span className="text-gradient">social change.</span>
                </>
              }
            >
              <p className="leading-relaxed">
                The Samiti is registered under the Societies Registration Act, 1860 and works for
                the betterment of rural youth, women, labourers, children and backward communities
                through education, health awareness, vocational training and self-employment
                support.
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {registrations.slice(0, 4).map(([label, value], index) => (
                <Reveal key={label} delay={index * 80}>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 font-semibold">{value}</dd>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            centered
            eyebrow="What We Do"
            title={
              <>
                Programs that lead to <span className="text-gradient">livelihoods.</span>
              </>
            }
          >
            <p>
              From NCVT industrial trades to ICT, accounting, garment making and community outreach,
              each programme is designed around practical outcomes.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((item, index) => (
              <ProgramCard key={item.title} item={item} delay={index * 70} />
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link
              to="/programs"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-elegant transition-smooth hover:scale-105"
            >
              View All Programs
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionIntro
            eyebrow="Objectives"
            title={
              <>
                Focused on people who need <span className="text-gradient">practical support.</span>
              </>
            }
          >
            <p>
              The organization&apos;s work combines social welfare with training, placement and
              self-employment pathways.
            </p>
          </SectionIntro>
          <div className="grid gap-4">
            {objectives.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="rounded-xl border border-border bg-card p-5 text-sm font-semibold shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Gallery"
            title={
              <>
                Spaces where training <span className="text-gradient">happens.</span>
              </>
            }
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {gallery.slice(0, 4).map((image, index) => (
              <Reveal key={image.caption} delay={index * 80}>
                <figure className="group overflow-hidden rounded-3xl bg-card shadow-md">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="p-5">
                    <div className="font-bold">{image.caption}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{image.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Get In Touch"
              title={
                <>
                  Partner, volunteer or <span className="text-gradient">contribute.</span>
                </>
              }
            >
              <p>
                Reach out for programme details, admissions, partnerships or contribution
                conversations.
              </p>
            </SectionIntro>
            <Reveal className="mt-8">
              <ContactCards />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant">
              <h3 className="text-2xl font-bold">Donation priorities</h3>
              <div className="mt-6 space-y-3">
                {donationUses.map((item) => (
                  <div key={item} className="rounded-xl bg-white/12 p-4 text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/donate"
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-primary transition-smooth hover:scale-105"
              >
                Donate or Support
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
