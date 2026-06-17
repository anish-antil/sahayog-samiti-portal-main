# Complete updated website code

IMPORTANT: Replace each file completely. Do not paste above old code.

## src/lib/site-content.ts

~~~tsx
import logoAsset from "@/assets/logo.png";
import office3 from "@/assets/office-3.png";
import office4 from "@/assets/office-4.png";
import office5 from "@/assets/office-5.png";
import office6 from "@/assets/office-6.png";

export const assets = {
  logo: logoAsset,
  office3,
  office4,
  office5,
  office6,
};

export const navItems = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/committee", label: "Committee" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const contact = {
  address: "Salarpur, Rasulgarh, Sarnath, Varanasi - 221007, Uttar Pradesh, India",
  phone: "+91 98895 77797",
  secondaryPhone: "+91 94739 70180",
  email: "sss.samiti@gmail.com",
  legacyEmail: "anshikavtp@gmail.com",
  secretaryEmail: "anshika.ravi@gmail.com",
  secretary: "Ravi Kumar",
  website: "www.anshikainstitute.com",
};

export const registrations = [
  ["Registration No.", "1540 / 2004-2005"],
  ["Registered On", "07 / 03 / 2005"],
  ["Registered Under", "Societies Registration Act, 1860"],
  ["NGO Darpan", "UP/2015/0085844"],
  ["PAN", "AADAS9336B"],
  ["GST Number", "09AADAS9336B2ZF"],
];

export const stats = [
  { value: 20, suffix: "+", label: "Years of Service" },
  { value: 4900, suffix: "+", label: "People Trained" },
  { value: 15, suffix: "+", label: "Vocational Programs" },
  { value: 3600, suffix: "+", label: "Placements & Livelihoods" },
];

export const objectives = [
  "Creation of job-oriented programmes for rural youth and older girls.",
  "Education for all through parent motivation, rallies and community seminars.",
  "All-round development of downtrodden and backward communities.",
  "Health, sanitation and rural development awareness.",
  "Focused awareness programmes for children, youth and women welfare.",
];

export const programGroups = [
  {
    title: "Long-Term Industrial Training",
    body: "Through Anshika Pvt. Industrial Training Institute, the Samiti provides DGET/NCVT affiliated two-year industrial training designed for stable wage employment.",
    items: [
      {
        title: "Electrician Trade",
        desc: "Two-year NCVT course with classroom learning, practical workshop exposure and placement support. Earlier batches recorded successful company placements while new batches continued training.",
        metric: "105 trainees ongoing in 2013-14",
        icon: "zap",
      },
      {
        title: "Fitter Trade",
        desc: "Industrial workshop training for youth interested in mechanical fitting, maintenance and manufacturing sector roles.",
        metric: "63 trainees ongoing in 2013-14",
        icon: "wrench",
      },
    ],
  },
  {
    title: "Short-Term Skill Development",
    body: "Anshika Technical Institute runs one-to-six month programmes under SDI and NSDC schemes, helping trainees move toward wage work, self-employment or micro-enterprise.",
    items: [
      {
        title: "Information & Communication Technology",
        desc: "Computer and ICT training for school, office and institution-ready roles across the region.",
        metric: "1,265 trained, 948 placed",
        icon: "monitor",
      },
      {
        title: "Banking & Accounting",
        desc: "Tally-based accounting and finance training for private firms, schools and institutions.",
        metric: "915 trained, 685 placed",
        icon: "calculator",
      },
      {
        title: "Garment Making & Embroidery",
        desc: "Cutting, tailoring, hand embroidery, sampling tailor and Zardosi programmes for women-led livelihoods.",
        metric: "1,542 trained, 1,157 placed",
        icon: "scissors",
      },
      {
        title: "Beauty Culture & Hair Dressing",
        desc: "Practical beautician and hair dressing training that supports salon jobs and independent businesses.",
        metric: "651 trained, 487 self-employed/placed",
        icon: "sparkles",
      },
      {
        title: "Retail Sector",
        desc: "NSDC Star Scheme training with RASCI for retail stores, sales counters and FMCG work.",
        metric: "155 trained, 116 placed",
        icon: "store",
      },
      {
        title: "Plumber Sector",
        desc: "IPSCI-aligned plumber training for local service work, site jobs and self-employment.",
        metric: "75 trained, 50 settled",
        icon: "pipe",
      },
    ],
  },
  {
    title: "Community Development Initiatives",
    body: "Alongside vocational training, the Samiti organizes awareness programmes that respond to health, education and livelihood needs in rural Varanasi.",
    items: [
      {
        title: "Child Education Outreach",
        desc: "Village rallies and seminars motivate parents to send children to school and understand the importance of literacy.",
        metric: "Rural parent outreach",
        icon: "book",
      },
      {
        title: "AIDS Awareness",
        desc: "AIDS control awareness in Chiraigaon Block spreads HIV prevention knowledge among rural youth.",
        metric: "Health awareness drives",
        icon: "heart",
      },
      {
        title: "Jewellery & Handicraft",
        desc: "Jewellery making and handicraft workshops help girls build creative livelihood skills.",
        metric: "Women strengthening",
        icon: "gem",
      },
      {
        title: "Kalavattu Zari & Power Loom",
        desc: "Workshops promote metal/plastic zari work and power loom skills connected to local employment.",
        metric: "877+ trained historically",
        icon: "landmark",
      },
    ],
  },
];

