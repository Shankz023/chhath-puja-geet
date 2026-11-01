/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BookOpen, Copy, Check, Sparkles, Volume2, Globe, Music } from 'lucide-react';
import { Song, LyricLine } from '../types';

interface LyricsViewerProps {
  song: Song;
  currentTime?: number;
}

export const LyricsViewer: React.FC<LyricsViewerProps> = ({ song, currentTime = 0 }) => {
  const [viewMode, setViewMode] = useState<'bilingual' | 'hindi' | 'english'>('bilingual');
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const handleCopy = () => {
    const fullText = song.lyrics
      .map((l) => `${l.hindi}\n(${l.transliteration})\nMeaning: ${l.meaning}\n`)
      .join('\n');
    navigator.clipboard.writeText(`${song.hindiTitle} - ${song.title}\n\n${fullText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full glass-panel-glow rounded-3xl p-6 sm:p-8 backdrop-blur-2xl text-white shadow-2xl relative overflow-hidden">
      
      {/* Top subtle glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Header with Title and Control Toggles */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-amber-500/20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-devanagari">गीत के पावन बोल व भावार्थ</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-amber-100 font-devanagari mt-1 drop-shadow">
            {song.hindiTitle}
          </h3>
          <p className="text-xs md:text-sm text-amber-200/80 font-cinzel tracking-wider">
            {song.title} • स्वर: <span className="text-amber-100 font-semibold">{song.singer}</span>
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Mode Switcher */}
          <div className="bg-black/60 p-1 rounded-2xl border border-white/10 flex text-xs backdrop-blur-md">
            <button
              onClick={() => setViewMode('bilingual')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                viewMode === 'bilingual'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              दोनों (Dual)
            </button>
            <button
              onClick={() => setViewMode('hindi')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                viewMode === 'hindi'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              हिन्दी (Hindi)
            </button>
            <button
              onClick={() => setViewMode('english')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                viewMode === 'english'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              English
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-black/60 hover:bg-black/80 border border-white/10 hover:border-amber-400/50 rounded-2xl text-xs text-amber-200/90 transition-all cursor-pointer shadow-md"
            title="Copy Lyrics"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-300" />}
            <span className="font-medium">{copied ? 'कॉपी हुआ!' : 'कॉपी करें'}</span>
          </button>
        </div>
      </div>

      {/* Lyrics Stanzas Container */}
      <div className="mt-6 space-y-4 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
        {song.lyrics.map((stanza: LyricLine, index: number) => (
          <div
            key={index}
            className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-amber-500/[0.06] border border-white/5 hover:border-amber-500/30 transition-all duration-300 group"
          >
            {(viewMode === 'bilingual' || viewMode === 'hindi') && (
              <p
                className={`font-devanagari font-bold text-amber-100 group-hover:text-amber-200 transition-colors leading-relaxed ${
                  fontSize === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                }`}
              >
                {stanza.hindi}
              </p>
            )}

            {(viewMode === 'bilingual' || viewMode === 'english') && (
              <p className="text-xs sm:text-sm text-stone-300 font-mono tracking-wide mt-1.5 opacity-85 group-hover:opacity-100">
                {stanza.transliteration}
              </p>
            )}

            {stanza.meaning && (
              <div className="mt-2.5 pt-2 border-t border-white/5 flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/75 italic leading-relaxed font-sans">
                  {stanza.meaning}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LyricsViewer;
