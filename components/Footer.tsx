export default function Footer() {
    return (
        <footer
            style={{
                padding: "1.5rem 5rem",
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.68rem",
                color: "var(--muted)",
                flexWrap: "wrap",
                gap: "0.5rem",
            }}
        >
            <div>© 2025 Muhammad Ehsan Farooq</div>
            <div style={{ color: "var(--cyan)" }}>Built with Next.js · Designed with precision.</div>
        </footer>
    );
}