
"use client";
import { useEffect, useRef } from "react";

const stats = [
    { val: "100%", lbl: "Job Success Score" },
    { val: "5.0 ★", lbl: "Client Rating" },
    { val: "TOP", lbl: "Rated Badge" },
];

export default function Upwork() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        [leftRef, rightRef].forEach((ref) => {
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                        obs.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            obs.observe(el);
        });
    }, []);

    return (
        <section
            id="upwork"
            className="upwork-inner"
            style={{
                background: "var(--bg2)",
            }}
        >
            {/* Left Content */}
            <div
                ref={leftRef}
                className="upwork-left"
                style={{
                    opacity: 0,
                    transform: "translateY(24px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
            >
                <div style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.7rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                }}>
                    Recognition
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "0.6rem" }}>
                    Upwork <span style={{ color: "var(--cyan)" }}>Top Rated</span>
                </h2>
                <div style={{
                    width: 60,
                    height: 2,
                    background: "linear-gradient(90deg, var(--cyan), transparent)",
                    marginBottom: "1.8rem",
                }} />

                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.92rem", maxWidth: 460 }}>
                    Achieved <strong style={{ color: "var(--white)" }}>Top Rated</strong> status on Upwork — awarded to
                    the top freelancers who consistently deliver quality work.
                </p>

                <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
                    {stats.map((s) => (
                        <div key={s.lbl}>
                            <div style={{ fontFamily: "var(--mono)", fontSize: "1.4rem", fontWeight: 800, color: "var(--cyan)" }}>
                                {s.val}
                            </div>
                            <div style={{ fontSize: "0.7rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                {s.lbl}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right — Badge */}
            <div
                ref={rightRef}
                className="upwork-right"
                style={{
                    opacity: 0,
                    transform: "translateY(24px)",
                    transition: "opacity 0.6s 0.15s ease, transform 0.6s 0.15s ease",
                }}
            >
                <div
                    className="animate-float"
                    data-hover
                    style={{
                        background: "var(--card)",
                        border: "1px solid rgba(0,229,255,0.28)",
                        borderRadius: 8,
                        padding: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        boxShadow: "0 0 60px rgba(0,229,255,0.07)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ fontSize: "3.5rem", position: "relative" }}>🏆</div>
                    <div style={{ position: "relative" }}>
                        <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--cyan)" }}>
                            Top Rated Freelancer
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.3rem" }}>
                            Upwork Certified · Recently Achieved
                        </div>
                    </div>
                </div>

                {/* Decorative lines */}
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.2rem" }}>
                    {[60, 30, 80, 20, 50].map((w, i) => (
                        <div key={i} style={{
                            height: 2,
                            flex: w,
                            background: i % 2 === 0 ? "var(--cyan)" : "var(--border)",
                            borderRadius: 2,
                            opacity: 0.4 + i * 0.1,
                        }} />
                    ))}
                </div>
            </div>
        </section>
    );
}