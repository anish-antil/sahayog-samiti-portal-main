import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { gallery } from "@/lib/site-content";
import galleryHero from "@/assets/inner-hero4.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sah Sahayog Sewa Samiti" },
      {
        name: "description",
        content:
          "Campus and training center gallery of Sah Sahayog Sewa Samiti in Sarnath, Varanasi.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Gallery"
        image={galleryHero}
        title={<>A look inside the campus and training spaces.</>}
      >
        These photographs show the spaces where trainees, staff and community members meet for
        administration, counselling, digital learning and programme coordination.
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Campus"
            title={
              <>
                Training spaces in <span className="text-gradient">Sarnath.</span>
              </>
            }
          />
          <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gallery.map((image, index) => (
              <Reveal key={`${image.caption}-${index}`} delay={(index % 8) * 45}>
                <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                  <img
                    src={image.src}
                    alt={image.caption}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="flex min-h-32 flex-col p-4">
                    <h2 className="text-base font-bold leading-snug">{image.caption}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {image.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
