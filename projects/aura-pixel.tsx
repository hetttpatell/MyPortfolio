import React from 'react';

/**
 * Aura Pixel — Wedding Pixel
 *
 * OVERVIEW:
 * A React module built for Aura Pixel Weddings, featuring an Indian
 * wedding-themed hero experience.
 *
 * DETAILS:
 * - Mandap-themed hero component with ornate 3D pillars and a silk canopy,
 *   animated with GSAP.
 * - Indian wedding color palette.
 * - Scroll behavior isolated via Lenis, scoped to a dedicated root
 *   (`.wp-root`) to avoid conflicting with the rest of the site.
 */
export const AuraPixelProject = () => {
  const liveUrl = "https://aurapixel.in";
  const repo = "https://github.com/hetttpatell/Aura-Pixel";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Aura Pixel</h1>
      <p className="mt-2 text-zinc-300">Wedding photography/videography brand site with a mandap-themed hero.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
