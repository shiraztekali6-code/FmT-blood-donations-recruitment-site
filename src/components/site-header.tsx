"use client";

import { useLanguage } from "@/components/language-provider";
import type { Language } from "@/lib/i18n";

const languageOptions: Array<{ label: string; value: Language }> = [
  { label: "עברית", value: "he" },
  { label: "English", value: "en" },
  { label: "ייִדיש", value: "yi" },
  { label: "አማርኛ", value: "am" }
];

const navItems = [
  { key: "study", href: "#top" },
  { key: "why", href: "#why-this-research-matters" },
  { key: "join", href: "#registration" }
] as const;

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();

  function onLanguageChange(nextLanguage: Language) {
    setLanguage(nextLanguage);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            DNA
          </span>
          <span className="brand-text">
            {t.brand.title}
            <small>{t.brand.subtitle}</small>
          </span>
        </a>

        <nav aria-label={t.nav.primaryLabel} className="header-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{t.nav[item.key]}</a>
              </li>
            ))}
          </ul>
          <div className="language-switcher" aria-label={t.nav.languageLabel}>
            {languageOptions.map((option, index) => (
              <span className="language-option" key={option.value}>
                {index > 0 ? <span aria-hidden="true">|</span> : null}
                <button
                  type="button"
                  className={language === option.value ? "active" : ""}
                  onClick={() => onLanguageChange(option.value)}
                  aria-pressed={language === option.value}
                >
                  {option.label}
                </button>
              </span>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
