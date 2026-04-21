"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineMail, HiExternalLink, HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";

type Lang = "tr" | "en";

const translations = {
  tr: {
    about: "Hakkımda",
    skills: "Yeteneklerim",
    blog: "Blog",
    blogSeeAll: "Tüm yazıları gör",
    blogReadTime: "dk okuma",
    experience: "Deneyim",
    contact: "İletişim",
    aboutParagraphs: [
      "10 yılı aşkın deneyimimle e-ticaret, SaaS ve lojistik gibi farklı sektörlerde ölçeklenebilir, kullanıcı odaklı ürünler geliştirdim; frontend mimarisi ve ekip liderliği üstlendim. Şu anda Hubx bünyesinde Expert Frontend Developer olarak çalışıyor, sürdürülebilir ve performanslı web uygulamaları geliştiriyorum.",
      "React, Next.js ve TypeScript ekosisteminde uzmanlaşmış biri olarak performans, erişilebilirlik ve kod kalitesini her zaman ön planda tutuyorum.",
    ],
    experiences: [
      {
        company: "ikas",
        role: "Senior Frontend Developer",
        duration: "10 ay",
        descriptions: [
          "Sürükle-bırak prensibiyle çalışan modüler e-ticaret altyapılarının React ve TypeScript ile geliştirilmesi.",
          "Styled-components kullanarak ölçeklenebilir, performanslı ve yeniden kullanılabilir UI kütüphanelerinin (Design System) inşası.",
        ],
      },
      {
        company: "retter.io",
        role: "Frontend Developer",
        duration: "1 yıl 2 ay",
        descriptions: [
          "Next.js, TypeScript ve Tailwind CSS kullanarak yüksek trafikli e-ticaret sistemleri için modern web arayüzleri tasarımı.",
          "React Native ve Expo ekosistemiyle Android ve iOS platformları için çapraz platform mobil uygulama geliştirme süreçlerinin yönetimi.",
        ],
      },
      {
        company: "Yolda.com",
        role: "Frontend Developer / Team Lead",
        duration: "3 yıl 1 ay",
        descriptions: [
          "Bir lojistik startup'ının tüm front-end mimarisinin sıfırdan React, TypeScript ve Atomic Design prensipleriyle kurgulanması.",
          "Mühendislik ekibine liderlik ederek teknik standartların belirlenmesi, kod kalitesinin artırılması ve proje teslim süreçlerinin uçtan uca yönetimi.",
        ],
      },
      {
        company: "Jotform",
        role: "Frontend Developer",
        duration: "1 yıl 8 ay",
        descriptions: [
          "Milyonlarca kullanıcıya hizmet veren global bir üründe, React ve Redux-Saga tabanlı ölçeklenebilir mimarilerin geliştirilmesi.",
          "Cypress ve Jest kullanarak kapsamlı E2E test stratejilerinin oluşturulması ve hata payının minimize edilmesi.",
        ],
      },
      {
        company: "Hubx",
        role: "Frontend Developer",
        duration: "1 yıl 5 ay",
        descriptions: [
          "Mobil uygulamalar için yüksek etkileşimli Webview arayüzlerinin ve karmaşık yönetim panellerinin geliştirilmesi.",
          "React ve Vanilla JavaScript kullanarak front-end altyapısının modernizasyonu ve performans optimizasyonu.",
        ],
      },
      {
        company: "Marketcolor",
        role: "Frontend Developer",
        duration: "Proje Temelli",
        descriptions: [
          "Mikro sitelerden, ağır animasyon içeren SPA projelerine kadar geniş bir elpazede ürün geliştirme.",
          "Jenkins üzerinden CI/CD süreçlerinin yönetimi ve gelişmiş CSS animasyonlarıyla kullanıcı deneyiminin zenginleştirilmesi.",
        ],
      },
      {
        company: "Optimum7",
        role: "Frontend Developer",
        duration: "1 yıl 9 ay",
        descriptions: [
          "Shopify ve BigCommerce gibi popüler e-ticaret platformları için özel temalar ve eklentiler geliştirilmesi.",
          "Vanilla JavaScript ve jQuery kullanarak yüksek performanslı front-end çözümlerinin hayata geçirilmesi.",
        ],
      },
    ],
  },
  en: {
    about: "About",
    skills: "Skills",
    blog: "Blog",
    blogSeeAll: "See all articles",
    blogReadTime: "min read",
    experience: "Experience",
    contact: "Contact",
    aboutParagraphs: [
      "With over 10 years of experience, I've built scalable, user-centric products across e-commerce, SaaS, and logistics — taking on frontend architecture and team leadership along the way. I'm currently working at Hubx as an Expert Frontend Developer, building sustainable and high-performance web applications.",
      "Specializing in React, Next.js, and TypeScript, I prioritize performance, accessibility, and code quality in everything I build.",
    ],
    experiences: [
      {
        company: "ikas",
        role: "Senior Frontend Developer",
        duration: "10 mos",
        descriptions: [
          "Development of modular e-commerce infrastructures with drag-and-drop functionality using React and TypeScript.",
          "Building scalable, performant, and reusable UI libraries (Design System) with styled-components.",
        ],
      },
      {
        company: "retter.io",
        role: "Frontend Developer",
        duration: "1 yr 2 mos",
        descriptions: [
          "Designing modern web interfaces for high-traffic e-commerce systems using Next.js, TypeScript, and Tailwind CSS.",
          "Managing cross-platform mobile application development for Android and iOS using React Native and Expo ecosystem.",
        ],
      },
      {
        company: "Yolda.com",
        role: "Frontend Developer / Team Lead",
        duration: "3 yrs 1 mo",
        descriptions: [
          "Architecting the entire front-end of a logistics startup from scratch using React, TypeScript, and Atomic Design principles.",
          "Leading the engineering team to establish technical standards, improve code quality, and manage end-to-end project delivery.",
        ],
      },
      {
        company: "Jotform",
        role: "Frontend Developer",
        duration: "1 yr 8 mos",
        descriptions: [
          "Developing scalable architectures based on React and Redux-Saga for a global product serving millions of users.",
          "Establishing comprehensive E2E testing strategies using Cypress and Jest to minimize error rates.",
        ],
      },
      {
        company: "Hubx",
        role: "Frontend Developer",
        duration: "1 yr 5 mos",
        descriptions: [
          "Developing highly interactive Webview interfaces and complex admin dashboards for mobile applications.",
          "Modernizing front-end infrastructure and optimizing performance using React and Vanilla JavaScript.",
        ],
      },
      {
        company: "Marketcolor",
        role: "Frontend Developer",
        duration: "Project Based",
        descriptions: [
          "Product development across a wide range from micro sites to animation-heavy Single Page Applications (SPA).",
          "Managing CI/CD pipelines on Jenkins and enriching user experience with advanced CSS animations.",
        ],
      },
      {
        company: "Optimum7",
        role: "Frontend Developer",
        duration: "1 yr 9 mos",
        descriptions: [
          "Developing custom themes and plugins for popular e-commerce platforms like Shopify and BigCommerce.",
          "Delivering high-performance front-end solutions using Vanilla JavaScript and jQuery.",
        ],
      },
    ],
  },
} as const;

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      setTheme(current);
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Tema değiştir"
      className="text-text-muted hover:text-text transition-colors duration-200 cursor-pointer p-1"
    >
      {theme === "dark" ? (
        <HiSun className="w-4 h-4" />
      ) : (
        <HiMoon className="w-4 h-4" />
      )}
    </button>
  );
}

