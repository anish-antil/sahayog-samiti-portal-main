import { createFileRoute } from "@tanstack/react-router";

import { ContactCards, PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/site-content";
import contactHero from "@/assets/inner-hero5.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sah Sahayog Sewa Samiti" },
      {
        name: "description",
        content: "Contact Sah Sahayog Sewa Samiti in Salarpur, Sarnath, Varanasi.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        image={contactHero}
        title={<>Reach the team for programmes, admissions and partnerships.</>}
      >
        Contact the Samiti for training information, community programmes, collaboration,
        volunteering, documentation or support opportunities.
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Get In Touch"
              title={
                <>
                  We are based in <span className="text-gradient">Sarnath, Varanasi.</span>
                </>
              }
            >
              <p>
                Use the details below to reach the office or send a direct message through the
                enquiry form.
              </p>
            </SectionIntro>
            <Reveal className="mt-8">
              <ContactCards />
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant sm:p-10"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you! We will get back to you soon.");
              }}
            >
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-white/80">
                Fill the form and the team will respond as soon as possible.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { name: "name", placeholder: "Your name", type: "text" },
                  { name: "email", placeholder: "Email address", type: "email" },
                  { name: "phone", placeholder: "Phone number", type: "tel" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-white outline-none transition-smooth placeholder:text-white/60 focus:border-white focus:bg-white/20"
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-white outline-none transition-smooth placeholder:text-white/60 focus:border-white focus:bg-white/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-3.5 font-bold text-primary transition-smooth hover:scale-[1.02] hover:shadow-glow"
                >
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              centered
              eyebrow="Location"
              title={
                <>
                  Visit our <span className="text-gradient">Sarnath Office</span>
                </>
              }
            >
              <p>Salarpur, Rasulgarh, Sarnath, Varanasi - 221007, Uttar Pradesh, India</p>
            </SectionIntro>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Sah Sahayog Sewa Samiti Location"
                src="https://www.google.com/maps?q=Salarpur,Rasulgarh,Sarnath,Varanasi,221007&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Primary phone", contact.phone],
              ["Alternate phone", contact.secondaryPhone],
              ["Legacy programme email", contact.legacyEmail],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-border bg-card p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="mt-2 font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
