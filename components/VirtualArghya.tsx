/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { 
  Sun, 
  Sparkles, 
  Droplets, 
  CheckCircle, 
  RotateCcw, 
  X, 
  Flame, 
  Volume2, 
  VolumeX, 
  Heart,
  Flower2,
  Play,
  Pause
} from 'lucide-react';
import { ThemeMode } from '../types';

import chhathSunriseGhat from '/src/assets/images/chhath_sunrise_ghat_1786812872693.jpg';
import chhathSunsetArghya from '/src/assets/images/chhath_sunset_arghya_1786812886246.jpg';
import chhathSoop from '/src/assets/images/chhath_soop_offering_1786811493927.jpg';

interface VirtualArghyaProps {
  mode: ThemeMode;
  onClose?: () => void;
}

export type OfferingCategory = 'gangajal' | 'milk' | 'soop';

export const VirtualArghya: React.FC<VirtualArghyaProps> = ({ mode, onClose }) => {
  const [offeringType, setOfferingType] = useState<OfferingCategory>('gangajal');
  const [isPouring, setIsPouring] = useState<boolean>(false);
  const [pourProgress, setPourProgress] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [offeredCount, setOfferedCount] = useState<number>(108);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [hasAkshat, setHasAkshat] = useState<boolean>(true);
  const [hasFlowers, setHasFlowers] = useState<boolean>(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundNodesRef = useRef<{ noiseSource: AudioNode | null; gain: GainNode | null } | null>(null);

  // Background visual based on mode & offering type
  const currentBackdrop = offeringType === 'soop'
    ? chhathSoop
    : (mode === 'morning' ? chhathSunriseGhat : chhathSunsetArghya);

  // Realistic audio synthesis for flowing water / milk stream & holy bell chime
  const startWaterSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;

      const bufferSize = ctx.sampleRate * 4;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = offeringType === 'milk' ? 'lowpass' : 'bandpass';
      filter.frequency.setValueAtTime(offeringType === 'milk' ? 480 : 880, ctx.currentTime);
      filter.Q.setValueAtTime(offeringType === 'milk' ? 2.0 : 3.5, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.3);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
      soundNodesRef.current = { noiseSource: whiteNoise, gain };

      // Play soft sacred bell chime (528 Hz)
      const chime = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(528, ctx.currentTime);
      chimeGain.gain.setValueAtTime(0.12, ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);
      chime.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chime.start();
      chime.stop(ctx.currentTime + 2.9);
    } catch (e) {
      console.warn('Audio synthesis note:', e);
    }
  };

  const stopWaterSound = () => {
    if (soundNodesRef.current && soundNodesRef.current.gain && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        soundNodesRef.current.gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        setTimeout(() => {
          if (soundNodesRef.current?.noiseSource) {
            (soundNodesRef.current.noiseSource as any).stop?.();
            soundNodesRef.current = null;
          }
        }, 220);
      } catch (e) {}
    }
  };

  // Offering progression logic
  useEffect(() => {
    let interval: any = null;
    if (isPouring && !isCompleted) {
      startWaterSound();
      interval = setInterval(() => {
        setPourProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsCompleted(true);
            setIsPouring(false);
            stopWaterSound();
            setOfferedCount((c) => c + 1);
            return 100;
          }
          return prev + 2; // ~5 seconds for complete sacred offering
        });
      }, 100);
    } else {
      stopWaterSound();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPouring, isCompleted]);

  // Handle Start / Toggle Pouring
  const togglePouring = () => {
    if (isCompleted) {
      resetOffering();
      return;
    }
    setIsPouring((prev) => !prev);
  };

  const resetOffering = () => {
    stopWaterSound();
    setIsPouring(false);
    setIsCompleted(false);
    setPourProgress(0);
  };

  useEffect(() => {
    return () => {
      stopWaterSound();
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto glass-panel-glow rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl text-white overflow-hidden border border-amber-500/40 select-none">
      
      {/* Radiant ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      {/* Top right control buttons */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-30">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-full glass-card hover:bg-white/10 text-amber-200 transition-colors cursor-pointer"
          title={soundEnabled ? 'ध्वनि म्यूट करें (Mute Audio)' : 'पवित्र ध्वनि ऑन करें (Enable Audio)'}
        >
          {soundEnabled ? <Volume2 className="w-5 h-5 text-amber-300" /> : <VolumeX className="w-5 h-5 text-stone-400" />}
        </button>

        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-full glass-card hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            title="बंद करें (Close)"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-2 animate-glow-pulse">
          <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '24s' }} />
          <span>{mode === 'morning' ? 'उषा अर्घ्य दर्शन (Usha Arghya)' : 'संध्या अर्घ्य दर्शन (Sandhya Arghya)'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-devanagari text-amber-100 tracking-tight drop-shadow">
          प्रत्यक्ष देव सूर्य व छठी मईया को पावन अर्घ्य
        </h2>
        <p className="text-xs sm:text-sm text-amber-200/85 mt-1.5 font-devanagari leading-relaxed">
          {mode === 'morning'
            ? 'उदित हो रहे सूर्य देव को तांबे के कलश से धारा बना कर अर्घ्य अर्पित करें।'
            : 'अस्ताचलगामी सूर्य नारायण को प्रथम अर्घ्य देकर संपूर्ण जगत व परिवार के कल्याण की कामना करें।'}
        </p>
      </div>

      {/* Sacred Offering Selector Tabs */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-4 flex-wrap relative z-10">
        {[
          { 
            id: 'gangajal' as OfferingCategory, 
            label: 'गंगाजल अर्घ्य', 
            sub: 'Pure Gangajal', 
            icon: Droplets,
            mantra: 'ॐ सूर्याय नमः • ॐ घृणि सूर्याय नमः'
          },
          { 
            id: 'milk' as OfferingCategory, 
            label: 'दुग्ध अर्घ्य (पय)', 
            sub: 'Sacred Milk (पय अर्पण)', 
            icon: Sparkles,
            mantra: 'ॐ नमो भगवते श्री सूर्याय आदिभूताय नमः'
          },
          { 
            id: 'soop' as OfferingCategory, 
            label: 'सूप-दउरा अर्पण', 
            sub: 'Daura & Thekua', 
            icon: Sun,
            mantra: 'जय छठी मईया • सदा सहाय होईं'
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = offeringType === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setOfferingType(tab.id);
                resetOffering();
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-2xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-stone-950 font-bold border-amber-300 shadow-lg shadow-amber-500/30 scale-102 ring-2 ring-amber-300'
                  : 'glass-card text-stone-200 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-devanagari font-bold">{tab.label}</span>
                <span className="text-[9px] uppercase tracking-wider font-cinzel opacity-80 hidden sm:inline">{tab.sub}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Puja Samagri Toggles */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 text-xs font-devanagari text-stone-200 relative z-10">
        <label className="flex items-center gap-2 cursor-pointer bg-black/40 px-3 py-1.5 rounded-full border border-amber-500/20 hover:border-amber-400/40">
          <input 
            type="checkbox" 
            checked={hasAkshat} 
            onChange={(e) => setHasAkshat(e.target.checked)}
            className="accent-amber-500 rounded cursor-pointer"
          />
          <span>अक्षत व रोली युक्त (Akshat)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer bg-black/40 px-3 py-1.5 rounded-full border border-amber-500/20 hover:border-amber-400/40">
          <input 
            type="checkbox" 
            checked={hasFlowers} 
            onChange={(e) => setHasFlowers(e.target.checked)}
            className="accent-amber-500 rounded cursor-pointer"
          />
          <Flower2 className="w-3.5 h-3.5 text-rose-400" />
          <span>लाल पुष्प (Red Flowers)</span>
        </label>
      </div>

      {/* ========================================================================= */}
      {/* REALISTIC HIGH-FIDELITY DEVOTIONAL ALTAR VISUALIZER                       */}
      {/* ========================================================================= */}
      <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl relative flex flex-col justify-between items-center group">
        
        {/* Real Ghat Backdrop Image with Cinematic Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform group-hover:scale-102"
          style={{ backgroundImage: `url(${currentBackdrop})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/85" />
        </div>

        {/* Surya Dev Rays */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-yellow-300 via-amber-400 to-orange-500 blur-2xl opacity-60 animate-glow-pulse pointer-events-none" />

        {/* Top: Glowing Surya Dev Sun Orb */}
        <div className="relative z-10 flex flex-col items-center mt-3 pointer-events-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-200 via-amber-400 to-orange-500 shadow-[0_0_55px_#f59e0b] flex items-center justify-center animate-pulse">
            <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-stone-950 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
          <span className="text-xs font-cinzel text-amber-200 tracking-widest font-bold mt-1 bg-black/50 px-3 py-0.5 rounded-full border border-amber-400/30">
            {mode === 'morning' ? 'उदीयमान सूर्य देव' : 'अस्ताचलगामी सूर्य देव'}
          </span>
        </div>

        {/* Center: The Traditional Copper Kalash & Continuous Liquid Stream */}
        <div className="relative z-10 flex flex-col items-center my-auto pointer-events-none w-full">
          
          {/* Lota / Kalash with tilt on pouring */}
          <div className="relative flex flex-col items-center">
            <div 
              className={`relative transition-all duration-700 transform ${
                isPouring ? '-rotate-45 -translate-x-10 translate-y-2' : 'rotate-0'
              }`}
            >
              {/* Copper Kalash Body */}
              <div className="w-20 h-18 sm:w-24 sm:h-20 rounded-b-3xl rounded-t-xl bg-gradient-to-r from-amber-800 via-amber-600 to-amber-700 border-2 border-amber-300 shadow-2xl flex items-center justify-center relative">
                
                {/* Lota Neck & Gold Rim */}
                <div className="absolute -top-3 w-16 sm:w-18 h-3.5 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 border border-amber-100 shadow-md flex items-center justify-center">
                  {hasFlowers && (
                    <span className="w-3 h-3 rounded-full bg-red-600 -top-1 absolute shadow-sm" />
                  )}
                </div>

                {/* Auspicious Holy Swastika (卐) Symbol */}
                <span className="text-yellow-200 font-bold text-base sm:text-lg select-none drop-shadow">
                  卐
                </span>

                {/* Liquid Level inside Kalash */}
                <div className={`absolute top-0 inset-x-2 h-1 rounded-full ${
                  offeringType === 'milk' ? 'bg-white shadow-[0_0_8px_#fff]' : 'bg-cyan-200 shadow-[0_0_8px_#38bdf8]'
                }`} />
              </div>
            </div>

            {/* Continuous Liquid Stream (Visible during isPouring) */}
            {isPouring && (
              <div className="relative flex flex-col items-center -mt-2">
                {/* Flowing Liquid Stream Column */}
                <div 
                  className={`w-3 sm:w-4 h-36 sm:h-44 rounded-full shadow-2xl animate-pulse ${
                    offeringType === 'milk'
                      ? 'bg-gradient-to-b from-amber-50 via-white to-amber-100 shadow-[0_0_25px_#ffffff]'
                      : 'bg-gradient-to-b from-amber-200 via-cyan-300 to-blue-400 shadow-[0_0_30px_#38bdf8]'
                  }`}
                  style={{
                    boxShadow: offeringType === 'milk' 
                      ? '0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(254,243,199,0.7)' 
                      : '0 0 25px rgba(56,189,248,0.9), 0 0 50px rgba(245,158,11,0.6)'
                  }}
                />

                {/* Sparkling droplets along the stream */}
                <div className="absolute inset-0 flex flex-col justify-around items-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-200 animate-ping" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 rounded-full bg-cyan-200 animate-ping" style={{ animationDelay: '0.4s' }} />
                </div>

                {/* River Impact Splash & Concentric Ripples */}
                <div className="relative flex items-center justify-center -mt-3">
                  <div className={`w-32 h-10 rounded-full blur-sm animate-ping ${
                    offeringType === 'milk' ? 'bg-white/40' : 'bg-cyan-400/40'
                  }`} />
                  <div className="absolute w-20 h-6 rounded-full border-2 border-yellow-300/80 animate-pulse" />
                  <div className="absolute -top-3 flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" />
                    <span className="w-3 h-3 rounded-full bg-amber-200 animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <span className="w-2 h-2 rounded-full bg-cyan-200 animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom River Bank Status Bar */}
        <div className="relative z-10 w-full flex items-center justify-between text-xs px-4 pb-3 pointer-events-none">
          <div className="flex items-center gap-1.5 text-amber-300 font-devanagari bg-black/70 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-flame" />
            <span>पवित्र गंगा तट • {offeringType === 'milk' ? 'कच्चा दूध (पय) अर्घ्य' : 'पवित्र गंगाजल अर्घ्य'}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-black/75 px-3 py-1 rounded-full border border-amber-400/40 text-amber-200">
            <span>अर्घ्य समर्पण: {Math.round(pourProgress)}%</span>
          </div>
        </div>

        {/* Completion Celebration Overlay */}
        {isCompleted && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300 z-40">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-500 flex items-center justify-center text-stone-950 shadow-2xl mb-3 animate-bounce">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-devanagari text-amber-200 drop-shadow">
              अर्घ्य सम्पूर्ण भइल!
            </h3>
            <p className="text-sm md:text-base text-amber-100 font-devanagari max-w-md mt-1.5 leading-relaxed">
              छठी मईया व भगवान भास्कर आपके परिवार पर अपनी असीम कृपा बरसाएं। आपका व्रत व अर्घ्य स्वीकार हुआ!
            </p>
            <div className="mt-4 px-5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold font-devanagari">
              ॐ सूर्याय नमः • जय छठी मईया 🙏
            </div>
          </div>
        )}

      </div>

      {/* Vedic Mantra Banner */}
      <div className="my-4 p-3 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-cinzel text-amber-400 uppercase tracking-widest font-bold">
              {offeringType === 'milk' ? 'पवित्र दुग्ध अर्घ्य मंत्र' : 'सूर्य गायत्री महामंत्र'}
            </span>
            <p className="text-xs sm:text-sm text-amber-100 font-devanagari font-bold">
              {offeringType === 'milk'
                ? 'ॐ नमो भगवते श्री सूर्याय आदिभूताय नमः।'
                : 'ॐ भास्कराय विद्महे महातेजाय धीमहि, तन्नः सूर्यः प्रचोदयात्।'}
            </p>
          </div>
        </div>
        <div className="text-[11px] font-cinzel text-amber-300 font-semibold uppercase tracking-wider shrink-0 bg-black/40 px-3 py-1 rounded-full border border-amber-500/20">
          अर्घ्य सिद्धि: {offeredCount}
        </div>
      </div>

      {/* Progress Bar Display */}
      <div className="relative w-full h-2.5 bg-black/60 rounded-full overflow-hidden border border-amber-500/30 mb-4 z-10">
        <div 
          className={`h-full transition-all duration-100 rounded-full ${
            offeringType === 'milk'
              ? 'bg-gradient-to-r from-amber-100 via-white to-amber-200 shadow-[0_0_12px_#fff]'
              : 'bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-300 shadow-[0_0_12px_#38bdf8]'
          }`}
          style={{ width: `${pourProgress}%` }}
        />
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE CONTROLS (CLICK OR TAP TO OFFER)                              */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1 border-t border-amber-500/20 relative z-10">
        <div className="flex items-center gap-2 text-xs text-stone-300 font-devanagari text-center sm:text-left">
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400/30 shrink-0" />
          <span>
            {isPouring 
              ? 'अर्घ्य की पावन धारा प्रवाहित हो रही है...' 
              : 'क्लिक करें और सूर्य देव को अर्घ्य समर्पित करें'}
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {isCompleted ? (
            <button
              onClick={resetOffering}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>पुनः अर्घ्य दें (Offer Again)</span>
            </button>
          ) : (
            <button
              id="btn-pour-arghya"
              onClick={togglePouring}
              className={`w-full sm:w-auto select-none flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest transition-all cursor-pointer shadow-2xl active:scale-95 ${
                isPouring
                  ? 'bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 text-stone-950 scale-105 shadow-amber-400/50 ring-4 ring-amber-300'
                  : 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 shadow-amber-500/30 hover:scale-102'
              }`}
            >
              <Droplets className={`w-4 h-4 ${isPouring ? 'animate-bounce text-stone-950' : ''}`} />
              <span>
                {isPouring 
                  ? 'अर्घ्य अर्पण जारी है (विराम के लिए क्लिक करें)...' 
                  : (offeringType === 'milk' ? 'कच्चा दूध अर्घ्य अर्पित करें' : 'गंगाजल अर्घ्य अर्पित करें')}
              </span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default VirtualArghya;
