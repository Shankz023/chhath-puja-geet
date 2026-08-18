/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, Heart, X, Send } from 'lucide-react';
import { FloatingDiya, ThemeMode } from '../types';

interface FloatingDiyasProps {
  mode: ThemeMode;
}

const INITIAL_DIYAS: FloatingDiya[] = [
  {
    id: 'diya-1',
    x: 12,
    y: 78,
    speed: 0.04,
    scale: 0.9,
    wish: 'जय छठी मईया! परिवार में सुख, शांति और स्वास्थ्य का वास हो।',
    senderName: 'अमित कुमार (पटना)',
    glowColor: '#fbbf24',
    flameSize: 1.0,
    wobbleOffset: 0
  },
  {
    id: 'diya-2',
    x: 35,
    y: 84,
    speed: 0.035,
    scale: 1.1,
    wish: 'हे सूर्य देव! समस्त जगत को आरोग्य और सकारात्मक ऊर्जा प्रदान करें।',
    senderName: 'सुनीता देवी (दरभंगा)',
    glowColor: '#f97316',
    flameSize: 1.15,
    wobbleOffset: 1.8
  },
  {
    id: 'diya-3',
    x: 62,
    y: 75,
    speed: 0.045,
    scale: 0.85,
    wish: 'पहिल बेर व्रत कईनी, छठी माई कृपा बनवले रखिहें।',
    senderName: 'प्रिया शर्मा (मुजफ्फरपुर)',
    glowColor: '#f59e0b',
    flameSize: 0.95,
    wobbleOffset: 3.2
  },
  {
    id: 'diya-4',
    x: 82,
    y: 88,
    speed: 0.03,
    scale: 1.0,
    wish: 'घर-घर में खुशहाली और बच्चों को दीर्घायु मिले। ॐ सूर्याय नमः',
    senderName: 'राजेश सिंह (भागलपुर)',
    glowColor: '#ea580c',
    flameSize: 1.05,
    wobbleOffset: 4.5
  }
];

