import React from 'react';

/**
 * ClientOS: Booking CRM Platform for Indian Service Businesses
 *
 * STATUS: In active development — no live deployment yet.
 *
 * OVERVIEW:
 * ClientOS consolidates appointment scheduling, billing, and invoicing
 * for service-based businesses.
 *
 * CORE IMPLEMENTATIONS:
 * 1. Dual Booking System:
 *    - A merchant-hosted landing page portal, plus a lightweight embeddable
 *      JS booking widget clients can drop into any external site.
 *
 * 2. Multi-Tenant Architecture:
 *    - Isolated tenant data via Supabase Row Level Security (RLS) with
 *      an Express.js API layer.
 *
 * 3. Payments:
 *    - Razorpay integration for payments, advance deposits, and invoice balances.
 *
 * 4. Regional Pricing:
 *    - INR-tiered subscription plans (Starter, Growth, Pro) built for
 *      Indian service merchants.
 */
export const ClientOSProject = () => {
  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">ClientOS CRM</h1>
      <p className="mt-2 text-zinc-300">Booking, scheduling, and invoice management tool.</p>
      <span className="mt-4 inline-block text-xs uppercase tracking-wide text-amber-400 border border-amber-400/40 rounded px-2 py-1">
        In Development
      </span>
    </div>
  );
};
