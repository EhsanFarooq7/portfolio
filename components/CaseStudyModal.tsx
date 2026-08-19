"use client";
import React, { useEffect } from "react";
import { FaXmark, FaArrowRight, FaBolt, FaGear } from "react-icons/fa6";

export interface WorkflowStep {
  stepNum: string;
  title: string;
  desc: string;
  icon?: string;
  isTrigger?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface CaseStudyData {
  id: string;
  category: "automation" | "crm" | "web" | "ai";
  categoryName: string;
  num: string;
  title: string;
  subtitle: string;
  client: string;
  platform: string;
  role: string;
  summary: string;
  problem: string;
  challenge: string;
  solutionSteps?: WorkflowStep[];
  results: MetricItem[];
  tools: string[];
  liveUrl?: string;
  image?: string;
  span?: number;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudyData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(4, 8, 16, 0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          background: "linear-gradient(145deg, #091528, #050b16)",
          border: "1px solid rgba(0, 229, 255, 0.3)",
          borderRadius: "8px",
          boxShadow: "0 25px 80px rgba(0, 229, 255, 0.15), 0 0 30px rgba(0,0,0,0.8)",
          overflowY: "auto",
          color: "#e8f4f8",
          padding: "2.5rem 2rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            background: "rgba(0, 229, 255, 0.08)",
            border: "1px solid rgba(0, 229, 255, 0.2)",
            color: "var(--cyan)",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--cyan)";
            e.currentTarget.style.color = "#040810";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0, 229, 255, 0.08)";
            e.currentTarget.style.color = "var(--cyan)";
          }}
          aria-label="Close Case Study Modal"
        >
          <FaXmark size={18} />
        </button>

        {/* Top Header & Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "var(--cyan)",
              background: "rgba(0, 229, 255, 0.1)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              padding: "0.3rem 0.8rem",
              borderRadius: "3px",
              textTransform: "uppercase",
            }}
          >
            {caseStudy.categoryName}
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "var(--muted)" }}>
            {caseStudy.num}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "0.6rem" }}>
          {caseStudy.title}
        </h2>
        {/* Real Live Screenshot Preview */}
        {caseStudy.image && (
          <div
            style={{
              width: "100%",
              height: "260px",
              position: "relative",
              borderRadius: "6px",
              overflow: "hidden",
              border: "1px solid rgba(0, 229, 255, 0.25)",
              marginBottom: "2rem",
              background: "#040810",
            }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0.8rem",
                right: "0.8rem",
                background: "rgba(4, 8, 16, 0.85)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                padding: "0.3rem 0.7rem",
                borderRadius: "3px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: "var(--cyan)",
              }}
            >
              LIVE PRODUCTION PREVIEW
            </div>
          </div>
        )}

        {/* Overview Banner Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            background: "rgba(0, 229, 255, 0.03)",
            border: "1px solid rgba(0, 229, 255, 0.15)",
            borderRadius: "6px",
            padding: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
              CLIENT
            </div>
            <div style={{ fontSize: "0.88rem", color: "#d0e4ee", fontWeight: 600 }}>{caseStudy.client}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
              PLATFORM / INTEGRATION
            </div>
            <div style={{ fontSize: "0.88rem", color: "#d0e4ee", fontWeight: 600 }}>{caseStudy.platform}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
              MY ROLE
            </div>
            <div style={{ fontSize: "0.88rem", color: "#d0e4ee", fontWeight: 600 }}>{caseStudy.role}</div>
          </div>
        </div>

        {/* Problem Section */}
        <div style={{ marginBottom: "1.8rem" }}>
          <h3 style={{ fontSize: "0.85rem", fontFamily: "'Space Mono', monospace", color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaBolt size={14} /> THE BUSINESS PROBLEM
          </h3>
          <p style={{ fontSize: "0.92rem", color: "#b0ccd8", lineHeight: 1.7, background: "rgba(8, 20, 40, 0.6)", padding: "1rem 1.2rem", borderRadius: "4px", borderLeft: "3px solid var(--cyan)" }}>
            {caseStudy.problem}
          </p>
        </div>

        {/* The Challenge */}
        <div style={{ marginBottom: "2.2rem" }}>
          <h3 style={{ fontSize: "0.85rem", fontFamily: "'Space Mono', monospace", color: "#ffa726", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaGear size={14} /> THE NON-TRIVIAL CHALLENGE
          </h3>
          <p style={{ fontSize: "0.92rem", color: "#e8c89b", lineHeight: 1.7, background: "rgba(255, 167, 38, 0.05)", padding: "1rem 1.2rem", borderRadius: "4px", borderLeft: "3px solid #ffa726" }}>
            {caseStudy.challenge}
          </p>
        </div>

        {/* Interactive Scenario / Solution Pathway */}
        {caseStudy.solutionSteps && caseStudy.solutionSteps.length > 0 && (
          <div style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ fontSize: "0.85rem", fontFamily: "'Space Mono', monospace", color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              AUTOMATED WORKFLOW SCENARIO PATHWAY
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                background: "rgba(4, 12, 24, 0.8)",
                border: "1px solid rgba(0, 229, 255, 0.2)",
                borderRadius: "6px",
                padding: "1.5rem 1.2rem",
              }}
            >
              {caseStudy.solutionSteps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: step.isTrigger ? "linear-gradient(135deg, #00e5ff, #0088ff)" : "rgba(0, 229, 255, 0.1)",
                      border: "1px solid var(--cyan)",
                      color: step.isTrigger ? "#040810" : "var(--cyan)",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: step.isTrigger ? "0 0 15px rgba(0, 229, 255, 0.4)" : "none",
                    }}
                  >
                    {step.stepNum}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.2rem" }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: "0.83rem", color: "#a0b8c6", lineHeight: 1.5 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Metrics Grid */}
        <div style={{ marginBottom: "2.2rem" }}>
          <h3 style={{ fontSize: "0.85rem", fontFamily: "'Space Mono', monospace", color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            BUSINESS RESULTS & MEASURABLE ROI
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {caseStudy.results.map((res, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(0, 229, 255, 0.04)",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "6px",
                  padding: "1.2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2rem", fontWeight: 800, color: "var(--cyan)", marginBottom: "0.3rem" }}>
                  {res.value}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#c8e0ec", fontWeight: 600, lineHeight: 1.4 }}>
                  {res.label}
                </div>
                {res.subtext && (
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "0.3rem" }}>
                    {res.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tools Badges */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>
            TECHNOLOGY STACK & INTEGRATIONS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {caseStudy.tools.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.72rem",
                  color: "var(--cyan)",
                  background: "rgba(0, 229, 255, 0.08)",
                  border: "1px solid rgba(0, 229, 255, 0.25)",
                  borderRadius: "3px",
                  padding: "0.25rem 0.75rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(0, 229, 255, 0.15)",
            flexWrap: "wrap",
          }}
        >
          {caseStudy.liveUrl ? (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "0.7rem 1.4rem", fontSize: "0.75rem" }}
            >
              Visit Live Website ↗
            </a>
          ) : (
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>
              ✓ Production Client Automation System
            </div>
          )}

          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary"
            style={{ padding: "0.7rem 1.6rem", fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Request Similar Solution <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
