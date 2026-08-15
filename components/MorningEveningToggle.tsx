/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Sun, Sunset, Sunrise, Moon } from 'lucide-react';
import { ThemeMode } from '../types';

interface MorningEveningToggleProps {
  mode: ThemeMode;
  onToggle: (mode: ThemeMode) => void;
}

export const MorningEveningToggle: React.FC<MorningEveningToggleProps> = ({ mode, onToggle }) => {
  return (
    <div className="flex items-center p-1 rounded-full bg-black/60 backdrop-blur-xl border border-amber-500/40 shadow-xl">
      {/* Morning Button */}
      <button
        id="btn-mode-morning"
        onClick={() => onToggle('morning')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          mode === 'morning'
            ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 shadow-md shadow-amber-400/30 scale-105 font-extrabold'
            : 'text-amber-200/70 hover:text-amber-100 hover:bg-white/5'
        }`}
        title="Morning Mode: Usha Arghya (उषा अर्घ्य - भिनसरवा)"
      >
        <Sunrise className={`w-4 h-4 ${mode === 'morning' ? 'text-stone-950' : 'text-amber-400'}`} />
        <span>उषा प्रभात (Morning)</span>
      </button>

      {/* Evening Button */}
      <button
        id="btn-mode-evening"
        onClick={() => onToggle('evening')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          mode === 'evening'
            ? 'bg-gradient-to-r from-orange-600 to-rose-700 text-white shadow-md shadow-orange-600/30 scale-105 font-extrabold'
            : 'text-amber-200/70 hover:text-amber-100 hover:bg-white/5'
        }`}
        title="Evening Mode: Sandhya Arghya (संध्या अर्घ्य - गोधूलि बेला)"
      >
        <Sunset className={`w-4 h-4 ${mode === 'evening' ? 'text-amber-200' : 'text-orange-400'}`} />
        <span>संध्या बेला (Evening)</span>
      </button>
    </div>
  );
};

export default MorningEveningToggle;
