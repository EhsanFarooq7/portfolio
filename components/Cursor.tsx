"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", move);

        const animate = () => {
            ring.current.x += (pos.current.x - ring.current.x) * 0.12;
            ring.current.y += (pos.current.y - ring.current.y) * 0.12;
            if (cursorRef.current) {
                cursorRef.current.style.left = pos.current.x + "px";
                cursorRef.current.style.top = pos.current.y + "px";
            }
            if (ringRef.current) {
                ringRef.current.style.left = ring.current.x + "px";
                ringRef.current.style.top = ring.current.y + "px";
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);

        const grow = () => {
            cursorRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(2.5)");
            ringRef.current?.style.setProperty("opacity", "0.15");
        };
        const shrink = () => {
            cursorRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
            ringRef.current?.style.setProperty("opacity", "0.45");
        };

        document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
            el.addEventListener("mouseenter", grow);
            el.addEventListener("mouseleave", shrink);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed z-[9999] w-2.5 h-2.5 rounded-full pointer-events-none"
                style={{
                    background: "var(--cyan)",
                    transform: "translate(-50%,-50%)",
                    mixBlendMode: "screen",
                    transition: "transform 0.15s",
                }}
            />
            <div
                ref={ringRef}
                className="fixed z-[9998] w-9 h-9 rounded-full pointer-events-none"
                style={{
                    border: "1.5px solid var(--cyan)",
                    transform: "translate(-50%,-50%)",
                    opacity: 0.45,
                    transition: "opacity 0.2s",
                }}
            />
        </>
    );
}