export const members = [
  {
    name: "Mrs. Priti Maurya",
    rel: "W/o Mr. Rakesh Kumar Maurya",
    addr: "Salarpur, Rasulgarh, Sarnath, Varanasi",
    role: "President",
    occ: "Business",
  },
  {
    name: "Ravi Kumar",
    rel: "S/o Mr. Prabhu Narayan",
    addr: "Salarpur, Rasulgarh, Sarnath, Varanasi",
    role: "Secretary",
    occ: "Business",
  },
  {
    name: "Shiv Charan",
    rel: "S/o Mr. Omkar Nath",
    addr: "Jalalipura, Karnadhipura, Varanasi",
    role: "Treasurer",
    occ: "Teacher",
  },
  {
    name: "Manoj Kumar Maurya",
    rel: "S/o Mr. Ramnaresh Maurya",
    addr: "Deendayalpur, Nadesarhat, Sonatalab, Varanasi",
    role: "Member",
    occ: "Business",
  },
  {
    name: "Amarnath",
    rel: "S/o Mr. Shivnath",
    addr: "Salarpur, Rasulgarh, Sarnath, Varanasi",
    role: "Member",
    occ: "Business",
  },
  {
    name: "Mrs. Ranjana Devi",
    rel: "W/o Mr. Ranjeet Kumar",
    addr: "Bardaha, Ravidas Nagar, Bhadohi",
    role: "Member",
    occ: "Agriculture",
  },
  {
    name: "Mr. Sarbas Narayan",
    rel: "S/o Late Harika Prasad",
    addr: "Salarpur, Rasulgarh, Sarnath, Varanasi",
    role: "Member",
    occ: "Business",
  },
  {
    name: "Mrs. Nisha Devi",
    rel: "W/o Mr. Udit Narayan",
    addr: "Salarpur, Rasulgarh, Sarnath, Varanasi",
    role: "Member",
    occ: "Business",
  },
  {
    name: "Mr. Niraj Maurya",
    rel: "S/o Mr. Kshetri Narayan",
    addr: "Salarpur, Rasulgarh, Sarnath, Varanasi",
    role: "Member",
    occ: "Business",
  },
  {
    name: "Mrs. Jyoti Maurya",
    rel: "W/o Mr. Naveen Kumar Maurya",
    addr: "D-45/114A, New Colony, Laxa, Chittupur, Varanasi",
    role: "Member",
    occ: "Teacher",
  },
  {
    name: "Mrs. Usha Devi",
    rel: "W/o Mr. Lallu Prasad",
    addr: "Chiraigaon, Varanasi",
    role: "Member",
    occ: "Business",
  },
];

