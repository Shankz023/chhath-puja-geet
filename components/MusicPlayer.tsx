/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Repeat, 
  Shuffle, 
  ListMusic, 
  Music,
  ExternalLink,
  Heart,
  Radio
} from 'lucide-react';
import { Song, ThemeMode } from '../types';
import { devotionalSynth } from '../src/services/devotionalSynth';

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface MusicPlayerProps {
  songs: Song[];
  currentSongIndex: number;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  onSelectSong: (index: number) => void;
  onNextSong: () => void;
  onPrevSong: () => void;
  mode: ThemeMode;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  songs,
  currentSongIndex,
  isPlaying,
  setIsPlaying,
  onSelectSong,
  onNextSong,
  onPrevSong,
  mode,
}) => {
  const currentSong = songs[currentSongIndex] || songs[0];
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(currentSong.durationSec || 335);
  const [volume, setVolume] = useState<number>(85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [ambientDrone, setAmbientDrone] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const playerRef = useRef<any>(null);
  const isDraggingRef = useRef<boolean>(false);

  // Initialize YouTube Iframe Player API
  useEffect(() => {
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        try {
          if (playerRef.current) {
            playerRef.current.destroy();
          }
          playerRef.current = new window.YT.Player('youtube-audio-player-element', {
            height: '10',
            width: '10',
            videoId: currentSong.youtubeId,
            playerVars: {
              autoplay: isPlaying ? 1 : 0,
              controls: 0,
              disablekb: 1,
              enablejsapi: 1,
              fs: 0,
              modestbranding: 1,
              rel: 0,
              origin: window.location.origin,
              playsinline: 1
            },
            events: {
              onReady: (event: any) => {
                event.target.setVolume(isMuted ? 0 : volume);
                if (isPlaying) {
                  event.target.playVideo();
                }
                const trackDur = event.target.getDuration();
                if (trackDur && trackDur > 0) {
                  setDuration(trackDur);
                }
              },
              onStateChange: (event: any) => {
                // YT.PlayerState: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
                if (event.data === 0) { // ENDED
                  if (isLooping) {
                    event.target.seekTo(0, true);
                    event.target.playVideo();
                  } else {
                    onNextSong();
                  }
                } else if (event.data === 1) { // PLAYING
                  setIsPlaying(true);
                  const trackDur = event.target.getDuration();
                  if (trackDur && trackDur > 0) {
                    setDuration(trackDur);
                  }
                } else if (event.data === 2) { // PAUSED
                  // Keep state synced
                }
              },
            },
          });
        } catch (err) {
          console.warn('Error creating YT player instance:', err);
        }
      }
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, [currentSong]);

  // When currentSong changes, load new video and reset state
  useEffect(() => {
    setCurrentTime(0);
    setDuration(currentSong.durationSec || 335);

    if (playerRef.current && playerRef.current.loadVideoById) {
      try {
        if (isPlaying) {
          playerRef.current.loadVideoById(currentSong.youtubeId);
        } else {
          playerRef.current.cueVideoById(currentSong.youtubeId);
        }
      } catch (err) {
        console.warn('Error loading video on song change', err);
      }
    }
  }, [currentSongIndex, mode]);

  // When isPlaying changes, trigger play/pause on player
  useEffect(() => {
    if (playerRef.current) {
      try {
        if (isPlaying) {
          if (playerRef.current.playVideo) {
            playerRef.current.playVideo();
          }
        } else {
          if (playerRef.current.pauseVideo) {
            playerRef.current.pauseVideo();
          }
        }
      } catch (err) {
        console.warn('Error toggling play/pause in YT player', err);
      }
    }
  }, [isPlaying]);

  // Real-time synchronization of actual YouTube track playback time
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if (!isDraggingRef.current) {
          if (playerRef.current && playerRef.current.getCurrentTime) {
            try {
              const currentSecs = playerRef.current.getCurrentTime();
              const trackDur = playerRef.current.getDuration();
              if (typeof currentSecs === 'number' && !isNaN(currentSecs)) {
                setCurrentTime(currentSecs);
              }
              if (typeof trackDur === 'number' && trackDur > 0) {
                setDuration(trackDur);
              }
            } catch (e) {}
          } else {
            // Fallback tick
            setCurrentTime((prev) => {
              if (prev >= duration) {
                if (isLooping) return 0;
                onNextSong();
                return 0;
              }
              return prev + 1;
            });
          }
        }
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration, isLooping, onNextSong]);

  // Seek handler when dragging range slider
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetSeconds = parseFloat(e.target.value);
    setCurrentTime(targetSeconds);
    
    // Perform real-time seeking on the YouTube video
    if (playerRef.current && playerRef.current.seekTo) {
      try {
        playerRef.current.seekTo(targetSeconds, true);
      } catch (err) {
        console.warn('Seek error:', err);
      }
    }
  };

  const handleSeekMouseDown = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    setIsDragging(false);
    isDraggingRef.current = false;
    const targetSeconds = currentTime;
    
    if (playerRef.current && playerRef.current.seekTo) {
      try {
        playerRef.current.seekTo(targetSeconds, true);
        if (isPlaying) {
          playerRef.current.playVideo();
        }
      } catch (err) {
        console.warn('Seek error on release:', err);
      }
    }
  };

  // Toggle ambient drone
  const toggleAmbientDrone = () => {
    if (ambientDrone) {
      devotionalSynth.stopDrone();
      setAmbientDrone(false);
    } else {
      devotionalSynth.startDrone(0.18);
      devotionalSynth.ringBell();
      setAmbientDrone(true);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);
    if (playerRef.current && playerRef.current.setVolume) {
      try {
        playerRef.current.setVolume(val);
      } catch (e) {}
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (playerRef.current && playerRef.current.setVolume) {
      try {
        playerRef.current.setVolume(nextMute ? 0 : volume);
      } catch (e) {}
    }
  };

  const formatTime = (secs: number) => {
    const totalSecs = Math.max(0, Math.floor(secs || 0));
    const m = Math.floor(totalSecs / 60);
    const s = Math.floor(totalSecs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <>
      {/* Invisible Single YouTube Audio Engine (Zero Video UI, Pure Audio) */}
      <div className="fixed -bottom-96 -right-96 w-10 h-10 opacity-0 pointer-events-none" aria-hidden="true">
        <div id="youtube-audio-player-element" />
      </div>

      {/* Main Glassmorphic Pure Audio Player Dock (Bottom Fixed) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-3 md:px-6 pb-3 pt-2 bg-gradient-to-t from-black/98 via-black/90 to-black/75 backdrop-blur-2xl border-t border-amber-500/40 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Interactive Live Scrubber Progress Bar with Real-time Seeking */}
          <div className="flex items-center gap-3 w-full">
            <span className="text-[11px] font-mono text-amber-200/80 w-10 text-right select-none">
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-1 group flex items-center h-6">
              <input
                id="audio-scrubber"
                type="range"
                min={0}
                max={Math.max(duration, 1)}
                step="0.5"
                value={currentTime}
                onChange={handleSeekChange}
                onMouseDown={handleSeekMouseDown}
                onMouseUp={handleSeekMouseUp}
                onTouchStart={handleSeekMouseDown}
                onTouchEnd={handleSeekMouseUp}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none z-10"
                title="Drag to seek anywhere in the song"
              />
              {/* Progress Glow Indicator Line */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 rounded-lg pointer-events-none transition-all duration-75"
                style={{ width: `${Math.min(100, Math.max(0, (currentTime / (duration || 1)) * 100))}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-amber-200/80 w-10 select-none">
              {formatTime(duration)}
            </span>
          </div>

          {/* Player Core Controls Bar */}
          <div className="flex items-center justify-between gap-2 md:gap-6">
            {/* Left: Track Information & Album Art */}
            <div className="flex items-center gap-3 min-w-0 max-w-[42%] md:max-w-[32%]">
              <div 
                onClick={togglePlay}
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0 border border-amber-500/40 shadow-lg group cursor-pointer"
                title="Click to Play / Pause"
              >
                <img
                  src={currentSong.coverImage}
                  alt={currentSong.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
                    <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-1 h-5 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h4 className="font-bold text-xs md:text-sm text-amber-100 truncate font-devanagari">
                  {currentSong.hindiTitle}
                </h4>
                <p className="text-[11px] text-amber-200/70 truncate font-cinzel">
                  {currentSong.singer}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="hidden sm:inline-block text-[9px] px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
                    {currentSong.tag}
                  </span>
                  <a
                    href={currentSong.youtubeUrl || `https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden inline-flex items-center gap-1 text-[10px] text-red-400 hover:text-red-300 font-bold transition-colors"
                    title="Open directly on YouTube"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    <span>YouTube Link</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className="hidden md:flex p-2 text-white/50 hover:text-rose-400 transition-colors"
                title={liked ? 'Liked' : 'Add to Favorites'}
              >
                <Heart className={`w-4 h-4 ${liked ? 'text-rose-500 fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Center: Main Traversing Controls (Back, Play/Pause, Next) */}
            <div className="flex items-center gap-2 md:gap-5">
              {/* Shuffle Toggle */}
              <button
                onClick={() => setIsShuffle(!isShuffle)}
                className={`hidden sm:flex p-2 rounded-full transition-colors ${
                  isShuffle ? 'text-amber-400' : 'text-white/40 hover:text-white'
                }`}
                title="Shuffle Playlist"
              >
                <Shuffle className="w-4 h-4" />
              </button>

              {/* BACK BUTTON */}
              <button
                id="btn-prev-song"
                onClick={onPrevSong}
                className="p-2.5 md:p-3 rounded-full text-white/80 hover:text-amber-300 hover:bg-white/10 transition-all active:scale-90 cursor-pointer"
                title="Previous Song (पिछला गीत)"
              >
                <SkipBack className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              </button>

              {/* PLAY / PAUSE BUTTON */}
              <button
                id="btn-play-pause"
                onClick={togglePlay}
                className="p-3.5 md:p-4 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 text-black shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer ring-4 ring-amber-400/20"
                title={isPlaying ? 'Pause (रोकें)' : 'Play (गीत बजाएं)'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 md:w-7 md:h-7 fill-current text-stone-950" />
                ) : (
                  <Play className="w-6 h-6 md:w-7 md:h-7 fill-current translate-x-0.5 text-stone-950" />
                )}
              </button>

              {/* NEXT BUTTON */}
              <button
                id="btn-next-song"
                onClick={onNextSong}
                className="p-2.5 md:p-3 rounded-full text-white/80 hover:text-amber-300 hover:bg-white/10 transition-all active:scale-90 cursor-pointer"
                title="Next Song (अगला गीत)"
              >
                <SkipForward className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              </button>

              {/* Loop Toggle */}
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`hidden sm:flex p-2 rounded-full transition-colors ${
                  isLooping ? 'text-amber-400' : 'text-white/40 hover:text-white'
                }`}
                title={isLooping ? 'Looping Active' : 'Enable Loop'}
              >
                <Repeat className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Extra Utilities (Tanpura Drone, Volume, Playlist Drawer) */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Tanpura Drone Ambient Toggle */}
              <button
                onClick={toggleAmbientDrone}
                className={`hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold tracking-wider transition-colors ${
                  ambientDrone
                    ? 'bg-orange-500/30 border-orange-400 text-orange-200 shadow-md shadow-orange-500/20'
                    : 'bg-black/40 hover:bg-black/60 border-white/15 text-white/70 hover:text-white'
                }`}
                title="Toggle Sacred Tanpura Drone Background Harmony"
              >
                <Radio className={`w-3.5 h-3.5 ${ambientDrone ? 'animate-pulse text-orange-400' : ''}`} />
                <span className="hidden sm:inline">तानपुरा</span>
              </button>

              {/* Volume Slider */}
              <div className="md:flex items-center gap-2">
                <button 
                  onClick={toggleMute} 
                  className="text-white/60 hover:text-white p-1"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-amber-300" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Playlist Button */}
              <button
                id="btn-open-playlist"
                onClick={() => setShowPlaylist(true)}
                className="hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                title="Browse Bhajan Playlist"
              >
                <ListMusic className="w-4 h-4" />
                <span className="hidden sm:inline">गीत सूची ({songs.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Playlist Drawer Modal */}
      {showPlaylist && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowPlaylist(false)}
        >
          <div
            className="relative w-full max-w-md h-full bg-gradient-to-b from-[#1f0b03] to-[#0a0301] border-l border-amber-500/40 p-6 shadow-2xl flex flex-col text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-amber-400" />
                <h3 className="font-heading font-bold text-lg text-amber-200">छठ गीत संग्रह ({songs.length} भजन)</h3>
              </div>
              <button
                onClick={() => setShowPlaylist(false)}
                className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto my-4 space-y-3 pr-1 custom-scrollbar">
              {songs.map((song, idx) => {
                const isSelected = idx === currentSongIndex;
                return (
                  <div
                    key={song.id}
                    onClick={() => {
                      onSelectSong(idx);
                      setIsPlaying(true);
                      setShowPlaylist(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer group ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/10'
                        : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={song.coverImage}
                        alt={song.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-amber-500/40 flex items-center justify-center">
                          {isPlaying ? (
                            <div className="flex items-center gap-0.5">
                              <span className="w-1 h-3 bg-white rounded-full animate-bounce" />
                              <span className="w-1 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                              <span className="w-1 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                            </div>
                          ) : (
                            <Play className="w-4 h-4 text-white fill-white" />
                          )}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className={`font-bold text-sm truncate font-devanagari ${
                        isSelected ? 'text-amber-300' : 'text-stone-100 group-hover:text-amber-200'
                      }`}>
                        {song.hindiTitle}
                      </h4>
                      <p className="text-xs text-stone-400 truncate">{song.singer}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-amber-400/80 font-cinzel">{song.tag}</span>
                        <a
                          href={song.youtubeUrl || `https://www.youtube.com/watch?v=${song.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] text-red-400 hover:text-red-300 flex items-center gap-0.5 font-semibold"
                        >
                          <ExternalLink className="w-2.5 h-2.5" />
                          <span>YouTube</span>
                        </a>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-stone-400">{song.duration}</span>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-amber-500/20 text-center">
              <p className="text-xs text-amber-300/80 font-devanagari">
                पद्म भूषण शारदा सिन्हा व लोकगायकों को सादर नमन 🙏
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