export const FloatingDiyas: React.FC<FloatingDiyasProps> = ({ mode }) => {
  const [diyas, setDiyas] = useState<FloatingDiya[]>(INITIAL_DIYAS);
  const [activeDiyaModal, setActiveDiyaModal] = useState<FloatingDiya | null>(null);
  const [showOfferModal, setShowOfferModal] = useState<boolean>(false);
  const [userWish, setUserWish] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [justOffered, setJustOffered] = useState<boolean>(false);

  // Smooth floating animation loop for water current
  useEffect(() => {
    const interval = setInterval(() => {
      setDiyas((prev) =>
        prev.map((diya) => {
          let nextX = diya.x + diya.speed;
          if (nextX > 105) {
            nextX = -5; // wrap around left edge
          }
          return {
            ...diya,
            x: nextX,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleCreateDiya = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userWish.trim()) return;

    const newDiya: FloatingDiya = {
      id: `user-diya-${Date.now()}`,
      x: 8 + Math.random() * 20, // starts near left side
      y: 72 + Math.random() * 18, // random water depth
      speed: 0.03 + Math.random() * 0.02,
      scale: 1.05 + Math.random() * 0.2,
      wish: userWish.trim(),
      senderName: userName.trim() || 'भक्त (Devotee)',
      glowColor: mode === 'morning' ? '#f59e0b' : '#ea580c',
      flameSize: 1.1,
      wobbleOffset: Math.random() * 6,
    };

    setDiyas((prev) => [newDiya, ...prev]);
    setUserWish('');
    setUserName('');
    setShowOfferModal(false);
    setJustOffered(true);
    setTimeout(() => setJustOffered(false), 4000);
  };

  return (
    <>
      <style>{`
        @keyframes flameFlicker {
          0%, 100% {
            transform: scale(1) skewX(0deg);
            opacity: 0.95;
          }
          25% {
            transform: scale(1.08, 0.92) skewX(-3deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.95, 1.05) skewX(2deg);
            opacity: 0.9;
          }
          75% {
            transform: scale(1.04, 0.97) skewX(-1deg);
            opacity: 0.98;
          }
        }

        @keyframes waterDrift {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(1.5deg);
          }
        }

        .diya-wobble {
          animation: waterDrift 3.5s ease-in-out infinite;
        }

        .flame-anim {
          animation: flameFlicker 0.4s ease-in-out infinite alternate;
          transform-origin: bottom center;
        }
      `}</style>

      {/* Floating Diya Icons Container on River Water Zone */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
        aria-label="Floating Sacred River Diyas"
      >
        {diyas.map((diya) => (
          <div
            key={diya.id}
            id={`floating-diya-${diya.id}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveDiyaModal(diya);
            }}
            className="absolute pointer-events-auto cursor-pointer group diya-wobble transition-transform hover:scale-125 select-none"
            style={{
              left: `${diya.x}%`,
              top: `${diya.y}%`,
              animationDelay: `${diya.wobbleOffset}s`,
            }}
          >
            {/* Water Ripple & Light Glow */}
            <div 
              className="absolute -inset-4 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
              style={{
                background: `radial-gradient(circle, ${diya.glowColor} 0%, rgba(245, 158, 11, 0) 70%)`
              }}
            />

            {/* Clay Diya SVG */}
            <div className="relative flex flex-col items-center">
              {/* Flickering Flame */}
              <div 
                className="flame-anim relative -mb-1 z-10"
                style={{ animationDelay: `${diya.wobbleOffset * 0.2}s` }}
              >
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                  {/* Outer Flame Glow */}
                  <path
                    d="M7 0 C4 7, 0 11, 0 15 C0 18, 3 20, 7 20 C11 20, 14 18, 14 15 C14 11, 10 7, 7 0 Z"
                    fill="url(#flameGradOuter)"
                  />
                  {/* Inner Golden Core */}
                  <path
                    d="M7 5 C5 9, 3 12, 3 15 C3 17, 5 18, 7 18 C9 18, 11 17, 11 15 C11 12, 9 9, 7 5 Z"
                    fill="url(#flameGradInner)"
                  />
                  <defs>
                    <linearGradient id="flameGradOuter" x1="7" y1="0" x2="7" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                    <linearGradient id="flameGradInner" x1="7" y1="5" x2="7" y2="18" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Clay Earthen Lamp Body */}
              <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                <path
                  d="M1 4 C4 11, 24 11, 27 4 C28 9, 21 14, 14 14 C7 14, 0 9, 1 4 Z"
                  fill="#78350f"
                />
                <ellipse cx="14" cy="4" rx="13" ry="3.5" fill="#92400e" />
                <ellipse cx="14" cy="4" rx="10" ry="2.2" fill="#b45309" />
                {/* Yellow Marigold Petal detail */}
                <circle cx="9" cy="4" r="1.2" fill="#facc15" />
                <circle cx="19" cy="4" r="1.2" fill="#facc15" />
              </svg>

              {/* Hover Tooltip Preview */}
              <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center whitespace-nowrap bg-black/85 backdrop-blur-md text-amber-200 text-xs px-2.5 py-1 rounded-md border border-amber-500/40 shadow-xl pointer-events-none z-30">
                <span className="font-semibold">{diya.senderName}</span>
                <span className="text-[10px] text-white/80 max-w-[160px] truncate">{diya.wish}</span>
                <span className="text-[9px] text-amber-400 mt-0.5">क्लिक कर प्रार्थना पढ़ें (Click to read)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Diya Prayer Reader Modal */}
      {activeDiyaModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveDiyaModal(null)}
        >
          <div 
            className="relative w-full max-w-md bg-gradient-to-b from-[#2a1306] to-[#120703] border border-amber-500/50 rounded-2xl p-6 shadow-2xl text-white animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveDiyaModal(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-amber-300">गंगा जल दीपदान प्रार्थना</h3>
                <p className="text-xs text-amber-200/70 font-cinzel">Sacred River Diya Offering</p>
              </div>
            </div>

            <div className="bg-black/40 border border-amber-500/20 rounded-xl p-4 mb-4">
              <p className="text-sm md:text-base leading-relaxed text-amber-100 font-devanagari">
                "{activeDiyaModal.wish}"
              </p>
              <div className="mt-3 pt-3 border-t border-amber-500/20 flex justify-between items-center text-xs text-amber-400/80">
                <span>समर्पक: {activeDiyaModal.senderName}</span>
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> आस्था</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveDiyaModal(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-200 hover:text-white bg-amber-500/20 hover:bg-amber-500/30 rounded-lg border border-amber-500/30 transition-colors"
              >
                जय छठी माई (Amen)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Offer Diya Modal */}
      {showOfferModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={() => setShowOfferModal(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-gradient-to-b from-[#240e04] via-[#1a0a03] to-[#0d0401] border border-amber-500/60 rounded-3xl p-6 md:p-8 shadow-2xl text-white animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOfferModal(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-amber-300">पवित्र दीपदान (Offer a Diya)</h3>
                <p className="text-xs text-amber-200/80">
                  Float your sacred prayer on Mother Ganga's holy water to Surya Dev & Chhathi Maiya
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateDiya} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-amber-300/90 mb-1.5">
                  आपका नाम / Your Name (वैकल्पिक)
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="उदा. राहुल झा / Anonymous Devotee"
                  className="w-full bg-black/50 border border-amber-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  maxLength={40}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-amber-300/90 mb-1.5">
                  आपकी मनोकामना व प्रार्थना / Sacred Wish or Prayer *
                </label>
                <textarea
                  required
                  rows={3}
                  value={userWish}
                  onChange={(e) => setUserWish(e.target.value)}
                  placeholder="उदा. हे छठी माई! पूरे परिवार पर अपनी कृपा बरसाईं, सुख-शांति और सबका कल्याण करें..."
                  className="w-full bg-black/50 border border-amber-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none font-devanagari"
                  maxLength={220}
                />
                <div className="flex justify-between text-[11px] text-amber-400/70 mt-1">
                  <span>श्रद्धा और निर्मल भाव से समर्पित</span>
                  <span>{userWish.length}/220</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowOfferModal(false)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white rounded-xl transition-colors"
                >
                  रद्द करें (Cancel)
                </button>
                <button
                  type="submit"
                  disabled={!userWish.trim()}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-amber-600/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  दीप प्रवाहित करें (Float Diya)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Pill on the bottom-right */}
      <div className="fixed bottom-28 md:bottom-28 right-4 md:right-8 z-30 flex flex-col items-end gap-2">
        {justOffered && (
          <div className="bg-amber-950/90 border border-amber-400 text-amber-200 px-4 py-2 rounded-xl text-xs shadow-xl animate-bounce">
            ✨ आपका दीप गंगा की पावन धारा में प्रवाहित हो गया है! जय छठी मईया!
          </div>
        )}
        <button
          id="btn-offer-diya-cta"
          onClick={() => setShowOfferModal(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-600/90 via-orange-600/90 to-red-600/90 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-bold uppercase tracking-widest shadow-xl shadow-orange-950/50 border border-amber-400/50 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <Flame className="w-4 h-4 text-amber-300 group-hover:scale-125 transition-transform" />
          <span>दीपदान करें (Offer Diya)</span>
          <span className="bg-amber-400/20 text-amber-200 text-[10px] px-2 py-0.5 rounded-full border border-amber-300/30">
            {diyas.length}
          </span>
        </button>
      </div>
    </>
  );
};

export default FloatingDiyas;
