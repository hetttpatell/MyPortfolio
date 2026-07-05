import React from 'react';

/**
 * Khushi Films: Cinematic Portfolio
 *
 * OVERVIEW:
 * Media portfolio for a film production company focused on premium motion
 * design and speed.
 *
 * FRONTEND HIGHLIGHTS:
 * - Platform: React + Vite for fast bundling.
 * - Animations: Extensive GSAP timelines and ScrollTrigger for scroll-driven effects.
 * - Scrolling: Lenis smooth scroll unifies mouse and trackpad gestures.
 * - Transitions: Framer Motion for route animations and interactive elements.
 * - 3D Lens Component: Custom Three.js camera-lens mesh that rotates with scroll.
 * - Video Hero: Panoramic background video that scales to full-screen on scroll.
 * - Footer: Parallax cinematic layout revealing contact info on scroll.
 */
export const KhushiFilmsProject = () => {
  const liveUrl = "https://khushifilm.com";
  const repo = "https://github.com/hetttpatell/Khushi-Films";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Khushi Films Portfolio</h1>
      <p className="mt-2 text-zinc-300">Cinematic portfolio website with GSAP and Three.js.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
