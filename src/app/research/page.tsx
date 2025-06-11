'use client';

import { useState } from 'react';

export default function Research() {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-4xl font-semibold mb-6">Research</h1>

        <div className="space-y-2 border-b pb-6">
          <h2 className="text-2xl font-medium leading-snug">
            Short-Run Shocks, Long-Run Shifts: Climate Change and Firm Dynamics in Indian Manufacturing
          </h2>

          <a
            href="https://www.dropbox.com/scl/fi/d9sjqsa8e994b1qne71lv/Sai_s_Dissertation-3.pdf?rlkey=sjdw2z5k5vsz6m82cpsi1p666&st=3yk3zwaj&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Paper
          </a>

          <button
            onClick={() => setShowAbstract(!showAbstract)}
            className="text-sm text-gray-600 mt-2 hover:underline"
          >
            {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
          </button>

          {showAbstract && (
            <p className="mt-3 text-[15px] leading-relaxed text-[#444] whitespace-pre-line">
              While climate change causes aggregate losses in developing countries, less is known
              about the heterogeneity in these damages. In this paper, I examine the aggregate and
              heterogeneous effects of short-run and long-run climate shocks on manufacturing firms.

              Examining the effects of a short-run climate shock using a 10-year panel of manufacturing
              firms and a fixed-effects approach, I find that smaller firms suffer significantly greater
              output losses and are more likely to close compared to medium-sized and large firms.

              Examining the effects of a long-run climate shock using a repeated cross-section of the
              universe of manufacturing firms and a long-difference approach, I find that districts that
              became drier over 23 years saw an increase in the count of firms, driven by increase in count
              of firms across firm sizes coupled with lesser concentration of manufacturing activity among
              larger firms. This suggests that the adaptive margins that accompany increasing firm-size
              help moderate damages of short-run shocks but seem to matter less over more protracted
              climate shocks. I also offer plausible explanations for this finding.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
