import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { assets, members, objectives, registrations } from "@/lib/site-content";
import galleryHero from "@/assets/inner-hero3.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sah Sahayog Sewa Samiti" },
      {
        name: "description",
        content:
          "Learn about Sah Sahayog Sewa Samiti, its registration, mission, objectives and training units in Varanasi.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Gallery"
        image={galleryHero}
        title={<>A grassroots society for education, skills and rural development.</>}
      >
        Sah Sahayog Sewa Samiti works for the betterment of downtrodden and backward youth, older
        girls, labourers, women and children so they can move confidently into the social, economic
        and educational mainstream. Its managing committee brings together local leadership,
        administrative responsibility and community knowledge to guide the organization’s training
        and welfare programmes.
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={assets.office3}
              alt="Sah Sahayog Sewa Samiti office"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
          </Reveal>
          <div>
            <SectionIntro
              eyebrow="Introduction"
              title={
                <>
                  Built around <span className="text-gradient">practical empowerment.</span>
                </>
              }
            >
              <div className="space-y-4 leading-relaxed">
                <p>
                  Sah Sahayog Sewa Samiti is based at Salarpur, Rasulgarh, Sarnath, Varanasi and is
                  registered under the Societies Registration Act, 1860.
                </p>
                <p>
                  The organization runs skill development, vocational training, health awareness,
                  education outreach, handicraft, self-employment and women and child development
                  programmes.
                </p>
              </div>
            </SectionIntro>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Vision & Mission"
            title={
              <>
                Training that creates <span className="text-gradient">real opportunity.</span>
              </>
            }
          >
            <p>
              The Samiti integrates with government departments, training providers and local
              institutions to make employment-oriented programmes accessible to disadvantaged youth,
              with special focus on women.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [
                "Vision",
                "To contribute meaningfully to youth empowerment by giving learners the right platform, right skills and access to suitable work.",
              ],
              [
                "Mission",
                "To provide skill development training, placement support and self-employment pathways through vocational and community programmes.",
              ],
              [
                "Approach",
                "To connect training with equitable access, practical instruction and opportunities for gainful wage or self-employment.",
              ],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 100}>
                <article className="h-full rounded-xl border border-border bg-card p-7 shadow-sm">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionIntro
            eyebrow="Core Objectives"
            title={
              <>
                A clear agenda for <span className="text-gradient">community progress.</span>
              </>
            }
          />
          <div className="grid gap-4">
            {objectives.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="rounded-xl border border-border bg-card p-5 font-semibold shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Registration Details"
            title={
              <>
                Verified organizational <span className="text-gradient">information.</span>
              </>
            }
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {registrations.map(([label, value], index) => (
              <Reveal key={label} delay={index * 70}>
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-2 text-lg font-bold">{value}</dd>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Managing Committee"
            title={
              <>
                Core <span className="text-gradient">leadership.</span>
              </>
            }
          >
            <p>
              The office bearers provide governance, administrative continuity and community insight
              for the Samiti’s public service work.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {members.slice(0, 3).map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="relative h-full overflow-hidden rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/12" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/35 bg-white/18 text-3xl font-extrabold">
                    {member.name.replace(/^(Mrs?\.?|Mr\.?)\s*/, "").charAt(0)}
                  </div>
                  <div className="relative mt-6 text-xs font-bold uppercase tracking-widest text-white/75">
                    {member.role}
                  </div>
                  <h2 className="relative mt-2 text-2xl font-bold">{member.name}</h2>
                  <p className="relative mt-2 text-sm text-white/84">{member.rel}</p>
                  <p className="relative mt-4 text-xs leading-relaxed text-white/72">
                    {member.addr}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            eyebrow="Committee Members"
            title={
              <>
                Complete member <span className="text-gradient">directory.</span>
              </>
            }
          />
          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted text-foreground">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">#</th>
                      <th className="px-4 py-4 text-left font-semibold">Name</th>
                      <th className="px-4 py-4 text-left font-semibold">Address</th>
                      <th className="px-4 py-4 text-left font-semibold">Position</th>
                      <th className="px-4 py-4 text-left font-semibold">Occupation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => (
                      <tr key={member.name} className="border-t border-border hover:bg-muted/60">
                        <td className="px-4 py-4 text-muted-foreground">{index + 1}</td>
                        <td className="px-4 py-4">
                          <div className="font-semibold">{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.rel}</div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">{member.addr}</td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                            {member.role}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">{member.occ}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
