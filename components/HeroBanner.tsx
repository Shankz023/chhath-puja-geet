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
  Music, 
  Flame, 
  ExternalLink,
  Volume2,
  Heart
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
    <div className="relative w-full min-h-[80vh] flex flex-col justify-center items-center px-4 md:px-8 pt-24 pb-16 z-20">
      {/* Devotional Subtitle Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/10 mb-6">
        <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '24s' }} />
        <span>आस्था, पवित्रता व सूर्य उपासना का महापर्व</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
      </div>

      {/* Main Big Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-devanagari text-center tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-orange-400 drop-shadow-[0_4px_24px_rgba(245,158,11,0.4)]">
        छठ पूजा गीत
      </h1>
      <p className="text-sm sm:text-lg md:text-xl font-cinzel text-amber-200/90 tracking-[0.25em] uppercase font-semibold text-center mt-3 drop-shadow">
        SACRED CHHATH PUJA GEET & DEVOTIONAL MELODIES
      </p>

      {/* Featured Cinematic Audio Player Card (Pure Audio & Artwork, No Video Frame) */}
      <div className="w-full max-w-4xl mt-10 md:mt-12 bg-black/55 border border-amber-500/40 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">
          
          {/* Song Cover Artwork with Dynamic Audio Equalizer Halo */}
          <div className="md:col-span-5 relative flex justify-center">
            <div 
              onClick={onTogglePlay}
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-amber-400/60 shadow-2xl shadow-amber-950/80 group cursor-pointer"
            >
              <img
                src={currentSong.coverImage}
                alt={currentSong.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Play / Pause button overlay on cover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 text-stone-950 flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 ${
                  isPlaying ? 'ring-4 ring-amber-300 animate-pulse' : ''
                }`}>
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-stone-950" />
                  ) : (
                    <Play className="w-8 h-8 fill-stone-950 translate-x-0.5" />
                  )}
                </div>
              </div>

              {/* Tag & Duration Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500 text-stone-950 shadow-md">
                  {currentSong.tag}
                </span>
                <span className="text-xs font-mono text-amber-200">
                  {currentSong.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Song Details & In-Banner Fast Next/Prev Nav */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                  {currentSong.ragaOrMood}
                </span>
                {isPlaying && (
                  <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    बज रहा है (Playing)
                  </span>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-devanagari text-amber-100 mt-1 leading-snug">
                {currentSong.hindiTitle}
              </h2>
              <p className="text-sm md:text-base text-amber-200/80 font-cinzel font-semibold mt-1">
                {currentSong.title}
              </p>
              <p className="text-xs md:text-sm text-stone-300 font-medium mt-1">
                स्वर: <span className="text-amber-300 font-bold">{currentSong.singer}</span>
              </p>
              <p className="text-xs md:text-sm text-stone-300/80 leading-relaxed mt-3 line-clamp-3">
                {currentSong.description}
              </p>
            </div>

            {/* Quick Actions & Traversing Navigation */}
            <div className="pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-center md:justify-start gap-3">
              {/* Main Play CTA */}
              <button
                id="btn-hero-play"
                onClick={onTogglePlay}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-stone-950" /> : <Play className="w-4 h-4 fill-stone-950 translate-x-0.5" />}
                <span>{isPlaying ? 'गीत रोकें (Pause)' : 'गीत बजाएं (Play Music)'}</span>
              </button>

              {/* Back Track Button */}
              <button
                id="btn-hero-prev"
                onClick={onPrev}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-amber-500/20 border border-white/20 hover:border-amber-400 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-95 cursor-pointer"
                title="Previous Song (पिछला गीत)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>पिछला (Prev)</span>
              </button>

              {/* Next Track Button */}
              <button
                id="btn-hero-next"
                onClick={onNext}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500/30 hover:bg-amber-500/50 border border-amber-400 text-xs font-bold uppercase tracking-wider text-amber-200 transition-all active:scale-95 cursor-pointer shadow-lg shadow-amber-500/20"
                title="Next Song (अगला गीत)"
              >
                <span>अगला (Next)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Direct YouTube Link */}
              <a
                href={currentSong.youtubeUrl || `https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-red-950/50 hover:bg-red-900/60 border border-red-500/40 text-xs font-bold text-red-300 hover:text-red-200 transition-all cursor-pointer"
                title="Open on YouTube"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>

              {/* Virtual Arghya CTA */}
              <button
                id="btn-hero-arghya"
                onClick={onOpenArghya}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Flame className="w-4 h-4 fill-amber-200 text-amber-200" />
                <span>अर्घ्य दर्शन</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
