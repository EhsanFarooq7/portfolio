"use client";
import React, { useEffect, useRef } from "react";
import { FaBolt, FaEnvelope, FaUpwork, FaGithub, FaLinkedin } from "react-icons/fa6";

const socials = [
  { label: "Upwork Profile", href: "https://www.upwork.com/freelancers/~014e7d5e62dc7e436a?viewMode=1" },
  { label: "GitHub", href: "https://github.com/EhsanFarooq7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ehsan-farooq-17b2b8266/" },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{ padding: "7rem 2rem", textAlign: "center", position: "relative", overflow: "hidden", background: "var(--bg)" }}
    >
      {/* BG glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={containerRef}
        style={{
          opacity: 0,
          transform: "translateY(28px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--cyan)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <FaBolt size={12} /> READY TO AUTOMATE YOUR BUSINESS?
        </div>

        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: "0.5rem", color: "#ffffff" }}>
          Let&apos;s Build Your <span style={{ color: "var(--cyan)" }}>AI &amp; Automation Engine</span>
        </h2>

        <div
          style={{
            width: 60,
            height: 2,
            background: "linear-gradient(90deg, var(--cyan), transparent)",
            margin: "0 auto 2rem",
          }}
        />

        <p style={{ color: "#a0b8c6", maxWidth: 620, margin: "0 auto", lineHeight: 1.8, fontSize: "0.98rem" }}>
          Whether you want to automate repetitive operational bottlenecks with Make.com/Zapier, build an AI-driven lead engine, or engineer a high-performing Next.js web application — let&apos;s map out your solution.
        </p>

        {/* Email button */}
        <div style={{ margin: "2.5rem auto 2rem" }}>
          <a
            href="mailto:muhammadehsanfarooq@gmail.com"
            data-hover
            className="btn-primary"
            style={{
              fontSize: "0.85rem",
              padding: "1rem 2.2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <FaEnvelope size={14} /> Schedule an Automation Consultation
          </a>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "var(--cyan)", marginTop: "0.8rem", opacity: 0.8 }}>
            muhammadehsanfarooq@gmail.com
          </div>
        </div>

        {/* Socials */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--muted)",
                textDecoration: "none",
                border: "1px solid var(--border)",
                padding: "0.6rem 1.5rem",
                borderRadius: 2,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--cyan)";
                el.style.borderColor = "var(--cyan)";
                el.style.background = "var(--cyan-dim)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--muted)";
                el.style.borderColor = "var(--border)";
                el.style.background = "transparent";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}