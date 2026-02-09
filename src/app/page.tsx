"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";

type Lang = "tr" | "en";

const translations = {
  tr: {
    about: "Hakkımda",
    skills: "Yeteneklerim",
    experience: "Deneyim",
    contact: "İletişim",
    aboutParagraphs: [
      "10 yıllık yazılım geliştirme deneyimimde, modern web teknolojileri kullanarak ölçeklenebilir ve kullanıcı odaklı ürünler geliştirdim. E-ticaret, SaaS platformları ve lojistik sistemleri gibi farklı sektörlerde frontend mimarisi ve ekip yönetimi konularında sorumluluk aldım.",
      "React, Next.js ve TypeScript ekosisteminde uzmanlaşarak, Yolda.com'da frontend mimarisini sıfırdan kurdum ve ekip liderliği yaptım. Jotform'da milyonlarca kullanıcıya hizmet eden, test odaklı ve sürdürülebilir kod yapıları geliştirdim. İkas ve retter.io gibi projelerde performans kritik uygulamalar ve dinamik arayüz sistemleri üzerinde çalıştım.",
      "Yazılım geliştirme yaklaşımımda performans, erişilebilirlik ve sürdürülebilirlik önceliklidir. Modern web standartlarını ve best practice'leri uygulayarak, hem geliştirici deneyimini hem de son kullanıcı memnuniyetini ön planda tutan çözümler üretiyorum.",
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
          "Mikro sitelerden, ağır animasyon içeren SPA projelerine kadar geniş bir yelpazede ürün geliştirme.",
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
    experience: "Experience",
    contact: "Contact",
    aboutParagraphs: [
      "Throughout my 10 years of software development experience, I have built scalable and user-centric products using modern web technologies. I have taken on responsibilities in frontend architecture and team management across diverse industries including e-commerce, SaaS platforms, and logistics systems.",
      "Specializing in the React, Next.js, and TypeScript ecosystem, I built the entire frontend architecture from scratch at Yolda.com and led the engineering team. At Jotform, I developed test-driven and maintainable code structures serving millions of users. I worked on performance-critical applications and dynamic interface systems at ikas and retter.io.",
      "In my approach to software development, performance, accessibility, and maintainability are top priorities. By applying modern web standards and best practices, I deliver solutions that prioritize both developer experience and end-user satisfaction.",
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
      className="text-text-muted hover:text-text transition-colors duration-200 cursor-pointer"
    >
      {theme === "dark" ? (
        <HiSun className="w-5 h-5" />
      ) : (
        <HiMoon className="w-5 h-5" />
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
      className="font-mono text-xs text-text-muted hover:text-text transition-colors duration-200 cursor-pointer"
    >
      {lang === "tr" ? "EN" : "TR"}
    </button>
  );
}

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

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-16">
          <div className="flex items-center gap-4">
            <Image
              src="/erdem_uslu.jpg"
              alt="Erdem Uslu"
              width={64}
              height={64}
              className="rounded-full grayscale"
            />
            <div>
              <h1 className="text-2xl font-bold text-text font-serif">
                Erdem Uslu
              </h1>
              <p className="font-mono text-sm text-accent">
                Senior Frontend Developer
              </p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <LanguageToggle lang={lang} onToggle={toggleLang} />
              <ThemeToggle />
            </div>
          </div>
        </section>

        {/* Hakkımda */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-6">
            {t.about}
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            {t.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <hr className="border-border mb-16" />

        {/* Yetenekler */}
        <section className="mb-16">
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

        {/* Deneyim */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-8">
            {t.experience}
          </h2>
          <div className="space-y-10">
            {t.experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <span className="font-semibold text-text">
                      {exp.company}
                    </span>
                    <span className="text-text-faint mx-2">&mdash;</span>
                    <span className="text-text-muted">{exp.role}</span>
                  </div>
                  <span className="font-mono text-xs text-text-faint shrink-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-1">
                  {exp.descriptions.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-muted leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-text-faint"
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

        {/* İletişim */}
        <section className="mb-16">
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
