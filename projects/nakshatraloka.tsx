import React from 'react';

/**
 * Nakshatraloka — Astrology & Spiritual Services Platform
 *
 * TECH STACK: React.js, Node.js, Express.js, MongoDB, REST APIs, Responsive UI
 *
 * OVERVIEW:
 * A full-stack astrology and spiritual services web platform providing
 * users with seamless access to astrology-related services, consultations,
 * and informational content.
 *
 * HIGHLIGHTS:
 * - Modern, responsive frontend built with React.js using reusable
 *   components for scalability and maintainability.
 * - Secure backend REST APIs (Node.js + Express.js) handling dynamic data
 *   flow, user requests, and service management.
 * - MongoDB integration for efficient storage, retrieval, and management
 *   of application data.
 * - Mobile-first responsive layouts for a smooth experience across
 *   desktop, tablet, and mobile.
 * - Owned the full development lifecycle: UI, backend integration,
 *   deployment, debugging, and production maintenance.
 */
export const NakshatralokaProject = () => {
  const liveUrl = "https://nakshatraloka.com";
  const frontendRepo = "https://github.com/hetttpatell/Nakshatraloko-";
  const backendRepo = "https://github.com/Hett910/Nakshatraloka";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Nakshatraloka</h1>
      <p className="mt-2 text-zinc-300">Full-stack astrology & spiritual services platform.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={frontendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Frontend)</a>
        <a href={backendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Backend)</a>
      </div>
    </div>
  );
};
