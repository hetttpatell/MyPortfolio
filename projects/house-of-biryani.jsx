import React from 'react';

/**
 * House of Biryani & Rolls Menu
 *
 * OVERVIEW:
 * Interactive luxury menu and reservation experience with Mughal editorial styling.
 *
 * DETAILS:
 * - Aesthetic: Royal burgundy, deep gold accents, warm ivory card backgrounds.
 * - Timelines: GSAP stagger animations reveal menu categories on click.
 * - Menu Inventory: 20 signature items across 4 categories.
 * - Artwork: Custom inline SVG food illustrations and floral dividers.
 * - Mobile UI: Toggle between 1-column detail view and 2-column grid view.
 */
export const HouseOfBiryaniProject = () => {
  const liveUrl = "https://houseofbiryaniandrolls.com";
  const repo = "https://github.com/hetttpatell/Biryani-website";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">House of Biryani & Rolls</h1>
      <p className="mt-2 text-zinc-300">Luxury restaurant menu with custom SVG illustrations.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
