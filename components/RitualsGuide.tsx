/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Calendar, Sun, Moon, Sparkles, Check, ChevronRight, Info, Award } from 'lucide-react';
import { RITUAL_DAYS } from '../src/data/songsData';
import { RitualDay, ThemeMode } from '../types';

interface RitualsGuideProps {
  mode: ThemeMode;
}

export const RitualsGuide: React.FC<RitualsGuideProps> = ({ mode }) => {
  const [selectedDay, setSelectedDay] = useState<number>(mode === 'morning' ? 4 : 3);

  const currentRitual = RITUAL_DAYS.find((r) => r.dayNumber === selectedDay) || RITUAL_DAYS[0];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 bg-black/45 border border-amber-500/30 rounded-3xl p-6 md:p-10 backdrop-blur-xl text-white">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>चार दिवसीय महापर्व की महिमा (4-Day Sacred Journey)</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-amber-100">
          छठ महापर्व के चार पावन दिवस
        </h2>
        <p className="text-xs md:text-sm text-amber-200/80 mt-2 font-devanagari">
          प्रकृति, स्वच्छता, निष्ठा और प्रत्यक्ष देव सूर्य की उपासना का विश्व प्रसिद्ध लोकपर्व
        </p>
      </div>

      {/* 4 Days Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        {RITUAL_DAYS.map((day) => {
          const isSelected = day.dayNumber === selectedDay;
          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDay(day.dayNumber)}
              className={`text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/30 via-orange-500/20 to-black/60 border-amber-400 shadow-xl shadow-amber-500/10 scale-[1.02]'
                  : 'bg-black/30 hover:bg-black/50 border-white/10 hover:border-amber-400/40 text-white/70'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold font-cinzel px-2.5 py-1 rounded-full ${
                  isSelected ? 'bg-amber-400 text-black' : 'bg-white/10 text-white/80'
                }`}>
                  DAY {day.dayNumber}
                </span>
                {day.dayNumber === 3 || day.dayNumber === 4 ? (
                  <Sun className={`w-4 h-4 ${isSelected ? 'text-amber-300 animate-spin' : 'text-amber-400/60'}`} style={{ animationDuration: '18s' }} />
                ) : (
                  <Sparkles className="w-4 h-4 text-amber-300/70" />
                )}
              </div>
              <h4 className={`font-bold text-sm md:text-base font-devanagari ${isSelected ? 'text-amber-200' : 'text-white'}`}>
                {day.title}
              </h4>
              <p className="text-[11px] text-amber-300/70 truncate mt-0.5">
                {day.dayType}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Day Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-black/40 border border-amber-500/20 rounded-2xl p-6 md:p-8">
        {/* Left 2 Cols: Ritual description & steps */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-xs font-cinzel uppercase tracking-widest text-amber-400 font-semibold">
              {currentRitual.dayType}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-100 font-devanagari mt-1">
              {currentRitual.hindiTitle}
            </h3>
            <p className="text-sm md:text-base text-stone-200 leading-relaxed mt-3">
              {currentRitual.description}
            </p>
          </div>

          {/* Key Ritual Actions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" /> मुख्य अनुष्ठान व नियम (Key Rituals):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentRitual.rituals.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs md:text-sm text-stone-200"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Mantra & Meaning */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 font-cinzel">
              दिव्य स्तुति व मंत्र (Sacred Invocation):
            </span>
            <p className="text-sm md:text-base font-bold text-amber-200 font-devanagari mt-1">
              {currentRitual.mantra}
            </p>
            <p className="text-xs text-amber-100/80 font-devanagari mt-1">
              {currentRitual.mantraHindi}
            </p>
          </div>
        </div>

        {/* Right Col: Prasad & Significance */}
        <div className="space-y-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-amber-500/20 pt-6 lg:pt-0 lg:pl-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" /> पावन प्रसाद (Mahaprasad):
            </h4>
            <div className="space-y-2">
              {currentRitual.prasad.map((p, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-amber-500/20 text-xs md:text-sm text-amber-100 font-devanagari flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-amber-500/10 to-orange-500/10 border border-amber-500/30">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
              आध्यात्मिक महत्व (Spiritual Essence):
            </h5>
            <p className="text-xs text-stone-200 leading-relaxed font-devanagari">
              {currentRitual.significance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualsGuide;
