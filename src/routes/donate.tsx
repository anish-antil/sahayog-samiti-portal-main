import { createFileRoute } from "@tanstack/react-router";

import { ContactCards, PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { donationUses, registrations } from "@/lib/site-content";
import donateHero from "@/assets/inner-hero2.png";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Sah Sahayog Sewa Samiti" },
      {
        name: "description",
        content:
          "Support Sah Sahayog Sewa Samiti training, education, women empowerment and rural development programmes.",
      },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Donate & Support"
        image={donateHero}
        title={<>Help strengthen training, education and rural outreach.</>}
      >
        Contributions can support learning materials, training equipment, scholarships, awareness
        camps and self-employment pathways for youth and women in rural communities.
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Where Support Helps"
              title={
                <>
                  Your contribution can create{" "}
                  <span className="text-gradient">visible impact.</span>
                </>
              }
            >
              <p>
                Donation details are best confirmed directly with the Samiti office so the team can
                share the latest account information and receipt process.
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {donationUses.map((item, index) => (
                <Reveal key={item} delay={index * 80}>
                  <div className="h-full rounded-xl border border-border bg-card p-5 font-semibold shadow-sm">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant">
              <h2 className="text-2xl font-bold">Contact before donating</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Please contact the office to confirm current bank, UPI, receipt and documentation
                details before making a contribution.
              </p>
              <div className="mt-6 rounded-xl bg-white/12 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-white/65">
                  Registration
                </div>
                <div className="mt-2 font-semibold">{registrations[0][1]}</div>
                <div className="mt-1 text-sm text-white/75">
                  Registered under Societies Registration Act, 1860
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <SectionIntro
            eyebrow="Donation Enquiry"
            title={
              <>
                Speak with the <span className="text-gradient">office team.</span>
              </>
            }
          >
            <p>
              Call, email or visit the office for contribution guidance, partnership discussions and
              programme sponsorship.
            </p>
          </SectionIntro>
          <Reveal>
            <ContactCards />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
