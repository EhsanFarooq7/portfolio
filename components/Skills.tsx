"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiPython, SiReact, SiNextdotjs, SiOpenai } from "react-icons/si";
import { FaGear, FaDiagramProject, FaHeadset, FaCode } from "react-icons/fa6";

const skills = [
  {
    icon: <FaGear color="var(--cyan)" size={24} />,
    name: "Make.com & Zapier Workflows",
    desc: "Architecting end-to-end autonomous business workflows — webhook triggers, conditional routers, HTTP APIs, and dynamic error handling.",
    level: 95,
  },
  {
    icon: <SiOpenai color="#ffffff" size={24} />,
    name: "AI & LLM Integration",
    desc: "Integrating OpenAI Chat-Completions, AI Receptionists, NLP text parsing, custom scoring rubrics, and automated executive intelligence.",
    level: 92,
  },
  {
    icon: <FaHeadset color="var(--cyan)" size={24} />,
    name: "CRM Lead Engines (FUB & GHL)",
    desc: "Follow Up Boss (FUB) & GoHighLevel (GHL) lead engines: instant call/lead sync, algorithmic lead scoring, and automated nurture sequences.",
    level: 90,
  },
  {
    icon: <SiNextdotjs color="#ffffff" size={24} />,
    name: "Next.js & React Applications",
    desc: "Conversion-focused web platforms with Next.js SSR/SSG for SEO, glassmorphic UX, fast rendering, and API integrations.",
    level: 92,
  },
  {
    icon: <SiPython color="#3776AB" size={24} />,
    name: "Python & Backend Systems",
    desc: "Django & FastAPI backends, asynchronous microservices, database schemas (PostgreSQL, MongoDB), and custom REST APIs.",
    level: 88,
  },
  {
    icon: <FaDiagramProject color="var(--cyan)" size={24} />,
    name: "API Ecosystems & Webhooks",
    desc: "Connecting third-party APIs (Circle API, Cognism, SERP API, LinkedIn/Facebook APIs, HubSpot) into unified business pipelines.",
    level: 94,
  },
];

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const observed = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          if (barRef.current) {
            barRef.current.style.animationPlayState = "running";
          }
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      data-hover
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        padding: "1.8rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        opacity: isMounted ? 0 : 1,
        transform: isMounted ? "translateY(24px)" : "none",
        transition: `opacity 0.55s ${index * 0.08}s ease, transform 0.55s ${index * 0.08}s ease, border-color 0.25s, box-shadow 0.25s`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(0,229,255,0.4)";
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 14px 50px rgba(0,229,255,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: "1.5rem", marginBottom: "0.9rem", filter: "drop-shadow(0 0 6px rgba(0,229,255,0.4))" }}>
        {skill.icon}
      </div>
      <div style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.4rem", color: "#ffffff" }}>{skill.name}</div>
      <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7 }}>{skill.desc}</div>

      <div style={{ marginTop: "1.2rem", height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div
          ref={barRef}
          style={{
            height: "100%",
            width: `${skill.level}%`,
            background: "linear-gradient(90deg, var(--cyan2), var(--cyan))",
            borderRadius: 2,
            transformOrigin: "left",
            transform: "scaleX(0)",
            animationPlayState: "paused",
            animation: `barGrow 1s ${index * 0.1}s ease forwards`,
          }}
        />
      </div>

      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", marginTop: "0.4rem", textAlign: "right", opacity: 0.8 }}>
        {skill.level}% PROFICIENCY
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg2)", padding: "90px 5%", width: "100%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--cyan)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          CORE CAPABILITIES
        </div>

        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "0.6rem" }}>
          Automation &amp; Tech <span style={{ color: "var(--cyan)" }}>Capabilities</span>
        </h2>

        <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, var(--cyan), transparent)", marginBottom: "3rem" }} />

        <div className="skills-grid">
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}