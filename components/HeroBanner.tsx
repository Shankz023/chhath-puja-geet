/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Sun,
  Flame,
  Volume2,
  Heart,
  Radio,
  Share2
} from 'lucide-react';
import { Song, ThemeMode } from '../types';

interface HeroBannerProps {
  currentSong: Song;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onOpenArghya: () => void;
  mode: ThemeMode;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrev,
  onOpenArghya,
  mode,
}) => {
  return (
    <div className="relative w-full min-h-[75vh] flex flex-col justify-center items-center px-4 md:px-8 pt-28 pb-12 z-20">
      
      {/* Devotional Subtitle Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold tracking-wider backdrop-blur-xl shadow-lg shadow-amber-500/10 mb-4 animate-glow-pulse">
        <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '28s' }} />
        <span className="font-devanagari">आस्था, पवित्रता व सूर्य उपासना का महापर्व</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
      </div>

      {/* Main Devotional Title with Layered Glow */}
      <div className="relative text-center max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-devanagari tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-orange-400 drop-shadow-[0_4px_30px_rgba(245,158,11,0.45)]">
          छठ पूजा गीत
        </h1>
        <p className="text-xs sm:text-base md:text-lg font-cinzel text-amber-200/90 tracking-[0.3em] uppercase font-semibold text-center mt-3 drop-shadow">
          Sacred Chhath Puja Geet & Devotional Melodies
        </p>
      </div>

      {/* Featured Audiophile Player Glass Card */}
      <div className="w-full max-w-4xl mt-8 md:mt-10 glass-panel-glow rounded-3xl p-5 sm:p-7 md:p-8 relative overflow-hidden group">
        
        {/* Glow ambient radial backgrounds */}
        <div className="absolute -top-24 -right-24 w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-amber-500/25 via-orange-600/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-rose-600/20 via-amber-600/15 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">

          {/* Song Cover Artwork with Radiant Glass Frame */}
          <div className="md:col-span-5 relative flex justify-center">
            <div
              onClick={onTogglePlay}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl shadow-black/80 group/cover cursor-pointer"
            >
              <img
                src={currentSong.coverImage}
                alt={currentSong.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/cover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Glowing Overlay on Hover / Active */}
              <div className={`absolute inset-0 transition-colors flex items-center justify-center ${
                isPlaying ? 'bg-black/35 backdrop-blur-[1px]' : 'bg-black/40 group-hover/cover:bg-black/55'
              }`}>
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-orange-500 text-stone-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 transition-transform transform group-hover/cover:scale-110 ${
                  isPlaying ? 'ring-4 ring-amber-300/80 animate-pulse' : ''
                }`}>
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-stone-950" />
                  ) : (
                    <Play className="w-7 h-7 fill-stone-950 translate-x-0.5" />
                  )}
                </div>
              </div>

              {/* Tag & Duration Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-center justify-between">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 shadow-md font-cinzel">
                  {currentSong.tag}
                </span>
                <span className="text-xs font-mono font-bold text-amber-200">
                  {currentSong.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Song Meta, Singer, Controls & Ritual Action */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4 md:space-y-5 text-center md:text-left">
            
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] uppercase font-bold tracking-widest border border-amber-400/30">
                  <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
                  {currentSong.ragaOrMood || 'भक्ति भाव (Bhakti Bhava)'}
                </span>
                <span className="text-xs text-amber-200/60 font-cinzel hidden sm:inline">•</span>
                <span className="text-xs text-amber-200/70 font-cinzel hidden sm:inline tracking-wider">
                  {currentSong.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-devanagari text-amber-100 group-hover:text-amber-200 transition-colors drop-shadow leading-tight">
                {currentSong.hindiTitle}
              </h2>
              <p className="text-sm md:text-base font-cinzel text-amber-300 font-semibold mt-1">
                {currentSong.title}
              </p>
              <p className="text-xs md:text-sm text-stone-300/90 font-medium mt-1">
                स्वर: <span className="text-amber-100 font-semibold">{currentSong.singer}</span>
              </p>
            </div>

            <p className="text-xs md:text-sm text-stone-300/80 leading-relaxed font-devanagari line-clamp-2 md:line-clamp-3">
              {currentSong.description}
            </p>

            {/* Quick Interactive Actions Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              
              {/* Main Play / Pause Button */}
              <button
                onClick={onTogglePlay}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-stone-950" />
                    <span>विराम (Pause)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-stone-950" />
                    <span>श्रवण करें (Play)</span>
                  </>
                )}
              </button>

              {/* Prev / Next Track traversing */}
              <div className="flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-full p-1">
                <button
                  onClick={onPrev}
                  className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-amber-200 transition-colors cursor-pointer"
                  title="पिछला गीत (Previous Song)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={onNext}
                  className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-amber-200 transition-colors cursor-pointer"
                  title="अगला गीत (Next Song)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Virtual Arghya Offering CTA Button */}
              <button
                onClick={onOpenArghya}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-600/30 to-amber-600/30 hover:from-orange-600/50 hover:to-amber-600/50 border border-amber-400/50 text-amber-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 cursor-pointer shadow-lg"
              >
                <Flame className="w-4 h-4 text-amber-400 animate-flame" />
                <span>अर्घ्य अर्पण (Virtual Arghya)</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroBanner;
