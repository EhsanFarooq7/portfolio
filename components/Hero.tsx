"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaBolt } from "react-icons/fa6";

export default function Hero() {
    const scanRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scanRef.current;
        if (!el) return;
        el.style.animation = "none";
        requestAnimationFrame(() => {
            if (el) el.style.animation = "";
        });
    }, []);

    return (
        <section id="hero" className="hero-section">
            {/* Grid background */}
            <div className="hero-grid-bg animate-gridPan" />

            {/* Scan line */}
            <div ref={scanRef} className="hero-scan animate-scan" />

            {/* Radial glow */}
            <div className="hero-glow" />

            {/* LEFT — Text */}
            <div className="hero-left relative z-10">

                {/* Badge */}
                <div className="hero-badge animate-fadeInUp">
                    <span className="badge-dot animate-pulseDot" />
                    Available for AI &amp; Automation Projects
                </div>

                {/* Name */}
                <h1 className="hero-name animate-fadeInUp delay-100">
                    Muhammad<br />
                    Ehsan<br />
                    <span className="hero-accent">Farooq</span>
                </h1>

                {/* Tagline */}
                <p className="hero-tagline animate-fadeInUp delay-200">
                    <span className="hero-accent">AI &amp; Business Automation Specialist</span> | CRM Lead Engine Architect
                </p>

                {/* Divider line */}
                <div className="hero-divider animate-fadeInUp delay-200" />

                {/* Description */}
                <p className="hero-desc animate-fadeInUp delay-300">
                    Software Engineer &amp; Upwork{" "}
                    <strong className="hero-accent">Top Rated Automation Specialist</strong> transforming manual business bottlenecks into autonomous AI systems, Make.com/Zapier workflows, and high-converting web platforms that scale operations effortlessly.
                </p>

                {/* CTAs */}
                <div className="hero-ctas animate-fadeInUp delay-400">
                    <a href="#projects" data-hover className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        Explore Case Studies <FaArrowRight size={12} />
                    </a>
                    <a href="#contact" data-hover className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        <FaBolt size={12} /> Book Automation Audit
                    </a>
                </div>

                {/* Stats */}
                <div className="hero-stats animate-fadeInUp delay-500">
                    {[
                        { val: "100+ Hrs", lbl: "Saved / Mo For Clients" },
                        { val: "0 Lost", lbl: "Automated Lead Engines" },
                        { val: "⭐ Top Rated", lbl: "Upwork Specialist" },
                    ].map((s) => (
                        <div key={s.lbl} className="stat-item">
                            <div className="stat-val">{s.val}</div>
                            <div className="stat-lbl">{s.lbl}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT — Photo */}
            <div className="hero-right relative z-10 animate-fadeInRight">
                <div className="photo-frame">
                    <div className="photo-glow animate-glowPulse" />
                    <div className="photo-border animate-borderRace" />
                    <div className="corner corner-tl" />
                    <div className="corner corner-br" />
                    <Image
                        src="/profile photo.jpg"
                        alt="Muhammad Ehsan Farooq"
                        fill
                        className="object-cover object-top photo-img"
                        priority
                    />
                    <div className="photo-label">[ MEF — AI &amp; Automation Architect ]</div>
                </div>
            </div>
        </section>
    );
}