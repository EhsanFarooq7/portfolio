"use client";
import React, { useEffect, useState } from "react";

const links = [
  { href: "#skills", label: "Capabilities" },
  { href: "#projects", label: "Case Studies" },
  { href: "#upwork", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["skills", "projects", "upwork", "contact"];
      const pos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          background: scrolled ? "rgba(4,8,16,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        {/* Logo */}
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.9rem", color: "var(--cyan)", letterSpacing: "0.1em", fontWeight: 700 }}>
          EHSAN<span style={{ color: "#ffffff" }}>_AI</span>
        </div>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-hover
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: active === l.href.slice(1) ? "var(--cyan)" : "var(--muted)",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            padding: "0.4rem 0.6rem",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                background: "var(--cyan)",
                borderRadius: "1px",
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen
                    ? i === 0 ? "translateY(6px) rotate(45deg)"
                      : i === 2 ? "translateY(-6px) rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(4,8,16,0.97)",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
            backdropFilter: "blur(20px)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "1.4rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: active === l.href.slice(1) ? "var(--cyan)" : "var(--white)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}