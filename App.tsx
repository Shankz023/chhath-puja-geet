/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Music, 
  Sparkles, 
  Flame, 
  BookOpen, 
  Calendar, 
  Share2, 
  ChevronRight, 
  ChevronLeft,
  Volume2,
  Heart,
  Menu,
  X,
  Play,
  Pause,
  Info,
  ExternalLink,
  Radio
} from 'lucide-react';

import { CHHATH_SONGS, DEVOTIONAL_QUOTES } from './src/data/songsData';
import { ThemeMode, Song } from './types';

import AnimatedDevotionalBackground from './components/AnimatedDevotionalBackground';
import DevotionalAura from './components/DevotionalAura';
import AudioAtmosphere from './components/AudioAtmosphere';
import FloatingDiyas from './components/FloatingDiyas';
import MusicPlayer from './components/MusicPlayer';
import HeroBanner from './components/HeroBanner';
import LyricsViewer from './components/LyricsViewer';
import RitualsGuide from './components/RitualsGuide';
import VirtualArghya from './components/VirtualArghya';
import MorningEveningToggle from './components/MorningEveningToggle';

export const App: React.FC = () => {
  const [mode, setMode] = useState<ThemeMode>('kharna');
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showArghyaModal, setShowArghyaModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Filter songs based on current mode
  const targetTag = mode === 'morning' ? 'Morning Arghya' : mode === 'evening' ? 'Evening Arghya' : 'Kharna';
  const filteredSongs = CHHATH_SONGS.filter(song => song.tag === targetTag);

  const [currentSong, setCurrentSong] = useState<Song>(filteredSongs[0] || CHHATH_SONGS[0]);

  // Handle Mode Change
  useEffect(() => {
    setIsPlaying(false);
    const songsForMode = CHHATH_SONGS.filter(song => 
      song.tag === (mode === 'morning' ? 'Morning Arghya' : mode === 'evening' ? 'Evening Arghya' : 'Kharna')
    );
    setCurrentSongIndex(0);
    setCurrentSong(songsForMode[0] || CHHATH_SONGS[0]);
  }, [mode]);

  // Keep currentSong in sync with index and filtered songs
  useEffect(() => {
    if (filteredSongs[currentSongIndex]) {
      setCurrentSong(filteredSongs[currentSongIndex]);
    }
  }, [currentSongIndex, mode]);

  // Play a specific song by index
  const handlePlaySong = (index: number) => {
    if (index === currentSongIndex) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  // Select a song and start playback immediately
  const handleSelectSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  // Next and Previous Song Traversing Functions
  const handleNextSong = () => {
    if (filteredSongs.length === 0) return;
    setCurrentSongIndex((prev) => (prev + 1) % filteredSongs.length);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    if (filteredSongs.length === 0) return;
    setCurrentSongIndex((prev) => (prev - 1 + filteredSongs.length) % filteredSongs.length);
    setIsPlaying(true);
  };

  // Keyboard navigation for traversing songs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNextSong();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSong();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredSongs.length]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const headerOffset = 80;
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-1000 ${
      mode === 'morning' ? 'text-stone-100' : 'text-amber-50'
    } selection:bg-amber-500 selection:text-black overflow-x-hidden pb-36`}>

      {/* ========================================================================= */}
      {/* ANIMATED DEVOTIONAL BACKGROUND (PER-SONG + DUAL MODES)                   */}
      {/* ========================================================================= */}
      <AnimatedDevotionalBackground currentSong={currentSong} mode={mode} />

      {/* Devotional Aura & Floating Marigold Flower Petals Layer */}
      <DevotionalAura mode={mode} />

      {/* Interactive Floating Diyas along the Sacred River */}
      <FloatingDiyas mode={mode} />

      {/* ========================================================================= */}
      {/* TOP NAVIGATION BAR                                                        */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-8 py-2.5 bg-black/75 backdrop-blur-2xl border-b border-amber-500/25 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3">
          
          {/* Brand Logo & Title (Clicking the spinning Sun opens mobile nav on mobile, scrolls top on desktop) */}
          <div className="flex items-center gap-2 sm:gap-3 select-none shrink-0">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setMobileMenuOpen(!mobileMenuOpen);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              title="मेनू खोलें (Open Menu)"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition-transform shrink-0 cursor-pointer border-none"
            >
              <Sun className="w-5 h-5 sm:w-6 sm:h-6 animate-spin text-stone-950" style={{ animationDuration: '24s' }} />
            </button>
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col cursor-pointer"
            >
              <span className="font-bold text-sm sm:text-base md:text-xl text-amber-100 font-devanagari tracking-tight hover:text-amber-300 transition-colors leading-none">
                छठ पूजा गीत
              </span>
              <span className="hidden sm:block text-[9px] md:text-[10px] font-cinzel text-amber-300/80 tracking-widest uppercase font-semibold mt-0.5">
                Sacred Chhath Puja Geet
              </span>
            </div>
          </div>

          {/* Center: Morning / Evening / Kharna Mode Switcher Toggle */}
          <div className="flex items-center">
            <MorningEveningToggle mode={mode} onToggle={(newMode) => setMode(newMode)} />
          </div>

          {/* Desktop Right Menu: Audio Atmosphere & Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* Sacred Atmosphere Sounds (Bell, Shankh, River) */}
            <AudioAtmosphere mode={mode} />

            {/* Quick Section Anchors */}
            <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-amber-100/85">
              <button 
                onClick={() => scrollToSection('section-songs')} 
                className="hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-none font-devanagari text-sm font-bold"
              >
                गीत संग्रह ({filteredSongs.length})
              </button>
              <button 
                onClick={() => scrollToSection('section-lyrics')} 
                className="hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-none font-devanagari text-sm font-bold"
              >
                बोल (Lyrics)
              </button>
              <button 
                onClick={() => scrollToSection('section-rituals')} 
                className="hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-none font-devanagari text-sm font-bold"
              >
                महापर्व महिमा
              </button>
            </div>

            {/* Virtual Arghya Button */}
            <button
              onClick={() => setShowArghyaModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <Flame className="w-4 h-4 fill-stone-950 animate-flame" />
              <span>अर्घ्य दर्शन</span>
            </button>
          </div>

          {/* Mobile Right Action Area: Direct Arghya Button (Hamburger icon hidden in mobile mode as Sun icon toggles the menu) */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            {/* Mobile Arghya Icon Button */}
            <button
              onClick={() => setShowArghyaModal(true)}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs flex items-center gap-1 shadow-md cursor-pointer"
              title="अर्घ्य दर्शन (Virtual Arghya)"
            >
              <Flame className="w-4 h-4 fill-stone-950 animate-flame" />
              <span className="text-[11px] font-devanagari">अर्घ्य</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu Modal */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl pt-20 px-5 pb-8 flex flex-col justify-between lg:hidden overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '20s' }} />
              <span className="font-bold text-lg font-devanagari text-amber-100">छठ महापर्व मेनू</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-stone-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 my-4">
            {/* Sacred Atmosphere Sounds Section */}
            <div className="p-4 rounded-2xl glass-card border border-amber-500/30">
              <span className="text-xs text-amber-300 font-cinzel uppercase tracking-widest font-bold block mb-3">
                पवित्र वातावरण ध्वनियां (Sacred Atmosphere)
              </span>
              <AudioAtmosphere mode={mode} />
            </div>

            {/* Navigation Anchors */}
            <div className="space-y-2.5">
              {[
                { id: 'section-songs', label: `गीत संग्रह (${filteredSongs.length} भजन)` },
                { id: 'section-lyrics', label: 'गीत के बोल (Lyrics & Meanings)' },
                { id: 'section-rituals', label: 'चार दिवसीय महापर्व (4 Days Guide)' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3.5 px-4 rounded-2xl glass-card text-sm sm:text-base font-bold text-amber-100 flex items-center justify-between hover:border-amber-400/50"
                >
                  <span className="font-devanagari">{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>
              ))}
            </div>

            {/* Arghya CTA inside mobile drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowArghyaModal(true);
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-stone-950 font-bold uppercase tracking-widest text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-5 h-5 fill-stone-950 animate-flame" />
              <span>अर्घ्य अर्पण करें (Virtual Arghya)</span>
            </button>
          </div>

          <div className="text-center text-xs text-amber-200/70 font-devanagari pt-3 border-t border-white/10">
            जय छठी मईया | ॐ सूर्याय नमः 🙏
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN HERO SECTION WITH AUDIOPHILE PLAYER & TRAVERSING CONTROLS            */}
      {/* ========================================================================= */}
      <main className="relative z-20">
        <HeroBanner
          currentSong={currentSong}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNextSong}
          onPrev={handlePrevSong}
          onOpenArghya={() => setShowArghyaModal(true)}
          mode={mode}
        />

        {/* Sacred Quote Ticker */}
        <div className="w-full max-w-5xl mx-auto px-4 my-6">
          <div className="p-4 sm:p-5 rounded-3xl glass-panel-glow flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs md:text-sm text-amber-100 font-devanagari font-medium leading-relaxed">
                {DEVOTIONAL_QUOTES[currentSongIndex % DEVOTIONAL_QUOTES.length]?.hindi}
              </p>
            </div>
            <span className="text-[11px] font-cinzel text-amber-300 uppercase tracking-widest whitespace-nowrap font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              {mode === 'morning' ? 'उषा अर्घ्य दर्शन' : mode === 'evening' ? 'संध्या अर्घ्य दर्शन' : 'खरना पावन बेला'}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION: ALL SONGS PLAYLIST GRID                                          */}
        {/* ========================================================================= */}
        <section id="section-songs" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Music className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-devanagari">अमृतमयी छठ भजन संग्रह ({filteredSongs.length} गीत)</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black font-devanagari text-amber-100">
                {mode === 'morning' ? 'उषा अर्घ्य पावन गीत' : mode === 'evening' ? 'संध्या अर्घ्य पावन गीत' : 'खरना व लोक प्रिय छठ गीत'}
              </h2>
              <p className="text-xs md:text-sm text-amber-200/80 font-devanagari mt-1">
                क्लिक कर सीधे मधुर भजन सुनें व पारंपरिक बोल का आनंद लें
              </p>
            </div>

            {/* Song Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevSong}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Previous Song"
              >
                <ChevronLeft className="w-4 h-4 text-amber-300" />
                <span>पिछला गीत</span>
              </button>
              <button
                onClick={handleNextSong}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/30 to-orange-500/30 hover:from-amber-500/40 hover:to-orange-500/40 border border-amber-400/50 text-xs font-bold text-amber-200 transition-colors cursor-pointer shadow-md shadow-amber-500/15"
                title="Next Song"
              >
                <span>अगला गीत</span>
                <ChevronRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>

          {/* Grid of Song Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredSongs.map((song, idx) => {
              const isCurrent = idx === currentSongIndex;
              return (
                <div
                  key={song.id}
                  id={`song-card-${song.id}`}
                  onClick={() => handleSelectSong(idx)}
                  className={`group relative rounded-3xl overflow-hidden p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-gradient-to-b from-amber-500/25 via-orange-500/15 to-black/90 border-2 border-amber-400 shadow-2xl shadow-amber-500/25 scale-[1.02] ring-2 ring-amber-400/40 backdrop-blur-xl'
                      : 'glass-card hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-amber-400/40 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={song.coverImage}
                          alt={song.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {isCurrent ? (
                          <div className="absolute inset-0 bg-amber-500/40 backdrop-blur-[1px] flex items-center justify-center">
                            {isPlaying ? (
                              <div className="flex items-center gap-0.5">
                                <span className="w-1.5 h-4 bg-white rounded-full animate-bounce" />
                                <span className="w-1.5 h-6 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                <span className="w-1.5 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                              </div>
                            ) : (
                              <Play className="w-6 h-6 text-white fill-white" />
                            )}
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-amber-500/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Play className="w-6 h-6 text-amber-300 fill-amber-300" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-cinzel">
                          {song.tag}
                        </span>
                        <h3 className="font-bold text-base text-amber-100 font-devanagari line-clamp-1 group-hover:text-amber-300 transition-colors mt-0.5">
                          {song.hindiTitle}
                        </h3>
                        <p className="text-xs text-stone-300 font-medium truncate mt-0.5">
                          {song.singer}
                        </p>
                        <span className="text-[11px] font-mono text-stone-400">
                          {song.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-300/80 line-clamp-2 leading-relaxed mb-4 font-devanagari">
                      {song.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs gap-2">
                    <a
                      href={song.youtubeUrl || `https://www.youtube.com/watch?v=${song.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-red-400 hover:text-red-300 font-semibold text-[11px] flex items-center gap-1 bg-red-950/40 hover:bg-red-900/60 px-2.5 py-1 rounded-lg border border-red-500/30 transition-colors"
                      title="Open and listen directly on YouTube"
                    >
                      <ExternalLink className="w-3 h-3 text-red-400" />
                      <span>YouTube</span>
                    </a>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlaySong(idx);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        isCurrent
                          ? isPlaying
                            ? 'bg-amber-400 text-stone-950 shadow-md ring-2 ring-amber-300'
                            : 'bg-amber-500/80 text-stone-950'
                          : 'bg-white/10 group-hover:bg-amber-500/30 text-white group-hover:text-amber-200'
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-stone-950" />
                          <span>Playing</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isCurrent ? 'Resume' : 'Play Song'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: LYRICS VIEWER & SPIRITUAL MEANINGS                                */}
        {/* ========================================================================= */}
        <section id="section-lyrics" className="scroll-mt-24 max-w-5xl mx-auto px-4 md:px-8 py-10">
          <LyricsViewer song={currentSong} />
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 4-DAY MAHARITUALS GUIDE & TRADITIONS                             */}
        {/* ========================================================================= */}
        <section id="section-rituals" className="scroll-mt-24 px-4 md:px-8 py-6">
          <RitualsGuide mode={mode} />
        </section>

        {/* Devotional Footer Tribute */}
        <footer className="max-w-7xl mx-auto px-4 md:px-8 py-14 mt-12 border-t border-amber-500/20 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-lg shadow-amber-500/10">
              <Sun className="w-6 h-6 animate-pulse text-amber-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-amber-200 font-devanagari">
              छठी मईया सबकर कल्याण करीं
            </h3>
            <p className="text-xs md:text-sm text-stone-300/90 max-w-xl leading-relaxed">
              Dedicated to the timeless heritage of Chhath Mahaparv and the immortal voice of Padma Bhushan Sharda Sinha ji, whose sacred songs resonate in every devotee's heart.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs font-semibold uppercase tracking-widest text-amber-400/80 pt-2 font-devanagari">
              <span>शुद्धता (Purity)</span>
              <span>•</span>
              <span>निष्ठा (Devotion)</span>
              <span>•</span>
              <span>प्रकृति पूजा (Nature Worship)</span>
            </div>
          </div>
        </footer>
      </main>

      {/* ========================================================================= */}
      {/* FIXED BOTTOM MUSIC PLAYER BAR                                             */}
      {/* ========================================================================= */}
      <MusicPlayer
        songs={filteredSongs}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onSelectSong={handleSelectSong}
        onNextSong={handleNextSong}
        onPrevSong={handlePrevSong}
        mode={mode}
      />

      {/* ========================================================================= */}
      {/* VIRTUAL ARGHYA OFFERING MODAL POPUP                                       */}
      {/* ========================================================================= */}
      {showArghyaModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-200"
          onClick={() => setShowArghyaModal(false)}
        >
          <div 
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <VirtualArghya mode={mode} onClose={() => setShowArghyaModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
