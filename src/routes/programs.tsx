import { createFileRoute } from "@tanstack/react-router";


import { PageHero, ProgramCard, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { programGroups } from "@/lib/site-content";
import programHero from "@/assets/inner-hero2.png";

const longTermSupportCard = {
  title: "Workshop & Placement Support",
  desc: "Learners receive practical workshop exposure, trade guidance and placement assistance so industrial training can move toward stable wage employment.",
  metric: "Hands-on training with placement focus",
  icon: "landmark",
};

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Sah Sahayog Sewa Samiti" },
      {
        name: "description",
        content:
          "Explore Sah Sahayog Sewa Samiti training programmes in ITI, ICT, accounting, garment making, beauty culture, retail, plumbing, education and health awareness.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Programs"
        image={programHero}
        title={<>Vocational training, social awareness and livelihood pathways.</>}
      >
        The Samiti provides both long-term industrial training and short-term skill development
        through Anshika Pvt. ITI and Anshika Technical Institute, with programmes connected to DGET,
        NCVT, SDI and NSDC frameworks.
      </PageHero>

      {programGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className={groupIndex % 2 ? "bg-muted/40 py-12 lg:py-16" : "py-12 lg:py-16"}
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow={groupIndex === 0 ? "Training Units" : "Programme Area"}
              title={<>{group.title}</>}
            >
              <p className="leading-relaxed">{group.body}</p>
            </SectionIntro>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(groupIndex === 0 ? [...group.items, longTermSupportCard] : group.items).map(
                (item, index) => (
                  <ProgramCard key={item.title} item={item} delay={index * 70} />
                ),
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant md:p-10">
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/70">
                    Training Duration
                  </div>
                  <h2 className="mt-3 text-3xl font-extrabold">
                    Short-term and long-term programmes
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/12 p-5">
                    <div className="font-bold">Short-Term</div>
                    <p className="mt-2 text-sm text-white/78">
                      One-to-six month courses for quick skill development and employability.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/12 p-5">
                    <div className="font-bold">Long-Term</div>
                    <p className="mt-2 text-sm text-white/78">
                      One-to-two year industrial training routes for recognized trades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
