/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Sun, Sunset, Sunrise, Moon, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface MorningEveningToggleProps {
  mode: ThemeMode;
  onToggle: (mode: ThemeMode) => void;
}

export const MorningEveningToggle: React.FC<MorningEveningToggleProps> = ({ mode, onToggle }) => {
  const options = [
    {
      id: 'kharna' as ThemeMode,
      label: 'खरना',
      sub: 'Kharna',
      icon: Moon,
      activeClass: 'bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-amber-50 shadow-lg shadow-orange-900/40 border-amber-400/40',
      activeIconClass: 'text-amber-200 fill-amber-200/30',
      inactiveIconClass: 'text-amber-400/70',
      tooltip: 'खरना पूजा - पवित्र खीर व रोटी प्रसाद',
    },
    {
      id: 'evening' as ThemeMode,
      label: 'संध्या अर्घ्य',
      sub: 'Evening',
      icon: Sunset,
      activeClass: 'bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 text-amber-50 shadow-lg shadow-orange-800/40 border-orange-400/50',
      activeIconClass: 'text-amber-100',
      inactiveIconClass: 'text-orange-400/70',
      tooltip: 'संध्या अर्घ्य - अस्ताचलगामी सूर्य उपासना',
    },
    {
      id: 'morning' as ThemeMode,
      label: 'उषा अर्घ्य',
      sub: 'Morning',
      icon: Sunrise,
      activeClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-stone-950 shadow-lg shadow-amber-400/30 border-yellow-200/60 font-black',
      activeIconClass: 'text-stone-950',
      inactiveIconClass: 'text-amber-400/70',
      tooltip: 'उषा अर्घ्य - उदीयमान सूर्य देव को अर्घ्य',
    },
  ];

  return (
    <div className="relative inline-flex items-center p-1 md:p-1.5 rounded-full bg-black/60 backdrop-blur-2xl border border-amber-500/30 shadow-2xl">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = mode === opt.id;
        return (
          <button
            key={opt.id}
            id={`btn-mode-${opt.id}`}
            onClick={() => onToggle(opt.id)}
            title={opt.tooltip}
            className={`relative flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer border ${
              isActive
                ? `${opt.activeClass} scale-100 z-10`
                : 'border-transparent text-amber-200/70 hover:text-amber-100 hover:bg-white/[0.06]'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 transition-transform ${isActive ? `${opt.activeIconClass} scale-110` : opt.inactiveIconClass}`} />
            <div className="flex flex-col text-left leading-none">
              <span className={`font-devanagari text-xs md:text-sm font-bold ${isActive ? '' : 'text-stone-200'}`}>
                {opt.label}
              </span>
              <span className={`text-[9px] uppercase tracking-wider font-cinzel opacity-75 hidden sm:inline ${isActive ? '' : 'text-stone-400'}`}>
                {opt.sub}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MorningEveningToggle;
