import React from 'react';

/**
 * Growth Edge
 *
 * OVERVIEW:
 * [Agent note: description pending — ask Het what this project is
 * (business site? SaaS landing page? internal tool?) before publishing.]
 */
export const GrowthEdgeProject = () => {
  const liveUrl = "https://growth-edge-sigma.vercel.app";
  const repo = "https://github.com/hetttpatell/GrowthEdge";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Growth Edge</h1>
      <p className="mt-2 text-zinc-300">[Description pending]</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
