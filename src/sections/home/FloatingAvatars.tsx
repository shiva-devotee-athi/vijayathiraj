"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { hoppieImage } from "@/data/information";

const images = [
    "/images/hoppies/image.webp",
    "/images/hoppies/image-1.webp",
    "/images/hoppies/image-2.webp",
    "/images/hoppies/image-3.webp",
    "/images/hoppies/image-4.webp",
    "/images/hoppies/image-5.webp",
    "/images/hoppies/image-6.webp",
    "/images/hoppies/image-7.webp",
    "/images/hoppies/image-8.webp",
    "/images/hoppies/image-9.webp",
    "/images/hoppies/image-10.webp",
    "/images/hoppies/image-11.webp",
];

type Particle = {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
    el: HTMLImageElement;
    isHovered: boolean;
    currentScale: number;
};

export default function FloatingAvatars() {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const container = containerRef.current!;
        const particles: Particle[] = [];

        hoppieImage.map((item) => item.chunk.map((chunk) => chunk.image)).flat().forEach((src) => {
            const img = document.createElement("img");

            img.src = src;

            // Tailwind classes applied via className
            // Note: Removed CSS transition-transform to prevent heavy conflict with requestAnimationFrame
            img.className =
                "absolute rounded-full object-cover cursor-pointer shadow-lg hover:shadow-xl hover:shadow-amber-500/40 hover:z-50";

            img.onclick = () => {
                setSelectedImage(src);
            };

            const size = 60 + Math.random() * 50;

            const particle: Particle = {
                x: Math.random() * (container.clientWidth - size),
                y: Math.random() * (container.clientHeight - size),
                dx: (Math.random() - 0.5) * 1,
                dy: (Math.random() - 0.5) * 1,
                size,
                el: img,
                isHovered: false,
                currentScale: 1,
            };

            img.onmouseenter = () => {
                particle.isHovered = true;
                img.style.zIndex = "50"; // Bring to very front instantly
            };

            img.onmouseleave = () => {
                particle.isHovered = false;
                img.style.zIndex = "1";
            };

            img.style.width = `${size}px`;
            img.style.height = `${size}px`;
            img.alt = "Hoppie";

            container.appendChild(img);
            particles.push(particle);
        });

        particlesRef.current = particles;

        const animate = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            const speed = 0.8;
            particles.forEach((p) => {
                if (!p.isHovered) {
                    p.x += p.dx * speed;
                    p.y += p.dy * speed;

                    // Bounce logic
                    if (p.x <= 0 || p.x + p.size >= width) p.dx *= -1;
                    if (p.y <= 0 || p.y + p.size >= height) p.dy *= -1;
                }

                // Smoothly interpolate scale inside JS to avoid CSS transition vs JS transform conflicts
                const targetScale = p.isHovered ? 1.15 : 1;
                p.currentScale += (targetScale - p.currentScale) * 0.15; // Ease factor

                p.el.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.currentScale})`;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            particles.forEach((p) => p.el.remove());
        };
    }, [images]);

    return (
        <>
            <div
                ref={containerRef}
                className="relative w-full h-[500px] overflow-hidden"
            />

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ delay: 0.1 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 md:top-8 md:right-8 z-[110] rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                        >
                            <IoCloseSharp size={32} />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            src={selectedImage}
                            alt={`Full view`}
                            className="max-h-[85vh] max-w-[90vw] md:max-w-[80vw] rounded-2xl object-contain shadow-2xl"
                            // Stop propagation so clicking the image doesn't close the modal
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
