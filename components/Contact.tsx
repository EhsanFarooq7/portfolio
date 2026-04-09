"use client";
import { useEffect, useRef } from "react";

const socials = [
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~014e7d5e62dc7e436a?viewMode=1" },
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
            style={{ padding: "6rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}
        >
            {/* BG glow */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)",
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
                    }}
                >
          get in touch
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "0.5rem" }}>
                    Let&apos;s <span style={{ color: "var(--cyan)" }}>Work Together</span>
                </h2>
                <div
                    style={{
                        width: 60,
                        height: 2,
                        background: "linear-gradient(90deg, var(--cyan), transparent)",
                        margin: "0 auto 2rem",
                    }}
                />

                <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.8, fontSize: "0.92rem" }}>
                    Whether you need a full-stack application, an AI-powered system, or CRM automation —
                    I&apos;m ready to build it. Let&apos;s connect and create something great.
                </p>

                {/* Email */}
                <a
                    href="mailto:muhammadehsanfarooq@gmail.com"
                    data-hover
                    style={{
                        display: "inline-block",
                        // alignItems: "center",
                        // 
                        margin: "2.5rem auto",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
                        color: "var(--cyan)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--border)",
                        paddingBottom: "0.3rem",
                        letterSpacing: "0.05em",
                        transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                >
                    muhammadehsanfarooq@gmail.com
                </a>

                {/* Socials */}
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
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