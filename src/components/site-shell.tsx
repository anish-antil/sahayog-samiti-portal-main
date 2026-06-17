import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import {
  Banknote,
  BookOpen,
  Calculator,
  Gem,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
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
  const mobileNavItems = [...navItems, { to: "/donate", label: "Donate" }];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#2d2f92] shadow-lg" : "bg-transparent"
        }`}
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
                className={`truncate text-base font-bold sm:text-lg ${scrolled ? "text-white" : "text-white"}`}
              >
                Sah Sahayog Sewa Samiti
              </div>
              <div
                className={`truncate text-[10px] sm:text-xs ${scrolled ? "text-white/80" : "text-white/80"}`}
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
                className={`relative text-sm font-semibold transition-smooth hover:text-secondary ${
                  scrolled ? "text-white" : "text-white"
                }`}
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
            className={`relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 md:hidden ${
              open
                ? "border-white/35 bg-white text-primary"
                : scrolled
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-white/35 bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"
              }`}
            />
          </button>
        </div>
        <div
          className={`fixed inset-x-0 top-20 -z-10 h-[calc(100vh-5rem)] bg-slate-950/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`fixed inset-x-4 top-24 z-50 origin-top overflow-hidden rounded-2xl border border-white/35 bg-white/95 p-2 shadow-2xl shadow-slate-950/20 backdrop-blur-xl transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-4 scale-95 opacity-0"
          }`}
        >
          <nav className="grid gap-1">
            {mobileNavItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between rounded-xl px-4 py-4 text-base font-bold text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
                activeProps={{
                  className:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                }}
              >
                <span>{item.label}</span>
                <span className="h-2 w-2 rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/919889577797"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all hover:scale-110 hover:bg-green-600"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>

        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center pt-28 text-white"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(3, 7, 18, 0.78) 0%,
          rgba(3, 7, 18, 0.62) 42%,
          rgba(3, 7, 18, 0.32) 100%
        ), url(${image})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 55%, white 1px, transparent 1px)",
          backgroundSize: "68px 68px, 104px 104px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8">
        <Reveal direction="left">
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
  direction,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
  direction?: RevealDirection;
}) {
  return (
    <Reveal
      direction={direction ?? (centered ? "up" : "left")}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <span className="text-sm font-bold uppercase tracking-widest text-secondary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-5 text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDirection;
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

  const hiddenTransform = {
    up: "translate3d(0, 42px, 0) scale(0.98)",
    down: "translate3d(0, -42px, 0) scale(0.98)",
    left: "translate3d(-72px, 0, 0) scale(0.98)",
    right: "translate3d(72px, 0, 0) scale(0.98)",
    zoom: "translate3d(0, 18px, 0) scale(0.9)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0) scale(1)" : hiddenTransform,
        transition: "opacity 0.9s ease, transform 0.95s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function ProgramCard({
  item,
  delay = 0,
  direction = "up",
}: {
  item: { title: string; desc: string; metric: string; icon: string };
  delay?: number;
  direction?: RevealDirection;
}) {
  const Icon = iconMap[item.icon] ?? Sparkles;

  return (
    <Reveal delay={delay} direction={direction}>
      <article className="hover-card-intense group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-4 hover:scale-[1.035] hover:border-primary hover:shadow-[0_28px_80px_-24px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_15%,color-mix(in_oklab,var(--secondary)_20%,transparent),transparent_34%),radial-gradient(circle_at_80%_90%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_36%)]" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-glow transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-[0_0_36px_color-mix(in_oklab,var(--secondary)_55%,transparent)]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="relative mt-5 text-xl font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
          {item.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/82">
          {item.desc}
        </p>
        <div className="relative mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
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
    <div className="grid gap-4">
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
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary hover:shadow-elegant"
          >
            {content}
          </a>
        ) : (
          <div
            key={title}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary hover:shadow-elegant"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="pt-20 pb-8 text-white"
      style={{
        background: "linear-gradient(135deg, rgb(28,35,117), rgb(35,58,143))",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <div className="flex items-start gap-4">
              <img
                src={assets.logo}
                alt="Logo"
                className="h-12 w-12 rounded-full bg-white object-contain p-1"
              />

              <div>
                <div className="text-xl font-bold leading-tight">
                  Sah Sahayog Sewa Samiti
                </div>

                <div className="text-sm text-white/70">
                  Estd. 2005 • Varanasi
                </div>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-white/75">
              A Social, Cultural, Vocational Training and Academic Society
              dedicated to grassroots transformation.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-6 text-2xl font-bold">Quick Links</h4>

            <ul className="mt-4 space-y-2 text-white/75">
              {[...navItems, { to: "/donate", label: "Donate" }].map(
                (item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-white/75 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold">Impact</h4>

            <ul className="mt-4 space-y-2 text-white/75">
              <li>Education Programs</li>
              <li>Vocational Training</li>
              <li>Women Empowerment</li>
              <li>Community Development</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-xl font-bold">Contact Us</h4>

            <div className="space-y-4 text-white/75">
              <div>{contact.address}</div>
              <div>{contact.phone}</div>
              <div>{contact.email}</div>

              <div className="pt-6 border-t border-white/10">
                {registrations.slice(0, 2).map(([label, value]) => (
                  <div key={label}>
                    {label}: {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-white/60">
            <div>
              © {new Date().getFullYear()} Sah Sahayog Sewa Samiti. All rights
              reserved.
            </div>

            <div>
              Made with ❤️ for the community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}