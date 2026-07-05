import React from 'react';

/**
 * LeadFlow: Multi-Tenant WhatsApp Automation SaaS
 *
 * OVERVIEW:
 * LeadFlow enables high-volume WhatsApp automation, a shared team inbox,
 * a knowledge repository, and lead CRM — built around a "Command Blue" UI
 * with light/dark mode support.
 *
 * KEY CHALLENGES & ARCHITECTURE SOLUTIONS:
 * 1. Webhook Idempotency:
 *    - Challenge: Meta retries webhook calls, causing double-sends.
 *    - Solution: Redis-backed webhook consumer checks the unique message ID
 *      (`wamid`) with a 5-minute TTL to guarantee idempotency.
 *
 * 2. Rate Limiting:
 *    - Redis token-bucket rate limiting throttles incoming traffic and
 *      prevents system overload during peak send volumes.
 *
 * 3. Tenant Isolation:
 *    - Strict tenant boundaries enforced via Supabase Row Level Security (RLS).
 *    - All queries auto-filter by the session's tenant ID.
 *
 * 4. OAuth Integration:
 *    - Facebook Login for Business flow lets users connect their WhatsApp
 *      Business Account (WABA) in one click.
 */
export const LeadFlowProject = () => {
  const liveUrl = "https://automation-frontend-tjv3.vercel.app";
  const frontendRepo = "https://github.com/hetttpatell/Automation-Frontend";
  const backendRepo = "https://github.com/hetttpatell/Automation-Backend";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">LeadFlow SaaS</h1>
      <p className="mt-2 text-zinc-300">Multi-tenant WhatsApp automation, shared inbox, and leads CRM.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={frontendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Frontend)</a>
        <a href={backendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Backend)</a>
      </div>
    </div>
  );
};
