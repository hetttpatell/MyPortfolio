import React from 'react';

/**
 * Hospital Portal
 *
 * OVERVIEW:
 * A hospital/clinic-facing web portal. [Agent note: ask Het for 2-3 lines
 * on the actual feature set — appointment booking? patient records? doctor
 * directory? — before finalizing this description.]
 */
export const HospitalPortalProject = () => {
  const liveUrl = "https://doctor-theta-three.vercel.app";
  const repo = "https://github.com/hetttpatell/Doctor";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Hospital Portal</h1>
      <p className="mt-2 text-zinc-300">Web portal for hospital/clinic services.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
