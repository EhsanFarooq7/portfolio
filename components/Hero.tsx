"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
                    Available for work
                </div>

                {/* Name */}
                <h1 className="hero-name animate-fadeInUp delay-100">
                    Muhammad<br />
                    Ehsan<br />
                    <span className="hero-accent">Farooq</span>
                </h1>

                {/* Tagline */}
                <p className="hero-tagline animate-fadeInUp delay-200">
                    <span className="hero-accent"></span> Full Stack Developer &amp; AI Enthusiast
                </p>

                {/* Divider line */}
                <div className="hero-divider animate-fadeInUp delay-200" />

                {/* Description */}
                <p className="hero-desc animate-fadeInUp delay-300">
                    BS Software Engineering graduate and Upwork{" "}
                    <strong className="hero-accent">Top Rated Freelancer</strong> building
                    scalable web applications, AI-powered systems, and CRM automation
                    that delivers real results.
                </p>

                {/* CTAs */}
                <div className="hero-ctas animate-fadeInUp delay-400">
                    <a href="#projects" data-hover className="btn-primary">
                        View Work
                    </a>
                    <a href="#contact" data-hover className="btn-outline">
                        Let&apos;s Talk
                    </a>
                </div>

                {/* Stats */}
                <div className="hero-stats animate-fadeInUp delay-500">
                    {[
                        { val: "5+", lbl: "Projects Built" },
                        { val: "3+", lbl: "Tech Stacks" },
                        { val: "⭐", lbl: "Top Rated" },
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
                    <div className="photo-label">[ MEF — Developer ]</div>
                </div>
            </div>
        </section>
    );
}