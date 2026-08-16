/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { Bell, Volume2, VolumeX, Sparkles, Wind, Waves, Disc } from 'lucide-react';
import { ThemeMode } from '../types';

interface AudioAtmosphereProps {
  mode: ThemeMode;
}

export const AudioAtmosphere: React.FC<AudioAtmosphereProps> = ({ mode }) => {
  const [isWaterActive, setIsWaterActive] = useState<boolean>(false);
  const [isMantraActive, setIsMantraActive] = useState<boolean>(false);
  const [isBellRinging, setIsBellRinging] = useState<boolean>(false);
  const [isShankhBlowing, setIsShankhBlowing] = useState<boolean>(false);
  const [waterVolume, setWaterVolume] = useState<number>(0.25);
  const [audioSupported, setAudioSupported] = useState<boolean>(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const waterNodeRef = useRef<{ source: AudioNode; gain: GainNode } | null>(null);
  const mantraIntervalRef = useRef<number | null>(null);

  let sankhAudio = new Audio("/src/assets/sounds/sankhSound.mp3");
  let splashWaterEffect = new Audio("/src/assets/sounds/splashWaterEffect.mp3");

  // Initialize or resume AudioContext
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      } else {
        setAudioSupported(false);
        return null;
      }
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play realistic Temple Bell chime using additive harmonics
  const ringTempleBell = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    setIsBellRinging(true);
    setTimeout(() => setIsBellRinging(false), 2400);

    const now = ctx.currentTime;
    const fundamental = 587.33; // D5 pitch - divine bell tone
    const partials = [
      { freq: fundamental * 0.56, gain: 0.6, decay: 3.5 }, // hum
      { freq: fundamental * 1.00, gain: 1.0, decay: 4.0 }, // prime
      { freq: fundamental * 1.20, gain: 0.8, decay: 3.2 }, // tierce
      { freq: fundamental * 1.50, gain: 0.7, decay: 2.8 }, // quint
      { freq: fundamental * 2.00, gain: 0.5, decay: 2.2 }, // nominal
      { freq: fundamental * 2.76, gain: 0.3, decay: 1.8 }, // decime
      { freq: fundamental * 3.42, gain: 0.2, decay: 1.2 }, // supertonic
    ];

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.4, now);
    masterGain.connect(ctx.destination);

    partials.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      g.gain.setValueAtTime(gain * 0.35, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(g);
      g.connect(masterGain);

      osc.start(now);
      osc.stop(now + decay + 0.1);
    });
  };

  // Play divine Shankh (Conch) Naad with deep brassy swell
  const blowShankh = () => {

    setIsShankhBlowing(true);
    sankhAudio.currentTime = 0;
    sankhAudio.play();
    setTimeout(() => setIsShankhBlowing(false), 3800);

  };

  // Toggle holy river stream ambient noise generator
  const toggleWater = () => {
    if (isWaterActive) {
      splashWaterEffect.pause();
      return;
    }
    setIsWaterActive((prev) => !prev);
    if (!isWaterActive) {
      splashWaterEffect.currentTime = 0;
      splashWaterEffect.play();
    }
    setTimeout(() => {
      setIsWaterActive(false);
       splashWaterEffect.pause();
    }, 6000);
  };

  // Adjust volume if water is playing
  useEffect(() => {
    if (waterNodeRef.current && audioCtxRef.current) {
      waterNodeRef.current.gain.gain.setValueAtTime(waterVolume * 0.6, audioCtxRef.current.currentTime);
    }
  }, [waterVolume]);

  // Clean up
  useEffect(() => {
    return () => {
      if (waterNodeRef.current) {
        waterNodeRef.current.gain.disconnect();
      }
      if (mantraIntervalRef.current) {
        clearInterval(mantraIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
      {/* Temple Bell Button */}
      <button
        id="btn-temple-bell"
        onClick={ringTempleBell}
        title="Ring Sacred Temple Bell (मंदिर घंटी नाद)"
        className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer ${isBellRinging
            ? 'bg-amber-500/30 border-amber-400 text-amber-200 scale-105 shadow-lg shadow-amber-500/20'
            : 'bg-black/30 hover:bg-black/50 border-white/20 hover:border-amber-400/60 text-amber-100/90'
          }`}
      >
        <Bell className={`w-4 h-4 text-amber-400 ${isBellRinging ? 'animate-bounce' : 'group-hover:rotate-12'} transition-transform`} />
        <span>घंटी बजाएं (Bell)</span>
        {isBellRinging && (
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
        )}
      </button>

      {/* Shankh Naad Button */}
      <button
        id="btn-shankh-naad"
        onClick={blowShankh}
        title="Divine Shankh Naad (पवित्र शंख ध्वनि)"
        className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer ${isShankhBlowing
            ? 'bg-orange-500/30 border-orange-400 text-orange-200 scale-105 shadow-lg shadow-orange-500/20'
            : 'bg-black/30 hover:bg-black/50 border-white/20 hover:border-orange-400/60 text-orange-100/90'
          }`}
      >
        <Wind className={`w-4 h-4 text-orange-400 ${isShankhBlowing ? 'animate-pulse' : 'group-hover:scale-110'} transition-transform`} />
        <span>शंख नाद (Shankh)</span>
        {isShankhBlowing && (
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
        )}
      </button>

      {/* Holy River Ambient Stream */}
      <button
        id="btn-river-ambient"
        onClick={toggleWater}
        title="Holy River Ganga Ambient Flow (गंगा जल धारा)"
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer ${isWaterActive
            ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/20'
            : 'bg-black/30 hover:bg-black/50 border-white/20 hover:border-cyan-400/60 text-cyan-100/90'
          }`}
      >
        <Waves className={`w-4 h-4 text-cyan-300 ${isWaterActive ? 'animate-pulse' : ''}`} />
        <span>गंगा धारा ({isWaterActive ? 'ON' : 'OFF'})</span>
      </button>
    </div>
  );
};

export default AudioAtmosphere;
