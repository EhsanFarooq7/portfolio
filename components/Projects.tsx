"use client";
import { useEffect, useRef } from "react";

const projects = [
    {
        num: "PROJECT_01",
        title: "Automatic Grading System",
        desc: "An AI-powered grading platform that automates evaluation of hand written student submissions using LLMs. Built with Django backend and React frontend — replacing manual grading with intelligent, consistent scoring at scale.",
        tags: ["Django", "React", "LLM", "AI/NLP", "REST API", "Role based access", "Tailwind", ],
        span: 1,
    },
    {
        num: "PROJECT_02",
        title: "Voicescape — AI-Powered Executive Research Platform",
        desc: "Intelligent research automation platform that ingests PDF case studies to identify target executives (CFO, CTO, CEO). Extracts metadata via LLM, leverages Cognism API for contact discovery, uses SERP API to surface authored content across social media and blogs, applies custom AI scoring rubrics, and seamlessly exports researched leads into HubSpot campaigns with auto-generated email sequences.",
        tags: ["Next.js", "TypeScript", "LLM", "Cognism API", "SERP API", "HubSpot", "PDF Processing", "AI/ML"],
        span: 1,
    },
    {
        num: "PROJECT_03 — GHL AUTOMATION",
        title: "Automatic Lead Scoring System",
        desc: "Sophisticated GoHighLevel CRM automation that scores leads in real-time, routes them through custom sales funnels, triggers personalized email nurturing sequences, and executes intelligent follow-up workflows — turning cold leads into warm conversations on autopilot.",
        tags: ["GoHighLevel", "Sales Funnel", "Email Nurturing", "Automation", "CRM", "Lead Scoring"],
        span: 1,
    },

    {
        num: "PROJECT_04",
        title: "Travel Booking Platform",
        desc: "Full-featured travel booking app with Next.js — SSR for SEO, real-time availability checks, dynamic pricing, and a conversion-optimized booking flow with smooth UX.",
        tags: ["Next.js", "SSR", "React", "REST API"],
        span: 1,
    },
    {
        num: "PROJECT_05",
        title: "Business Website",
        desc: "High-performance corporate website with Next.js — static generation, fully SEO-optimized, responsive design, and integrated CMS for effortless content management.",
        tags: ["Next.js", "CMS", "SEO", "Tailwind"],
        span: 1,
    },
    {
        num: "PROJECT_06",
        title: "E-Commerce Platform",
        desc: "End-to-end MERN stack e-commerce — product catalog, cart, secure checkout, payment gateway integration, order management, and a full admin dashboard.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        span: 1,
    },
    
    
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
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
                borderRadius: 4,
                padding: "2rem",
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.6s ${index * 0.1}s ease, transform 0.6s ${index * 0.1}s ease, border-color 0.25s, box-shadow 0.25s`,
                position: "relative",
                overflow: "hidden",
                // gridColumn: project.span === 2 ? "span 2" : "span 1",
                gridColumn: project.span === 2 ? "span var(--project-span, 2)" : "span 1",
                cursor: "none",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-5px)";
                el.style.borderColor = "rgba(0,229,255,0.38)";
                el.style.boxShadow = "0 20px 60px rgba(0,229,255,0.1)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
            }}
        >
            {/* Corner glow */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 120,
                    height: 120,
                    background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    color: "var(--cyan)",
                    opacity: 0.5,
                    marginBottom: "0.8rem",
                    letterSpacing: "0.08em",
                }}
            >
                {project.num}
            </div>

            <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.6rem", color: "var(--white)" }}>
                {project.title}
            </div>

            <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.3rem" }}>
                {project.desc}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.63rem",
                            color: "var(--cyan)",
                            border: "1px solid var(--border)",
                            borderRadius: 2,
                            padding: "0.2rem 0.6rem",
                            letterSpacing: "0.05em",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{
            padding: "80px 5%",
            width: "100%" }}>
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
        portfolio
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "0.6rem" }}>
                Projects <span style={{ color: "var(--cyan)" }}>Built</span>
            </h2>
            <div
                style={{
                    width: 60,
                    height: 2,
                    background: "linear-gradient(90deg, var(--cyan), transparent)",
                    marginBottom: "3rem",
                }}
            />

            <div className="projects-grid"
                style={{
                    display: "grid",
                    // gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1.6rem",
                    
                }}
            >
                {projects.map((p, i) => (
                    <ProjectCard key={p.num} project={p} index={i} />
                ))}
            </div>
        </section>
    );
}