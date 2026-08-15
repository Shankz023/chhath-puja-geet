/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Sun, Sparkles, Droplets, CheckCircle, RotateCcw, X, Heart, ShieldAlert } from 'lucide-react';
import { ThemeMode } from '../types';

interface VirtualArghyaProps {
  mode: ThemeMode;
  onClose?: () => void;
}

export const VirtualArghya: React.FC<VirtualArghyaProps> = ({ mode, onClose }) => {
  const [offeringType, setOfferingType] = useState<'water' | 'milk' | 'soop'>('water');
  const [isPouring, setIsPouring] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [offeredCount, setOfferedCount] = useState<number>(108);

  const startOffering = () => {
    if (isPouring) return;
    setIsPouring(true);
    setIsCompleted(false);

    // After 3.5 seconds of pouring stream animation
    setTimeout(() => {
      setIsPouring(false);
      setIsCompleted(true);
      setOfferedCount((prev) => prev + 1);
    }, 3800);
  };

  const resetOffering = () => {
    setIsPouring(false);
    setIsCompleted(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-[#1a0a03]/90 via-[#260f04]/90 to-[#0d0401]/95 border border-amber-500/40 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl text-white">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '16s' }} />
          <span>{mode === 'morning' ? 'उषा अर्घ्य दर्शन (Morning Arghya)' : 'संध्या अर्घ्य दर्शन (Evening Arghya)'}</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-amber-100 tracking-tight">
          प्रत्यक्ष देव सूर्य व छठी मईया को अर्घ्य अर्पण
        </h2>
        <p className="text-xs md:text-sm text-amber-200/80 mt-2 font-devanagari">
          {mode === 'morning'
            ? 'उगते सूर्य को कच्चा दूध व पवित्र गंगाजल अर्पित कर आरोग्य, तेज व दीर्घायु की कामना करें।'
            : 'अस्ताचलगामी (डूबते) सूर्य को कृतज्ञता पूर्वक प्रथम अर्घ्य देकर जीवन में नई आशा का संचार करें।'}
        </p>
      </div>

      {/* Offering Selector Tabs */}
      <div className="flex justify-center gap-3 md:gap-4 mb-8 flex-wrap">
        {[
          { id: 'water', label: 'गंगाजल अर्घ्य (Holy Gangajal)', icon: Droplets, desc: 'Water Arpan' },
          { id: 'milk', label: 'दुग्ध अर्घ्य (Pure Milk Arpan)', icon: Sparkles, desc: 'Dugdha Arghya' },
          { id: 'soop', label: 'सूप-फल-ठेकुआ (Daura & Fruits)', icon: Sun, desc: 'Prasad Arpan' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = offeringType === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                if (!isPouring) {
                  setOfferingType(tab.id as 'water' | 'milk' | 'soop');
                  setIsCompleted(false);
                }
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs md:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-amber-500/30 border-amber-400 text-amber-200 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-black/30 hover:bg-black/50 border-white/15 text-white/70 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-white/60'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Ritual Stage Canvas */}
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-[#3a1506] via-[#1f0b03] to-[#0a0301] flex flex-col items-center justify-between p-6 shadow-inner">
        {/* Background Sun Halo Rays */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-amber-400/40 via-orange-500/30 to-transparent blur-2xl pointer-events-none animate-pulse" />

        {/* Radiant Sun Disc in the sky */}
        <div className="relative z-10 flex flex-col items-center mt-2">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_50px_rgba(251,191,36,0.8)] flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-200/90 blur-[1px]" />
            <span className="absolute text-xl md:text-2xl font-bold text-amber-900/60 font-devanagari select-none">
              ॐ
            </span>
          </div>
          <span className="text-[11px] font-cinzel text-amber-200/80 mt-1 uppercase tracking-widest">
            {mode === 'morning' ? 'भगवान भास्कर (Bhagwan Bhaskar)' : 'अस्ताचल सूर्य (Setting Sun)'}
          </span>
        </div>

        {/* Dynamic Pouring Stream Effect */}
        {isPouring && (
          <div className="absolute top-28 md:top-36 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
            {/* Brass Kalash / Lota Tilting */}
            <div className="transform -rotate-45 translate-x-6 -translate-y-4 transition-transform duration-500">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M14 8 H34 L36 14 C36 14, 42 22, 40 34 C38 42, 32 44, 24 44 C16 44, 10 42, 8 34 C6 22, 12 14, 12 14 L14 8 Z"
                  fill="#d97706"
                  stroke="#fbbf24"
                  strokeWidth="2"
                />
                <ellipse cx="24" cy="8" rx="10" ry="3" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />
                <path d="M24 16 L24 40" stroke="#fde68a" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Pouring Liquid Stream */}
            <div className="relative w-4 h-32 md:h-44 overflow-hidden flex justify-center">
              <div 
                className={`w-2.5 md:w-3.5 h-full rounded-full animate-pulse shadow-lg ${
                  offeringType === 'milk'
                    ? 'bg-gradient-to-b from-white/95 via-amber-50 to-white/90 shadow-[0_0_15px_rgba(255,255,255,0.8)]'
                    : 'bg-gradient-to-b from-amber-200/90 via-cyan-200/80 to-amber-300/90 shadow-[0_0_15px_rgba(251,191,36,0.8)]'
                }`}
              />
              {/* Droplets spray */}
              <div className="absolute bottom-0 w-16 h-8 bg-amber-400/30 rounded-full blur-md animate-ping" />
            </div>
          </div>
        )}

        {/* Completed Blessing Banner */}
        {isCompleted && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 mb-3 shadow-lg shadow-amber-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-amber-200 font-heading">
              अर्घ्य समर्पण सफल! (Arghya Blessed)
            </h3>
            <p className="text-sm text-amber-100 max-w-md mt-2 font-devanagari">
              "ॐ सूर्य सहस्त्रांशो तेजोराशे जगत्पते। अनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर॥"
            </p>
            <p className="text-xs text-amber-300/80 mt-1">
              भगवान सूर्य व षष्ठी देवी आपकी सभी मनोकामनाएं पूर्ण करें।
            </p>

            <button
              onClick={resetOffering}
              className="mt-5 flex items-center gap-2 px-5 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 rounded-xl text-xs font-bold uppercase tracking-widest text-amber-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              पुनः अर्घ्य दें (Offer Again)
            </button>
          </div>
        )}

        {/* Holy River Water Waves at the Bottom */}
        <div className="w-full relative z-10">
          <div className="h-10 md:h-12 w-full bg-gradient-to-t from-cyan-950/80 via-amber-950/50 to-transparent flex items-end justify-center pb-2">
            <span className="text-[11px] text-cyan-200/60 font-cinzel">
              पावन गंगा तट (Holy Ganges River Ghat)
            </span>
          </div>
        </div>
      </div>

      {/* Action Controls & Shloka Banner */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
            सूर्य गायत्री मंत्र (Surya Gayatri Mantra)
          </p>
          <p className="text-xs md:text-sm text-amber-200/90 font-devanagari mt-0.5">
            ॐ भास्कराय विद्महे दिवाकराय धीमहि तन्नः सूर्यः प्रचोदयात्॥
          </p>
        </div>

        <button
          id="btn-trigger-arghya"
          onClick={startOffering}
          disabled={isPouring}
          className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm shadow-xl transition-all duration-300 cursor-pointer ${
            isPouring
              ? 'bg-amber-600/50 text-white/60 cursor-wait'
              : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-amber-600/30 hover:scale-105 active:scale-95'
          }`}
        >
          <Sun className={`w-5 h-5 ${isPouring ? 'animate-spin' : ''}`} />
          <span>{isPouring ? 'अर्घ्य अर्पित हो रहा है...' : 'अर्घ्य अर्पित करें (Offer Arghya)'}</span>
        </button>
      </div>

      {/* Live Counter */}
      <div className="mt-6 pt-4 border-t border-amber-500/20 flex justify-between items-center text-xs text-amber-400/80">
        <span>सम्पूर्ण विश्व से अब तक अर्पित अर्घ्य: <strong className="text-amber-300">{offeredCount}</strong></span>
        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> अखंड भक्ति</span>
      </div>
    </div>
  );
};

export default VirtualArghya;
