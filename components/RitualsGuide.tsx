/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Calendar, Sun, Moon, Sparkles, Check, ChevronRight, Info, Award, Heart } from 'lucide-react';
import { RITUAL_DAYS } from '../src/data/songsData';
import { RitualDay, ThemeMode } from '../types';

interface RitualsGuideProps {
  mode: ThemeMode;
}

export const RitualsGuide: React.FC<RitualsGuideProps> = ({ mode }) => {
  const [selectedDay, setSelectedDay] = useState<number>(mode === 'morning' ? 4 : mode === 'evening' ? 3 : 2);

  const currentRitual = RITUAL_DAYS.find((r) => r.dayNumber === selectedDay) || RITUAL_DAYS[0];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 glass-panel-glow rounded-3xl p-6 md:p-10 backdrop-blur-2xl text-white shadow-2xl relative overflow-hidden">
      
      {/* Decorative ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-devanagari">चार दिवसीय महापर्व की महिमा</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black font-devanagari text-amber-100">
          छठ महापर्व के चार पावन दिवस
        </h2>
        <p className="text-xs md:text-sm text-amber-200/80 mt-2 font-devanagari">
          प्रकृति, स्वच्छता, निष्ठा और प्रत्यक्ष देव सूर्य की उपासना का विश्व प्रसिद्ध लोकपर्व
        </p>
      </div>

      {/* 4 Days Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 relative z-10">
        {RITUAL_DAYS.map((day) => {
          const isSelected = day.dayNumber === selectedDay;
          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDay(day.dayNumber)}
              className={`text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/30 via-orange-500/20 to-black/80 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.02] ring-1 ring-amber-400/50'
                  : 'glass-card hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] md:text-xs font-bold font-cinzel px-2.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-amber-400 text-stone-950 shadow-md font-bold' : 'bg-white/10 text-white/80'
                }`}>
                  दिवस {day.dayNumber}
                </span>
                {day.dayNumber === 3 || day.dayNumber === 4 ? (
                  <Sun className={`w-4 h-4 ${isSelected ? 'text-amber-300 animate-spin' : 'text-amber-400/60'}`} style={{ animationDuration: '20s' }} />
                ) : (
                  <Sparkles className="w-4 h-4 text-amber-300/70" />
                )}
              </div>
              <h4 className={`font-bold text-sm md:text-base font-devanagari ${isSelected ? 'text-amber-200' : 'text-white'}`}>
                {day.title}
              </h4>
              <p className="text-[11px] text-amber-300/70 truncate mt-0.5 font-cinzel">
                {day.dayType}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Selected Day Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-black/45 border border-amber-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative z-10">
        
        {/* Left 2 Cols: Ritual description & steps */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-xs font-cinzel uppercase tracking-widest text-amber-400 font-bold">
              {currentRitual.dayType}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-amber-100 font-devanagari mt-1 drop-shadow">
              {currentRitual.hindiTitle}
            </h3>
            <p className="text-sm md:text-base text-stone-200/90 leading-relaxed mt-3 font-devanagari">
              {currentRitual.description}
            </p>
          </div>

          {/* Key Ritual Actions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2 font-devanagari">
              <Check className="w-4 h-4 text-emerald-400" /> मुख्य अनुष्ठान व नियम (Key Rituals):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentRitual.rituals.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-xs md:text-sm text-stone-200 font-devanagari"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Prasad & Sacred Mantra */}
        <div className="space-y-6 border-t lg:border-t-0 lg:border-l border-amber-500/20 pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-between">
          
          {/* Sacred Prasad */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 font-devanagari flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/30" />
              पावन महाप्रसाद (Holy Prasad):
            </h4>
            <div className="space-y-2">
              {currentRitual.prasad.map((p, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs md:text-sm text-amber-100 font-devanagari flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Surya Mantra */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-400/30">
            <span className="text-[10px] font-cinzel uppercase tracking-widest text-amber-300/80 font-bold">
              पावन सूर्य मंत्र (Surya Mantra)
            </span>
            <p className="text-sm font-devanagari font-bold text-amber-100 mt-1.5 leading-relaxed">
              {currentRitual.mantraHindi}
            </p>
            <p className="text-[11px] font-mono text-stone-300 mt-1 opacity-80">
              {currentRitual.mantra}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RitualsGuide;
