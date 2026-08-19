"use client";
import React, { useState, useEffect, useRef } from "react";
import CaseStudyModal, { CaseStudyData } from "./CaseStudyModal";
import { FaArrowRight, FaFilter, FaExpand, FaArrowUpRightFromSquare } from "react-icons/fa6";

const caseStudiesData: CaseStudyData[] = [
  {
    id: "social-auto-posting",
    category: "automation",
    categoryName: "Workflow Automation",
    num: "CASE_STUDY 01",
    title: "Multi-Account Social Auto-Posting Engine",
    subtitle: "Tag-based routing engine that automatically publishes community posts to correct LinkedIn & Facebook accounts — with zero manual copy-pasting.",
    client: "UK Professional Membership Community (Circle platform)",
    platform: "Make.com + Circle API + LinkedIn & Facebook APIs",
    role: "Automation Architect & Engineer (End-to-End)",
    summary: "Built a production scenario on Make.com that listens to Circle webhooks, extracts tags & media attachments, determines sub-brand destinations, and routes updates to 6 social channels automatically.",
    problem: "The client runs an active UK membership community on Circle. Every update needed to be manually copied, reformatted, and re-posted across multiple LinkedIn pages and Facebook pages for different sub-brands. This consumed hours of manual team time and led to posting delays and formatting errors.",
    challenge: "The workflow had to differentiate between text-only posts, single-image posts, and multi-photo galleries, while resolving tag-based routing to 6 separate social destinations dynamically without any manual human oversight.",
    solutionSteps: [
      { stepNum: "01", title: "New Circle Post Webhook", desc: "Listens for real-time post creation events published on Circle platform.", isTrigger: true },
      { stepNum: "02", title: "Fetch Full Content & Media", desc: "Pulls full post body, attached media assets, and author metadata via Circle API." },
      { stepNum: "03", title: "Tag & Media Check", desc: "Inspects tag attributes and determines whether text, image, or gallery formats apply." },
      { stepNum: "04", title: "Account & Format Router", desc: "Routes content payload to specific target LinkedIn page or Facebook page API endpoint." },
      { stepNum: "05", title: "Automated Multi-Channel Publish", desc: "Posts directly to destination pages instantly with correct styling and media formatting." }
    ],
    results: [
      { value: "0", label: "Manual Copy-Paste Posts Per Week" },
      { value: "6", label: "Social Destinations Covered by 1 Scenario" },
      { value: "100%", label: "Automated Account Routing Accuracy" }
    ],
    tools: ["Make.com", "Circle API", "LinkedIn API", "Facebook Pages API", "Webhooks", "Conditional Routing"],
    span: 1
  },
  {
    id: "ai-supplier-analysis",
    category: "automation",
    categoryName: "AI & Workflows",
    num: "CASE_STUDY 02",
    title: "AI-Generated Supplier Analysis Pipeline",
    subtitle: "Real-time AI research pipeline that analyzes newly registered marketplace suppliers and generates structured summaries instantly.",
    client: "UK Professional Membership Community",
    platform: "Make.com + OpenAI Chat-Completions API + Google Sheets",
    role: "AI & Automation Solution Architect",
    summary: "Automated supplier vetting by triggering AI analysis requests on sign-up webhooks, stripping formatting artifacts, and outputting clean, structured audit logs.",
    problem: "The community operates a supplier marketplace where new vendors register daily. Every registration required team members to research the supplier, summarize their offerings, and write a competitive analysis before approval — creating a major operational bottleneck.",
    challenge: "AI output had to be strictly formatted and cleaned in real-time, handling non-deterministic response text, stripping markdown noise, and inserting structured fields into Google Sheets for instant team review.",
    solutionSteps: [
      { stepNum: "01", title: "New Supplier Sign-Up Webhook", desc: "Fires instantly when a supplier submits registration forms.", isTrigger: true },
      { stepNum: "02", title: "Gather Details via API", desc: "Fetches company description, website URL, and offered service specs via API call." },
      { stepNum: "03", title: "AI Analysis & Prompt Request", desc: "Sends structured prompt to OpenAI Chat-Completions for competitive analysis." },
      { stepNum: "04", title: "Parse & Clean Text Output", desc: "Strips raw formatting artifacts and parses clean summary points." },
      { stepNum: "05", title: "Log Structured Record to Sheet", desc: "Appends clean review-ready supplier dossier into Google Sheets." }
    ],
    results: [
      { value: "< 1 min", label: "From Registration to Ready Analysis Draft" },
      { value: "0 hrs", label: "Manual Supplier Research Per Signup" },
      { value: "100%", label: "Consistent & Structured Writeups" }
    ],
    tools: ["Make.com", "OpenAI Chat-Completions API", "Webhooks", "Text Parsing", "Google Sheets API"],
    span: 1
  },
  {
    id: "linkedin-lead-auto-sheets",
    category: "automation",
    categoryName: "Workflow Automation",
    num: "CASE_STUDY 03",
    title: "LinkedIn Event Registrations Auto-Organized Per Event",
    subtitle: "Every LinkedIn lead form submission is captured, synced into Circle platform, and filed into an auto-created dedicated Google Sheet per event.",
    client: "UK Membership Community (Circle platform)",
    platform: "Make.com + LinkedIn Lead Forms + Circle API + Google Sheets",
    role: "Automation Engineer",
    summary: "Created a dynamic Make.com workflow that auto-detects event IDs, creates fresh sheets dynamically for new events, appends registrants, and syncs community member accounts.",
    problem: "The client runs frequent LinkedIn events. Event registrants were being dumped into a messy master sheet or manually built into separate sheets per event, causing lost leads and hours of manual list maintenance.",
    challenge: "The scenario had to check whether a sheet for the specific event already existed. If yes, append the registrant; if no, dynamically create a brand-new sheet on the fly while syncing member credentials into Circle API simultaneously.",
    solutionSteps: [
      { stepNum: "01", title: "LinkedIn Lead Form Submission", desc: "Captures incoming form responses in real-time.", isTrigger: true },
      { stepNum: "02", title: "Sync to Circle Community Platform", desc: "Pushes registrant details directly into Circle member database via API." },
      { stepNum: "03", title: "Event Router & Identifier", desc: "Reads event ID metadata to match existing event tracking sheets." },
      { stepNum: "04", title: "Sheet Exists Branching Check", desc: "If sheet exists, proceed; if first registrant for event, auto-create fresh sheet." },
      { stepNum: "05", title: "Log Registrant Record", desc: "Appends clean registrant row to the dedicated event sheet." }
    ],
    results: [
      { value: "1", label: "Dedicated Sheet Auto-Created Per Event" },
      { value: "0", label: "Manually Built Registrant Lists" },
      { value: "0", label: "Leads Lost Between LinkedIn & CRM" }
    ],
    tools: ["Make.com", "LinkedIn Lead Forms", "Circle API", "Google Sheets API", "Conditional Routing"],
    span: 1
  },
  {
    id: "zapier-ai-receptionist-fub",
    category: "crm",
    categoryName: "CRM & Lead Engines",
    num: "CASE_STUDY 04",
    title: "AI Receptionist & Lead Pipeline Sync into Follow Up Boss (FUB)",
    subtitle: "Automated inbound lead processing linking AI voice/text receptionists with Follow Up Boss (FUB) CRM and multi-touch outreach sequences.",
    client: "Real Estate & Agency Client",
    platform: "Zapier + AI Voice Receptionist + Follow Up Boss API + Outreach",
    role: "Lead Engine & CRM Automation Architect",
    summary: "Engineered an instant lead sync pipeline that captures inbound calls/form responses from AI Receptionists, normalizes lead metadata, creates/updates FUB contacts, and triggers instant SMS/Email follow-up.",
    problem: "Inbound phone calls and lead form inquiries captured by AI Receptionists were lagging in follow-up time, and lead context was failing to sync into Follow Up Boss CRM — resulting in missed deals.",
    challenge: "Required real-time deduplication, phone number normalization, multi-channel webhook handling, custom field mapping, and instant task assignment in FUB within seconds of a call ending.",
    solutionSteps: [
      { stepNum: "01", title: "AI Receptionist Call Completed", desc: "Triggers webhook immediately after call or lead interaction ends.", isTrigger: true },
      { stepNum: "02", title: "Zapier Data Formatting & Parsing", desc: "Cleans lead name, phone number, transcript summary, and intent score." },
      { stepNum: "03", title: "Follow Up Boss (FUB) Sync", desc: "Queries FUB API to update existing contact or create new lead with tags." },
      { stepNum: "04", title: "Instant Outreach Trigger", desc: "Fires SMS/Email confirmation to lead and creates high-priority call task for agent." }
    ],
    results: [
      { value: "< 5s", label: "Lead Capture to CRM Sync Time" },
      { value: "100%", label: "Call Transcripts Logged to FUB" },
      { value: "0", label: "Dropped or Unassigned Leads" }
    ],
    tools: ["Zapier", "Follow Up Boss API", "AI Receptionist Webhooks", "SMS Outreach", "Lead Scoring"],
    span: 1
  },
  {
    id: "vipo-marketing-lead-scoring",
    category: "crm",
    categoryName: "Web & CRM Systems",
    num: "CASE_STUDY 05",
    title: "Vipo Marketing Website & Automated Lead Scoring System",
    subtitle: "High-performance agency website integrated with automated lead scoring and nurturing sales workflows.",
    client: "Vipo Marketing (vipo-marketing.co.uk)",
    platform: "Next.js + Custom Lead Engine + GoHighLevel Workflows",
    role: "Full-Stack Developer & Lead Systems Specialist",
    summary: "Designed and built the official agency platform for vipo-marketing.co.uk, featuring custom lead capture funnels, automated scoring logic, and CRM follow-up pipelines.",
    problem: "The agency received high visitor volume but lacked lead qualification. High-intent prospects were mixed with low-budget inquiries, slowing down sales response times.",
    challenge: "Built dynamic questionnaire funnels that calculate lead intent scores based on budget, timeline, and service needs, routing high-score leads directly to calendar booking while nurturing others automatically.",
    solutionSteps: [
      { stepNum: "01", title: "Interactive Lead Capture", desc: "Visitor completes dynamic qualification questionnaire on website.", isTrigger: true },
      { stepNum: "02", title: "Algorithmic Lead Scoring", desc: "Calculates intent score based on service scope, budget, and urgency." },
      { stepNum: "03", title: "CRM Nurture & Route", desc: "Routes high-tier leads to instant booking page; enrols secondary leads in email nurture." }
    ],
    results: [
      { value: "3.5x", label: "Increase in Qualified Booking Rate" },
      { value: "Real-time", label: "Automated Lead Qualification" }
    ],
    tools: ["Next.js", "TailwindCSS", "GoHighLevel", "Lead Scoring API", "CRM Nurture"],
    liveUrl: "https://vipo-marketing.co.uk",
    image: "/thumbnails/vipo-marketing.png",
    span: 1
  },
  {
    id: "suad-anisic-platform",
    category: "web",
    categoryName: "Web Platforms",
    num: "CASE_STUDY 06",
    title: "Suad Anisic Corporate & Strategic Advisory Platform",
    subtitle: "Official website engineered for Suad Anisic (suadanisic.com) — high-converting executive consulting & corporate leadership advisory platform.",
    client: "Suad Anisic (suadanisic.com)",
    platform: "Next.js + Modern UI/UX + Dynamic CMS Integrations",
    role: "Full-Stack Web Architect",
    summary: "Engineered a fast, responsive executive consulting web platform tailored for high authority personal branding, consultation scheduling, and SEO optimization.",
    problem: "Suad Anisic needed a modern, authoritative online presence to reflect executive consulting expertise and seamlessly capture corporate lead inquiries.",
    challenge: "Architected a minimalist dark/glassmorphic interface with sub-second page loads, mobile responsiveness, and clean consultation booking integrations.",
    solutionSteps: [
      { stepNum: "01", title: "High-Impact Landing Experience", desc: "Presents strategic authority through modern typography and dark-mode elegance." },
      { stepNum: "02", title: "Seamless Consultation Flow", desc: "Integrates direct calendar booking and inquiry validation forms." }
    ],
    results: [
      { value: "100%", label: "Lighthouse Performance & SEO Score" },
      { value: "< 0.8s", label: "First Contentful Paint Speed" }
    ],
    tools: ["Next.js", "React", "TypeScript", "TailwindCSS", "SEO Optimization"],
    liveUrl: "https://suadanisic.com",
    image: "/thumbnails/suada-nisic.png",
    span: 1
  },
  {
    id: "snapcard-travel",
    category: "web",
    categoryName: "Web Platforms",
    num: "CASE_STUDY 07",
    title: "SnapCard Travel Booking & Deal Engine",
    subtitle: "Full-featured UK travel platform with real-time package browsing, dynamic pricing, and conversion-optimized checkout.",
    client: "SnapCard Travel (snapcardtravel.co.uk)",
    platform: "Next.js + SSR + REST APIs + Custom Booking UX",
    role: "Lead Full-Stack Developer",
    summary: "Built a travel package booking application featuring server-side rendering for optimal search engine indexing, fast availability checks, and streamlined user booking flows.",
    problem: "The travel platform needed high SEO ranking for UK holiday keywords and a friction-free booking flow that could handle dynamic pricing feeds.",
    challenge: "Engineered SSR data fetching for dynamic hotel & travel deal routes while maintaining high visual polish and fast mobile rendering.",
    solutionSteps: [
      { stepNum: "01", title: "SSR Package Indexing", desc: "Renders travel deals server-side for maximum search engine indexability." },
      { stepNum: "02", title: "Real-time Availability Engine", desc: "Queries backend booking APIs to verify live room and flight availability." }
    ],
    results: [
      { value: "SSR", label: "Optimized SEO Architecture" },
      { value: "Conversion", label: "Focused UX Design Engine" }
    ],
    tools: ["Next.js", "React", "REST API", "SSR", "TailwindCSS"],
    liveUrl: "https://snapcardtravel.co.uk",
    image: "/thumbnails/snapcard-travel.png",
    span: 1
  },
  {
    id: "voicescape-ai-research",
    category: "ai",
    categoryName: "AI & Platforms",
    num: "CASE_STUDY 08",
    title: "Voicescape — AI Executive Lead Intelligence Platform",
    subtitle: "Automated B2B research engine that ingests case study PDFs, extracts target executives (CFO/CTO), enriches leads via Cognism & SERP APIs, and pushes enriched campaigns into HubSpot.",
    client: "Executive B2B Client",
    platform: "Next.js + LLM Processing + Cognism API + HubSpot",
    role: "AI & Full-Stack Engineer",
    summary: "Built an end-to-end B2B intelligence platform that extracts executive targets from complex documents and automates outreach sequence creation in CRM.",
    problem: "Manual B2B executive research involved reading PDF case studies, manually searching Cognism/LinkedIn for executive contacts, and typing personalized outreach copy by hand.",
    challenge: "Combined LLM document parsing with external API enrichment pipelines (Cognism API for verified emails, SERP API for authored articles) and custom AI lead scoring rubrics.",
    solutionSteps: [
      { stepNum: "01", title: "PDF Document Ingestion", desc: "Parses PDF whitepapers and case studies using LLM metadata extraction." },
      { stepNum: "02", title: "Executive Identification & Enrichment", desc: "Calls Cognism API & SERP API to discover executive emails and social activity." },
      { stepNum: "03", title: "AI Rubric Scoring & Auto-Draft", desc: "Generates custom persona lead scores and personalized email sequence drafts." },
      { stepNum: "04", title: "HubSpot Campaign Export", desc: "Pushes enriched lead records directly into HubSpot sales campaigns." }
    ],
    results: [
      { value: "90%", label: "Reduction in Lead Research Time" },
      { value: "HubSpot", label: "Automated Campaign Integration" }
    ],
    tools: ["Next.js", "TypeScript", "LLM Processing", "Cognism API", "SERP API", "HubSpot API"],
    span: 1
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  const filteredStudies = caseStudiesData.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "automation") return item.category === "automation" || item.id === "voicescape-ai-research";
    if (activeTab === "crm") return item.category === "crm";
    if (activeTab === "web") return item.category === "web";
    return true;
  });

  return (
    <section id="projects" style={{ padding: "90px 5%", width: "100%", background: "var(--bg)" }}>
      {/* Section Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              color: "var(--cyan)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ width: 8, height: 8, background: "var(--cyan)", borderRadius: "50%", display: "inline-block" }} />
            CASE STUDIES & PROVEN SOLUTIONS
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#ffffff" }}>
            Real Problems <span style={{ color: "var(--cyan)" }}>Solved</span> with AI &amp; Automation
          </h2>
          <div style={{ fontSize: "0.92rem", color: "var(--muted)", maxWidth: "600px", marginTop: "0.4rem" }}>
            I don&apos;t just write code — I build autonomous business engines, Make.com/Zapier workflows, and conversion platforms that save time and increase revenue.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", background: "rgba(8, 20, 40, 0.8)", border: "1px solid var(--border)", padding: "0.3rem", borderRadius: "4px" }}>
          {[
            { id: "all", label: "All Solutions" },
            { id: "automation", label: "AI & Workflows" },
            { id: "crm", label: "CRM & Lead Engines" },
            { id: "web", label: "Web Platforms" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                padding: "0.5rem 1rem",
                borderRadius: "3px",
                border: "none",
                background: activeTab === tab.id ? "var(--cyan)" : "transparent",
                color: activeTab === tab.id ? "#040810" : "var(--muted)",
                fontWeight: activeTab === tab.id ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: 80, height: 2, background: "linear-gradient(90deg, var(--cyan), transparent)", marginBottom: "3rem" }} />

      {/* Case Studies Grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.8rem",
        }}
      >
        {filteredStudies.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCaseStudy(item)}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-6px)";
              el.style.borderColor = "rgba(0,229,255,0.45)";
              el.style.boxShadow = "0 15px 40px rgba(0,229,255,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "var(--border)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 140,
                height: 140,
                background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div>
              {/* Optional Thumbnail Image Preview */}
              {item.image && (
                <div
                  style={{
                    width: "100%",
                    height: "170px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid rgba(0, 229, 255, 0.2)",
                    marginBottom: "1.2rem",
                    position: "relative",
                    background: "#040810",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 60%, rgba(4, 8, 16, 0.9) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              )}

              {/* Number and Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.68rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: "var(--cyan)",
                    background: "rgba(0, 229, 255, 0.08)",
                    border: "1px solid rgba(0, 229, 255, 0.2)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.categoryName}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.6rem", color: "var(--white)", lineHeight: 1.35 }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.4rem" }}>
                {item.subtitle}
              </p>

              {/* Highlight Metric Badge */}
              {item.results && item.results[0] && (
                <div
                  style={{
                    background: "rgba(0, 229, 255, 0.05)",
                    border: "1px solid rgba(0, 229, 255, 0.15)",
                    borderRadius: "4px",
                    padding: "0.6rem 0.9rem",
                    marginBottom: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                  }}
                >
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", fontWeight: 800, color: "var(--cyan)" }}>
                    {item.results[0].value}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "#b0ccd8", fontWeight: 600, lineHeight: 1.2 }}>
                    {item.results[0].label}
                  </span>
                </div>
              )}
            </div>

            <div>
              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                {item.tools.slice(0, 4).map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.62rem",
                      color: "var(--cyan)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      padding: "0.15rem 0.55rem",
                    }}
                  >
                    {tool}
                  </span>
                ))}
                {item.tools.length > 4 && (
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "var(--muted)", padding: "0.15rem 0.3rem" }}>
                    +{item.tools.length - 4}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.8rem",
                  borderTop: "1px solid rgba(0, 229, 255, 0.08)",
                  fontSize: "0.75rem",
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--cyan)",
                  fontWeight: 700,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <FaExpand size={11} /> READ CASE STUDY
                </span>
                <FaArrowRight size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </section>
  );
}