import React from 'react';

/**
 * Shree Sneh Foundation — NGO Website
 *
 * OVERVIEW:
 * Website for an NGO client, built to communicate their mission and
 * programs and make it easy for visitors to learn about and support
 * their work. [Agent note: ask Het for 1-2 lines on standout features —
 * donation flow, program pages, volunteer sign-up, etc.]
 */
export const ShreeSnehFoundationProject = () => {
  const liveUrl = "https://shreesnehfoundation.in";
  const repo = "https://github.com/hetttpatell/NGO-";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Shree Sneh Foundation</h1>
      <p className="mt-2 text-zinc-300">NGO website built to showcase mission, programs, and impact.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