function LanguageToggle({
  lang,
  onToggle,
}: {
  lang: Lang;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Change language"
      className="font-mono text-xs text-text-muted hover:text-text transition-colors duration-200 cursor-pointer px-1.5 py-1"
    >
      {lang === "tr" ? "EN" : "TR"}
    </button>
  );
}

const blogPosts = [
  {
    title: "useEffectEvent Nedir, Nasıl Kullanılır?",
    url: "https://erdemuslu.medium.com/useeffectevent-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-c5585095ed73",
    date: "2025-10-13",
    readingTime: 4,
  },
  {
    title: "Activity Bileşeni ile Arayüz Yönetimi",
    url: "https://erdemuslu.medium.com/activity-bile%C5%9Feni-ile-aray%C3%BCz-y%C3%B6netimi-ed5b8e38e9dd",
    date: "2025-10-09",
    readingTime: 4,
  },
  {
    title: "Redux-Saga Üzerine: Nedir, Nasıl Kullanılır?",
    url: "https://erdemuslu.medium.com/redux-saga-%C3%BCzerine-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-17dfb6800602",
    date: "2021-09-12",
    readingTime: 6,
  },
  {
    title: "Redux Üzerine — Vanilla JS ile nasıl kullanılır?",
    url: "https://erdemuslu.medium.com/redux-%C3%BCzerine-vanilla-js-ile-nas%C4%B1l-kullan%C4%B1l%C4%B1r-bb70aeadc9c1",
    date: "2020-12-06",
    readingTime: 11,
  },
  {
    title: "Mobx Üzerine: Nedir, Nasıl Kullanılır? v2",
    url: "https://erdemuslu.medium.com/mobx-%C3%BCzerine-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-e821952023b2",
    date: "2020-04-25",
    readingTime: 9,
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Nuxt",
  "React Native",
  "Expo",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "tr") {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "tr" ? "en" : "tr";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.setAttribute("lang", next);
  };

  const t = translations[lang];

  const navItems = [
    { id: "about", label: t.about },
    { id: "skills", label: t.skills },
    { id: "blog", label: t.blog },
    { id: "experience", label: t.experience },
    { id: "contact", label: t.contact },
  ];

  return (
    <main className="min-h-screen bg-bg">
      {/* Sticky floating nav wrapper — transparent, only for positioning */}
      <div className="sticky top-0 z-50 w-full px-6 pt-4 pointer-events-none">
        <div className="max-w-2xl mx-auto pointer-events-auto">
          <nav
            className="backdrop-blur-3xl backdrop-saturate-200 rounded-2xl border"
            style={{
              backgroundColor: "color-mix(in srgb, var(--bg) 55%, transparent)",
              borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
              boxShadow:
                "inset 0 1px 0 color-mix(in srgb, white 7%, transparent), 0 8px 32px color-mix(in srgb, black 30%, transparent)",
            }}
          >
            <div className="px-4 h-12 flex items-center justify-between gap-4">
              {/* Left: avatar */}
              <a href="#about" className="shrink-0">
                <Image
                  src="/erdem_uslu.jpg"
                  alt="Erdem Uslu"
                  width={28}
                  height={28}
                  className="rounded-full grayscale"
                />
              </a>

              {/* Center: desktop nav links */}
              <div className="hidden sm:flex items-center gap-0.5 flex-1 justify-center">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="font-mono text-xs text-text-muted hover:text-text px-2.5 py-1.5 rounded-xl hover:bg-border/50 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Right: social icons + toggles + mobile hamburger */}
              <div className="flex items-center gap-0.5 shrink-0">
                <a
                  href="https://github.com/erdemuslu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block text-text-muted hover:text-text transition-colors duration-200 p-1.5"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/erdem-uslu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block text-text-muted hover:text-text transition-colors duration-200 p-1.5"
                >
                  <FaLinkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://medium.com/@erdemuslu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block text-text-muted hover:text-text transition-colors duration-200 p-1.5"
                >
                  <FaMedium className="w-3.5 h-3.5" />
                </a>
                <div className="hidden sm:block w-px h-4 bg-border/60 mx-1" />
                <LanguageToggle lang={lang} onToggle={toggleLang} />
                <ThemeToggle />
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Menu"
                  className="sm:hidden text-text-muted hover:text-text transition-colors duration-200 cursor-pointer p-1.5 ml-0.5"
                >
                  {menuOpen ? (
                    <HiX className="w-4 h-4" />
                  ) : (
                    <HiMenu className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
              <div
                className="sm:hidden border-t px-4 py-4 flex flex-col gap-3 rounded-b-2xl"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--border) 50%, transparent)",
                }}
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-sm text-text-muted hover:text-text transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-2 border-t border-border/30">
                  <a href="https://github.com/erdemuslu" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors duration-200">
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/erdem-uslu/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors duration-200">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="https://medium.com/@erdemuslu" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors duration-200">
                    <FaMedium className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Hero + About merged */}
        <section id="about" className="mb-16 scroll-mt-24">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text font-serif">
              Erdem Uslu
            </h1>
            <p className="font-mono text-sm text-accent">
              Frontend Developer
            </p>
          </div>
          <div className="space-y-4 text-text-muted leading-relaxed">
            {t.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <hr className="border-border mb-16" />

        {/* Skills */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-6">
            {t.skills}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-border mb-16" />

        {/* Blog */}
        <section id="blog" className="mb-16 scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-6">
            {t.blog}
          </h2>
          <ul className="space-y-4">
            {blogPosts.map((post) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 text-text-muted hover:text-accent transition-colors duration-200"
                >
                  <div>
                    <span className="text-sm">{post.title}</span>
                    <div className="font-mono text-xs text-text-faint mt-0.5">
                      {new Date(post.date).toLocaleDateString(
                        lang === "tr" ? "tr-TR" : "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                      <span className="mx-1.5">&middot;</span>
                      {post.readingTime} {t.blogReadTime}
                    </div>
                  </div>
                  <HiExternalLink className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://medium.com/@erdemuslu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 font-mono text-xs text-accent hover:text-accent-hover transition-colors duration-200"
          >
            {t.blogSeeAll} &rarr;
          </a>
        </section>

        <hr className="border-border mb-16" />

        {/* Experience */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-8">
            {t.experience}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.experiences.map((exp) => (
              <div
                key={exp.company}
                className="bg-bg-secondary rounded-2xl p-5 border border-border"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block font-mono text-xs uppercase tracking-wider bg-border text-text-faint px-2 py-0.5 rounded mb-2">
                      {exp.company}
                    </span>
                    <p className="text-sm font-medium text-text">{exp.role}</p>
                  </div>
                  <span className="font-mono text-xs text-text-faint shrink-0 mt-0.5">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.descriptions.map((desc, i) => (
                    <li
                      key={i}
                      className="text-xs text-text-muted leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-text-faint"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border mb-16" />

        {/* Contact */}
        <section id="contact" className="mb-16 scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-6">
            {t.contact}
          </h2>
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="mailto:erdem@erdemuslu.com"
              className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200"
            >
              <HiOutlineMail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://github.com/erdemuslu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200"
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/erdem-uslu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://medium.com/@erdemuslu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200"
            >
              <FaMedium className="w-4 h-4" />
              <span className="text-sm">Medium</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="font-mono text-xs text-text-faint">
            &copy; {new Date().getFullYear()} Erdem Uslu
          </p>
        </footer>
      </div>
    </main>
  );
}
