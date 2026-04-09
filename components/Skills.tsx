// "use client";
// import { useEffect, useRef, useState } from "react";
// import { SiPython, SiReact, SiNextdotjs, SiMongodb, SiFastapi } from "react-icons/si";

// const skills = [
//     {
//         icon: <SiPython  />,
//         name: "Python Development",
//         desc: "Robust REST APIs & web apps with Django & FastAPI — from ORM-powered backends to async microservices.",
//         level: 90,
//     },
//     {
//         // icon: "⚛️",
//         icon: <SiReact color="#61DAFB" />,
//         name: "MERN Stack",
//         desc: "Full-stack JavaScript with MongoDB, Express, React, and Node.js — end-to-end product development.",
//         level: 88,
//     },
//     {
//         icon: <SiNextdotjs color="#ffffff" />,
//         name: "React & Next.js",
//         desc: "Modern frontend with hooks, SSR/SSG in Next.js, and performance-first component architecture.",
//         level: 92,
//     },
//     {
//         icon: "🤖",
//         name: "AI Integration",
//         desc: "Integrating LLMs into production apps — AI-powered grading, NLP pipelines, intelligent automation.",
//         level: 80,
//     },
//     {
//         icon: "📊",
//         name: "GoHighLevel CRM",
//         desc: "Advanced GHL automations: lead scoring, email nurturing, sales funnels, and follow-up sequences.",
//         level: 85,
//     },
//     {
//         icon: "🔧",
//         name: "Backend & APIs",
//         desc: "RESTful & GraphQL APIs, database design (MongoDB, PostgreSQL), cloud deployment and DevOps.",
//         level: 83,
//     },
// ];

// function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
//     const cardRef = useRef<HTMLDivElement>(null);
//     const barRef = useRef<HTMLDivElement>(null);
//     const [isMounted, setIsMounted] = useState(false);
//     const observed = useRef(false);

//     useEffect(() => {
//         const el = cardRef.current;
//         if (!el) return;
//         const obs = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting && !observed.current) {
//                     observed.current = true;
//                     el.style.opacity = "1";
//                     el.style.transform = "translateY(0)";
//                     if (barRef.current) {
//                         barRef.current.style.animationPlayState = "running";
//                     }
//                 }
//             },
//             { threshold: 0.15 }
//         );
//         obs.observe(el);
//         return () => obs.disconnect();
//     }, []);
//     const initialStyles = {
//         background: "var(--card)",
//         border: "1px solid var(--border)",
//         borderRadius: 4,
//         padding: "1.8rem",
//         position: "relative",
//         overflow: "hidden",
//         cursor: "none",
//         // Only apply animation styles if we are on the client
//         opacity: isMounted ? 0 : 1,
//         transform: isMounted ? "translateY(24px)" : "none",
//         transition: `opacity 0.55s ${index * 0.08}s ease, transform 0.55s ${index * 0.08}s ease, border-color 0.25s, box-shadow 0.25s`,
//     };

//     return (
//         <div 
//             ref={cardRef}
//             data-hover
//             style={{
//                 background: "var(--card)",
//                 border: "1px solid var(--border)",
//                 borderRadius: 4,
//                 padding: "1.8rem",
//                 opacity: 0,
//                 transform: "translateY(24px)",
//                 transition: `opacity 0.55s ${index * 0.08}s ease, transform 0.55s ${index * 0.08}s ease, border-color 0.25s, box-shadow 0.25s`,
//                 position: "relative",
//                 overflow: "hidden",
//                 cursor: "none",
//             }}
//             onMouseEnter={(e) => {
//                 const el = e.currentTarget;
//                 el.style.borderColor = "rgba(0,229,255,0.4)";
//                 el.style.transform = "translateY(-5px)";
//                 el.style.boxShadow = "0 14px 50px rgba(0,229,255,0.1)";
//             }}
//             onMouseLeave={(e) => {
//                 const el = e.currentTarget;
//                 el.style.borderColor = "var(--border)";
//                 el.style.transform = "translateY(0)";
//                 el.style.boxShadow = "none";
//             }}
//         >
//             {/* Top shimmer line */}
//             <div
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: 1,
//                     background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
//                     opacity: 0,
//                     transition: "opacity 0.3s",
//                 }}
//             />

//             <div style={{ fontSize: "1.5rem", marginBottom: "0.9rem", filter: "drop-shadow(0 0 6px var(--cyan))" }}>
//                 {skill.icon}
//             </div>
//             <div style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: "0.4rem" }}>{skill.name}</div>
//             <div style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}>{skill.desc}</div>

