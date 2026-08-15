/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BookOpen, Copy, Check, Sparkles, Volume2, Globe } from 'lucide-react';
import { Song, LyricLine } from '../types';

interface LyricsViewerProps {
  song: Song;
  currentTime?: number;
}

export const LyricsViewer: React.FC<LyricsViewerProps> = ({ song, currentTime = 0 }) => {
  const [viewMode, setViewMode] = useState<'hindi' | 'bilingual' | 'english'>('bilingual');
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
    <div className="w-full bg-black/40 border border-amber-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-xl text-white">
      {/* Header with Title and Control Toggles */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>गीत के बोल व भावार्थ (Lyrics & Meaning)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-amber-100 font-devanagari">
            {song.hindiTitle}
          </h3>
          <p className="text-xs text-amber-200/70 font-cinzel">{song.title} • {song.singer}</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Switcher */}
          <div className="bg-black/60 p-1 rounded-xl border border-white/10 flex text-xs">
            <button
              onClick={() => setViewMode('bilingual')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'bilingual' ? 'bg-amber-500/30 text-amber-300' : 'text-white/60 hover:text-white'
              }`}
            >
              दोनों (Dual)
            </button>
            <button
              onClick={() => setViewMode('hindi')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'hindi' ? 'bg-amber-500/30 text-amber-300' : 'text-white/60 hover:text-white'
              }`}
            >
              हिन्दी (Hindi)
            </button>
            <button
              onClick={() => setViewMode('english')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'english' ? 'bg-amber-500/30 text-amber-300' : 'text-white/60 hover:text-white'
              }`}
            >
              English
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/80 border border-white/10 hover:border-amber-400/40 rounded-xl text-xs text-amber-200/90 transition-colors"
            title="Copy Lyrics"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Lyrics Stanzas Container */}
      <div className="mt-6 space-y-6 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
        {song.lyrics.map((stanza: LyricLine, index: number) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-white/[0.03] hover:bg-amber-500/[0.07] border border-white/5 hover:border-amber-500/30 transition-all duration-300 group"
          >
            {(viewMode === 'bilingual' || viewMode === 'hindi') && (
              <p
                className={`font-devanagari font-semibold text-amber-100 group-hover:text-amber-200 transition-colors leading-relaxed ${
                  fontSize === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                }`}
              >
                {stanza.hindi}
              </p>
            )}

            {(viewMode === 'bilingual' || viewMode === 'english') && (
              <p className="text-xs md:text-sm text-amber-300/80 italic mt-1 font-sans">
                {stanza.transliteration}
              </p>
            )}

            {(viewMode === 'bilingual' || viewMode === 'english') && (
              <div className="mt-2.5 pt-2 border-t border-white/10 text-xs md:text-sm text-stone-300/90 leading-normal flex items-start gap-2">
                <span className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider font-cinzel">Meaning:</span>
                <span>{stanza.meaning}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LyricsViewer;