export const gallery = [
  {
    src: office3,
    caption: "Office Building",
    detail: "Salarpur, Sarnath campus and training center frontage.",
  },
  {
    src: office4,
    caption: "Reception & Meeting Area",
    detail: "A welcoming space for trainees, visitors and programme discussions.",
  },
  {
    src: office5,
    caption: "Administrative Office",
    detail: "Coordination desk for registrations, records and programme operations.",
  },
  {
    src: office6,
    caption: "Computer Training Lab",
    detail: "ICT training setup for digital learning and skill development.",
  },
];

export const donationUses = [
  "Sponsor training materials, toolkits and classroom supplies.",
  "Support scholarships for rural girls and economically weaker trainees.",
  "Strengthen computer lab, electrical workshop and tailoring infrastructure.",
  "Help organize education, health and rural awareness camps.",
];

~~~

## src/components/site-shell.tsx

~~~tsx
import { Link } from "@tanstack/react-router";
import {
  Banknote,
  BookOpen,
  Calculator,
  Gem,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Scissors,
  Sparkles,
  Store,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { assets, contact, navItems, registrations } from "@/lib/site-content";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  wrench: Wrench,
  monitor: Monitor,
  calculator: Calculator,
  scissors: Scissors,
  sparkles: Sparkles,
  store: Store,
  pipe: Wrench,
  book: BookOpen,
  heart: HeartPulse,
  gem: Gem,
  landmark: Landmark,
};

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-smooth ${scrolled ? "bg-background/92 shadow-md backdrop-blur-lg" : "bg-primary/90 backdrop-blur-md"}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <img
              src={assets.logo}
              alt="Sah Sahayog Sewa Samiti logo"
              className="h-12 w-12 shrink-0 rounded-full bg-white object-contain p-1 transition-smooth group-hover:scale-110"
            />
            <div className="min-w-0 leading-tight">
              <div
                className={`truncate text-base font-bold sm:text-lg ${scrolled ? "text-foreground" : "text-white"}`}
              >
                Sah Sahayog Sewa Samiti
              </div>
              <div
                className={`truncate text-[10px] sm:text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}
              >
                Social - Cultural - Vocational - Academic
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-semibold transition-smooth hover:text-secondary ${scrolled ? "text-foreground" : "text-white"} after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:content-[''] hover:after:w-full`}
                activeProps={{ className: "text-secondary after:w-full" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-glow transition-smooth hover:scale-105 hover:bg-secondary-glow"
            >
              <Banknote className="h-4 w-4" />
              Donate
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${scrolled ? "border-border text-foreground" : "border-white/30 text-white"}`}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background px-5 py-4 shadow-md md:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {[...navItems, { to: "/donate", label: "Donate" }].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                  activeProps={{ className: "bg-muted text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 text-white">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 55%, white 1px, transparent 1px)",
          backgroundSize: "68px 68px, 104px 104px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <Reveal>
          <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-white/84">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="text-sm font-bold uppercase tracking-widest text-secondary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-5 text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.75s ease, transform 0.75s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function ProgramCard({
  item,
  delay = 0,
}: {
  item: { title: string; desc: string; metric: string; icon: string };
  delay?: number;
}) {
  const Icon = iconMap[item.icon] ?? Sparkles;

  return (
    <Reveal delay={delay}>
      <article className="group h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-elegant">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-glow transition-smooth group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-bold group-hover:text-primary">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        <div className="mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
          {item.metric}
        </div>
      </article>
    </Reveal>
  );
}

export function ContactCards() {
  const rows = [
    { icon: MapPin, title: "Address", value: contact.address },
    { icon: Phone, title: "Phone", value: contact.phone, href: "tel:+919889577797" },
    { icon: Mail, title: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Landmark, title: "Secretary", value: contact.secretary },
  ];

  return (
    <div className="space-y-4">
      {rows.map(({ icon: Icon, title, value, href }) => {
        const content = (
          <>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {title}
              </div>
              <div className="mt-1 font-semibold">{value}</div>
            </div>
          </>
        );

        return href ? (
          <a
            key={title}
            href={href}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-elegant"
          >
            {content}
          </a>
        ) : (
          <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
            {content}
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-12 w-12 rounded-full bg-white object-contain p-1"
            />
            <div>
              <div className="font-bold">Sah Sahayog Sewa Samiti</div>
              <div className="text-xs text-white/70">Estd. 2005 - Varanasi</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            A Social, Cultural, Vocational Training and Academic Society dedicated to grassroots
            transformation.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[...navItems, { to: "/donate", label: "Donate" }].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-block text-white/75 transition-smooth hover:translate-x-1 hover:text-secondary-glow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Registrations</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {registrations.slice(0, 4).map(([label, value]) => (
              <li key={label}>
                {label}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 px-5 pt-6 text-center text-xs text-white/60 lg:px-8">
        © {new Date().getFullYear()} Sah Sahayog Sewa Samiti. All rights reserved.
      </div>
    </footer>
  );
}

~~~

## src/routes/index.tsx

~~~tsx
import { Link, createFileRoute } from "@tanstack/react-router";

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
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-hero-gradient pt-28 text-white">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "64px 64px, 96px 96px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
                Registered NGO - Estd. 2005
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
                Empowering communities through skills, education and dignity.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/84">
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

          <Reveal delay={240}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-5 rounded-3xl bg-white/15 blur-2xl" />
              <div className="relative rounded-3xl border border-white/30 bg-white/12 p-7 shadow-elegant backdrop-blur">
                <img
                  src={assets.logo}
                  alt="Sah Sahayog Sewa Samiti"
                  className="mx-auto h-52 w-52 rounded-full bg-white object-contain p-6"
                />
                <div className="mt-7 grid grid-cols-2 gap-3 text-center">
                  {stats.slice(0, 4).map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/12 p-4">
                      <div className="text-2xl font-extrabold">
                        {item.value.toLocaleString()}
                        {item.suffix}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-white/70">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
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

      <section className="bg-muted/40 py-20 lg:py-28">
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((item, index) => (
              <ProgramCard key={item.title} item={item} delay={index * 70} />
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/programs"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-elegant transition-smooth hover:scale-105"
            >
              View All Programs
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
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

      <section className="bg-muted/40 py-20 lg:py-28">
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {gallery.map((image, index) => (
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

      <section className="py-20 lg:py-28">
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

~~~

## src/routes/about.tsx

~~~tsx
import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { assets, objectives, registrations } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sah Sahayog Sewa Samiti" },
      { name: "description", content: "Learn about Sah Sahayog Sewa Samiti, its registration, mission, objectives and training units in Varanasi." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About The Organization" title={<>A grassroots society for education, skills and rural development.</>}>
        Sah Sahayog Sewa Samiti works for the betterment of downtrodden and backward youth, older girls, labourers, women and children so they can move confidently into the social, economic and educational mainstream.
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img src={assets.office3} alt="Sah Sahayog Sewa Samiti office" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant" />
          </Reveal>
          <div>
            <SectionIntro eyebrow="Introduction" title={<>Built around <span className="text-gradient">practical empowerment.</span></>}>
              <div className="space-y-4 leading-relaxed">
                <p>Sah Sahayog Sewa Samiti is based at Salarpur, Rasulgarh, Sarnath, Varanasi and is registered under the Societies Registration Act, 1860.</p>
                <p>The organization runs skill development, vocational training, health awareness, education outreach, handicraft, self-employment and women and child development programmes.</p>
              </div>
            </SectionIntro>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro centered eyebrow="Vision & Mission" title={<>Training that creates <span className="text-gradient">real opportunity.</span></>}>
            <p>The Samiti integrates with government departments, training providers and local institutions to make employment-oriented programmes accessible to disadvantaged youth, with special focus on women.</p>
          </SectionIntro>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Vision", "To contribute meaningfully to youth empowerment by giving learners the right platform, right skills and access to suitable work."],
              ["Mission", "To provide skill development training, placement support and self-employment pathways through vocational and community programmes."],
              ["Approach", "To connect training with equitable access, practical instruction and opportunities for gainful wage or self-employment."],
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

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionIntro eyebrow="Core Objectives" title={<>A clear agenda for <span className="text-gradient">community progress.</span></>} />
          <div className="grid gap-4">
            {objectives.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="rounded-xl border border-border bg-card p-5 font-semibold shadow-sm">{item}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro centered eyebrow="Registration Details" title={<>Verified organizational <span className="text-gradient">information.</span></>} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {registrations.map(([label, value], index) => (
              <Reveal key={label} delay={index * 70}>
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</dt>
                  <dd className="mt-2 text-lg font-bold">{value}</dd>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
~~~

## src/routes/programs.tsx

~~~tsx
import { createFileRoute } from "@tanstack/react-router";

import { PageHero, ProgramCard, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { programGroups } from "@/lib/site-content";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Sah Sahayog Sewa Samiti" },
      { name: "description", content: "Explore Sah Sahayog Sewa Samiti training programmes in ITI, ICT, accounting, garment making, beauty culture, retail, plumbing, education and health awareness." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Programs" title={<>Vocational training, social awareness and livelihood pathways.</>}>
        The Samiti provides both long-term industrial training and short-term skill development through Anshika Pvt. ITI and Anshika Technical Institute, with programmes connected to DGET, NCVT, SDI and NSDC frameworks.
      </PageHero>

      {programGroups.map((group, groupIndex) => (
        <section key={group.title} className={groupIndex % 2 ? "bg-muted/40 py-20 lg:py-28" : "py-20 lg:py-28"}>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro eyebrow={groupIndex === 0 ? "Training Units" : "Programme Area"} title={<>{group.title}</>}>
              <p className="leading-relaxed">{group.body}</p>
            </SectionIntro>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, index) => (
                <ProgramCard key={item.title} item={item} delay={index * 70} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant md:p-10">
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/70">Training Duration</div>
                  <h2 className="mt-3 text-3xl font-extrabold">Short-term and long-term programmes</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/12 p-5">
                    <div className="font-bold">Short-Term</div>
                    <p className="mt-2 text-sm text-white/78">One-to-six month courses for quick skill development and employability.</p>
                  </div>
                  <div className="rounded-xl bg-white/12 p-5">
                    <div className="font-bold">Long-Term</div>
                    <p className="mt-2 text-sm text-white/78">One-to-two year industrial training routes for recognized trades.</p>
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
~~~

## src/routes/committee.tsx

~~~tsx
import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { members } from "@/lib/site-content";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Committee — Sah Sahayog Sewa Samiti" },
      { name: "description", content: "Managing committee members of Sah Sahayog Sewa Samiti." },
    ],
  }),
  component: CommitteePage,
});

function CommitteePage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Managing Committee" title={<>Leadership guiding the Samiti’s public service work.</>}>
        The managing committee brings together local leadership, administrative responsibility and community knowledge to guide the organization’s training and welfare programmes.
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro centered eyebrow="Office Bearers" title={<>Core <span className="text-gradient">leadership.</span></>} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {members.slice(0, 3).map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="relative h-full overflow-hidden rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/12" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/35 bg-white/18 text-3xl font-extrabold">
                    {member.name.replace(/^(Mrs?\.?|Mr\.?)\s*/, "").charAt(0)}
                  </div>
                  <div className="relative mt-6 text-xs font-bold uppercase tracking-widest text-white/75">{member.role}</div>
                  <h2 className="relative mt-2 text-2xl font-bold">{member.name}</h2>
                  <p className="relative mt-2 text-sm text-white/84">{member.rel}</p>
                  <p className="relative mt-4 text-xs leading-relaxed text-white/72">{member.addr}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro eyebrow="Committee Members" title={<>Complete member <span className="text-gradient">directory.</span></>} />
          <Reveal className="mt-10">
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
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{member.role}</span>
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
~~~

## src/routes/gallery.tsx

~~~tsx
import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { gallery } from "@/lib/site-content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sah Sahayog Sewa Samiti" },
      { name: "description", content: "Campus and training center gallery of Sah Sahayog Sewa Samiti in Sarnath, Varanasi." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Gallery" title={<>A look inside the campus and training spaces.</>}>
        These photographs show the spaces where trainees, staff and community members meet for administration, counselling, digital learning and programme coordination.
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro centered eyebrow="Campus" title={<>Training spaces in <span className="text-gradient">Sarnath.</span></>} />
          <div className="mt-12 grid gap-7 sm:grid-cols-2">
            {gallery.map((image, index) => (
              <Reveal key={image.caption} delay={index * 100}>
                <figure className="group overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-smooth hover:-translate-y-2 hover:shadow-elegant">
                  <img src={image.src} alt={image.caption} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <figcaption className="p-6">
                    <h2 className="text-xl font-bold">{image.caption}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{image.detail}</p>
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
~~~

## src/routes/contact.tsx

~~~tsx
import { createFileRoute } from "@tanstack/react-router";

import { ContactCards, PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sah Sahayog Sewa Samiti" },
      { name: "description", content: "Contact Sah Sahayog Sewa Samiti in Salarpur, Sarnath, Varanasi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title={<>Reach the team for programmes, admissions and partnerships.</>}>
        Contact the Samiti for training information, community programmes, collaboration, volunteering, documentation or support opportunities.
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionIntro eyebrow="Get In Touch" title={<>We are based in <span className="text-gradient">Sarnath, Varanasi.</span></>}>
              <p>Use the details below to reach the office or send a direct message through the enquiry form.</p>
            </SectionIntro>
            <Reveal className="mt-8">
              <ContactCards />
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant sm:p-10" onSubmit={(event) => { event.preventDefault(); alert("Thank you! We will get back to you soon."); }}>
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-white/80">Fill the form and the team will respond as soon as possible.</p>
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
                <button type="submit" className="w-full rounded-xl bg-white py-3.5 font-bold text-primary transition-smooth hover:scale-[1.02] hover:shadow-glow">
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Primary phone", contact.phone],
              ["Alternate phone", contact.secondaryPhone],
              ["Legacy programme email", contact.legacyEmail],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-border bg-card p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-2 font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
~~~

## src/routes/donate.tsx

~~~tsx
import { createFileRoute } from "@tanstack/react-router";

import { ContactCards, PageHero, Reveal, SectionIntro, SiteShell } from "@/components/site-shell";
import { donationUses, registrations } from "@/lib/site-content";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Sah Sahayog Sewa Samiti" },
      { name: "description", content: "Support Sah Sahayog Sewa Samiti training, education, women empowerment and rural development programmes." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Donate & Support" title={<>Help strengthen training, education and rural outreach.</>}>
        Contributions can support learning materials, training equipment, scholarships, awareness camps and self-employment pathways for youth and women in rural communities.
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionIntro eyebrow="Where Support Helps" title={<>Your contribution can create <span className="text-gradient">visible impact.</span></>}>
              <p>Donation details are best confirmed directly with the Samiti office so the team can share the latest account information and receipt process.</p>
            </SectionIntro>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {donationUses.map((item, index) => (
                <Reveal key={item} delay={index * 80}>
                  <div className="h-full rounded-xl border border-border bg-card p-5 font-semibold shadow-sm">{item}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-elegant">
              <h2 className="text-2xl font-bold">Contact before donating</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Please contact the office to confirm current bank, UPI, receipt and documentation details before making a contribution.
              </p>
              <div className="mt-6 rounded-xl bg-white/12 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-white/65">Registration</div>
                <div className="mt-2 font-semibold">{registrations[0][1]}</div>
                <div className="mt-1 text-sm text-white/75">Registered under Societies Registration Act, 1860</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <SectionIntro eyebrow="Donation Enquiry" title={<>Speak with the <span className="text-gradient">office team.</span></>}>
            <p>Call, email or visit the office for contribution guidance, partnership discussions and programme sponsorship.</p>
          </SectionIntro>
          <Reveal>
            <ContactCards />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
~~~