//             {/* Bar */}
//             <div
//                 style={{
//                     marginTop: "1.2rem",
//                     height: 3,
//                     background: "rgba(255,255,255,0.06)",
//                     borderRadius: 2,
//                     overflow: "hidden",
//                 }}
//             >
//                 <div
//                     ref={barRef}
//                     style={{
//                         height: "100%",
//                         width: `${skill.level}%`,
//                         background: "linear-gradient(90deg, var(--cyan2), var(--cyan))",
//                         borderRadius: 2,
//                         transformOrigin: "left",
//                         transform: "scaleX(0)",
//                         animationPlayState: "paused",
//                         animation: `barGrow 1s ${index * 0.1}s ease forwards`,
//                     }}
//                 />
//             </div>

//             {/* Level text */}
//             <div
//                 style={{
//                     fontFamily: "'Space Mono', monospace",
//                     fontSize: "0.65rem",
//                     color: "var(--cyan)",
//                     marginTop: "0.4rem",
//                     textAlign: "right",
//                     opacity: 0.7,
//                 }}
//             >
//                 {skill.level}%
//             </div>
//         </div>
//     );
// }

// export default function Skills() {
//     return (
//         <section
//             id="skills"
//             style={{
//                 background: "var(--bg2)", padding: "80px 5%",width: "100%" }}
//         >
//             <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//                 <div
//                     style={{
//                         fontFamily: "'Space Mono', monospace",
//                         fontSize: "0.7rem",
//                         color: "var(--cyan)",
//                         letterSpacing: "0.2em",
//                         textTransform: "uppercase",
//                         marginBottom: "0.5rem",
//                     }}
//                 >
//             </div>
//         Expertise
//             </div>
//             <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "0.6rem" }}>
//                 Tech <span style={{ color: "var(--cyan)" }}>Stack</span>
//             </h2>
//             <div
//                 style={{
//                     width: 60,
//                     height: 2,
//                     background: "linear-gradient(90deg, var(--cyan), transparent)",
//                     marginBottom: "3rem",
//                 }}
//             />

//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
//                     gap: "1.4rem",
//                 }}
//             >
//                 {skills.map((s, i) => (
//                     <SkillCard key={s.name} skill={s} index={i} />
//                 ))}
//             </div>
//         </section>
//     );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import { SiPython, SiReact, SiNextdotjs, SiMongodb, SiFastapi } from "react-icons/si";

const skills = [
    {
        icon: <SiPython color="#ffffff" />,
        name: "Python Development",
        desc: "Robust REST APIs & web apps with Django & FastAPI — from ORM-powered backends to async microservices.",
        level: 90,
    },
    {
        icon: <SiReact color="#61DAFB" />,
        name: "MERN Stack",
        desc: "Full-stack JavaScript with MongoDB, Express, React, and Node.js — end-to-end product development.",
        level: 88,
    },
    {
        icon: <SiNextdotjs color="#ffffff" />,
        name: "React & Next.js",
        desc: "Modern frontend with hooks, SSR/SSG in Next.js, and performance-first component architecture.",
        level: 92,
    },
    {
        icon: "🤖",
        name: "AI Integration",
        desc: "Integrating LLMs into production apps — AI-powered grading, NLP pipelines, intelligent automation.",
        level: 80,
    },
    {
        icon: "📊",
        name: "GoHighLevel CRM",
        desc: "Advanced GHL automations: lead scoring, email nurturing, sales funnels, and follow-up sequences.",
        level: 85,
    },
    {
        icon: "🔧",
        name: "Backend & APIs",
        desc: "RESTful & GraphQL APIs, database design (MongoDB, PostgreSQL), cloud deployment and DevOps.",
        level: 83,
    },
];

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    const observed = useRef(false);

    useEffect(() => {
        setIsMounted(true); // Now we are on the client
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
                borderRadius: 4,
                padding: "1.8rem",
                position: "relative",
                overflow: "hidden",
                cursor: "none",
                // THE FIX: Use isMounted logic here
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
            <div style={{ fontSize: "1.5rem", marginBottom: "0.9rem", filter: "drop-shadow(0 0 6px var(--cyan))" }}>
                {skill.icon}
            </div>
            <div style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: "0.4rem" }}>{skill.name}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}>{skill.desc}</div>

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

            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", marginTop: "0.4rem", textAlign: "right", opacity: 0.7 }}>
                {skill.level}%
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" style={{ background: "var(--bg2)", padding: "80px 5%", width: "100%" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* FIX: Corrected text placement and div closure */}
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
                    Expertise
                </div>

                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "0.6rem" }}>
                    Tech <span style={{ color: "var(--cyan)" }}>Stack</span>
                </h2>

                <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, var(--cyan), transparent)", marginBottom: "3rem" }} />

                {/* Use the className so your CSS can handle the 3-column limit and mobile view */}
                <div className="skills-grid">
                    {skills.map((s, i) => (
                        <SkillCard key={s.name} skill={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}