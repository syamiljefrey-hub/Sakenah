"use client";

import React, { useState } from "react";
import { Compass, Clock, BookOpen, ArrowRight, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export default function SakeenahLanding() {
  const [activeDemoTab, setActiveDemoTab] = useState("schedule");

  return (
    <div className="min-h-screen bg-[#071813] text-[#FAF8F5] font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-emerald-900/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 text-amber-200 font-serif font-bold text-xl flex items-center justify-center shadow-lg">
            س
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-white">Sakeenah</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-emerald-100/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Product Demo</a>
          <a href="#about" className="hover:text-white transition-colors">Portfolio</a>
        </nav>
        <a 
          href="#demo" 
          className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-md shadow-emerald-950/50 flex items-center gap-2"
        >
          Explore Demo <ArrowRight className="w-4 h-4" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Assessment Sample Product Demo
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight text-white">
            Quiet luxury, designed for your <span className="text-emerald-400">daily mindfulness</span>.
          </h1>
          <p className="text-emerald-100/70 text-lg leading-relaxed max-w-lg">
            Sakeenah is a Next.js-powered digital sanctuary engineered for seamless prayer scheduling, Qibla alignment, and structured Quran reflection.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#demo" 
              className="px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-900/30 flex items-center gap-2"
            >
              Test Interactive Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#features" 
              className="px-7 py-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-800 hover:bg-emerald-900/60 text-emerald-200 font-semibold text-sm transition-all"
            >
              View System Specs
            </a>
          </div>
        </div>

        {/* Hero Visual Card / Mockup */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl blur-xl opacity-30"></div>
          <div className="relative bg-[#042F24] border border-emerald-800/80 p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-emerald-800/60 pb-4">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Live System Status</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400"><CheckCircle2 className="w-4 h-4" /> Operational</span>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#071813] border border-emerald-900 flex justify-between items-center">
                <span className="text-sm font-medium text-emerald-100">Next Prayer • Isyak</span>
                <span className="text-sm font-bold text-amber-300">08:30 PM</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#071813] border border-emerald-900 flex justify-between items-center">
                <span className="text-sm font-medium text-emerald-100">Qibla Heading</span>
                <span className="text-sm font-bold text-emerald-300">292° West</span>
              </div>
            </div>
            <div className="pt-2 text-xs text-emerald-400/80 text-center">
              Built with Next.js App Router & Tailwind CSS v4
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Demo Section */}
      <section id="demo" className="max-w-7xl mx-auto px-6 py-20 border-t border-emerald-950">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-serif font-bold text-white">Interactive Product Demo</h2>
          <p className="text-emerald-100/60 text-sm">
            Click through the sample components below to test the fully functional interactive UI state.
          </p>
        </div>

        {/* Demo App Container */}
        <div className="max-w-md mx-auto bg-[#FAF8F5] text-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-zinc-900">
          
          {/* Demo Header */}
          <div className="bg-white px-6 py-4 border-b border-zinc-200 flex justify-between items-center">
            <span className="font-serif font-bold text-emerald-950 text-base">Sakeenah App Demo</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-mono font-semibold">Live State</span>
          </div>

          {/* Demo Interactive Tabs */}
          <div className="p-6 bg-[#FAF8F5] space-y-6 min-h-[380px]">
            {activeDemoTab === 'schedule' && (
              <div className="space-y-4">
                <div className="bg-emerald-900 text-white p-5 rounded-2xl shadow-md">
                  <div className="text-xs text-emerald-200 uppercase tracking-wider">Kuala Lumpur, MY</div>
                  <div className="text-2xl font-serif font-bold mt-1">Today&apos;s Schedule</div>
                </div>
                <div className="space-y-2">
                  {["Subuh - 05:52 AM", "Zohor - 01:08 PM", "Asar - 04:29 PM", "Maghrib - 07:06 PM", "Isyak - 08:30 PM"].map((item, idx) => (
                    <div key={idx} className="p-3 bg-white border border-zinc-200 rounded-xl text-sm font-medium flex justify-between items-center shadow-xs">
                      <span>{item.split(' - ')[0]}</span>
                      <span className="font-mono text-xs text-emerald-800 font-semibold">{item.split(' - ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDemoTab === 'quran' && (
              <div className="space-y-4">
                <div className="p-4 bg-white border border-zinc-200 rounded-2xl shadow-xs">
                  <h4 className="font-serif font-bold text-zinc-900 text-sm">Al-Quran Index</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Quick lookup sample index</p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl text-sm flex justify-between items-center">
                    <span className="font-bold">1. Al-Fatihah</span>
                    <span className="text-xs bg-zinc-100 px-2 py-0.5 rounded">7 Verses</span>
                  </div>
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl text-sm flex justify-between items-center">
                    <span className="font-bold">36. Ya-Sin</span>
                    <span className="text-xs bg-zinc-100 px-2 py-0.5 rounded">83 Verses</span>
                  </div>
                </div>
              </div>
            )}

            {activeDemoTab === 'qibla' && (
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 text-center space-y-4 shadow-xs">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full mx-auto flex items-center justify-center">
                  <Compass className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-zinc-900 text-base">Qibla Finder</h4>
                  <p className="text-xs text-zinc-500 mt-1">Calculated heading: 292° West from current GPS location.</p>
                </div>
              </div>
            )}
          </div>

          {/* Demo Interactive Navigation Footer */}
          <div className="bg-white border-t border-zinc-200 p-3 flex justify-around">
            <button 
              onClick={() => setActiveDemoTab('schedule')} 
              className={`text-xs font-semibold px-3 py-2 rounded-xl transition-colors cursor-pointer ${activeDemoTab === 'schedule' ? 'bg-emerald-50 text-emerald-900' : 'text-zinc-500'}`}
            >
              Schedule
            </button>
            <button 
              onClick={() => setActiveDemoTab('quran')} 
              className={`text-xs font-semibold px-3 py-2 rounded-xl transition-colors cursor-pointer ${activeDemoTab === 'quran' ? 'bg-emerald-50 text-emerald-900' : 'text-zinc-500'}`}
            >
              Quran
            </button>
            <button 
              onClick={() => setActiveDemoTab('qibla')} 
              className={`text-xs font-semibold px-3 py-2 rounded-xl transition-colors cursor-pointer ${activeDemoTab === 'qibla' ? 'bg-emerald-50 text-emerald-900' : 'text-zinc-500'}`}
            >
              Qibla
            </button>
          </div>

        </div>
      </section>

      {/* Features & Portfolio Specification */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-emerald-950">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#042F24] border border-emerald-900/60 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800/50 text-emerald-300 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Precision Calculation</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Implemented reactive state algorithms for localized prayer notifications and real-time countdown tracking.
            </p>
          </div>

          <div className="bg-[#042F24] border border-emerald-900/60 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800/50 text-emerald-300 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Digital Indexing</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Interactive surah search module built with optimized array filtering for instantaneous query results.
            </p>
          </div>

          <div className="bg-[#042F24] border border-emerald-900/60 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800/50 text-emerald-300 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Modern Tech Stack</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Developed using Next.js App Router, Tailwind CSS v4, and deployed seamlessly on cloud hosting infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="max-w-7xl mx-auto px-6 py-8 border-t border-emerald-950 text-center text-xs text-emerald-400/60">
        Sakeenah Sample Product Demo Assessment • 2026
      </footer>

    </div>
  );
}