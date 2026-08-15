/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type ThemeMode = 'morning' | 'evening';

export interface LyricLine {
  time?: number; // optional timestamp in seconds
  hindi: string;
  transliteration: string;
  meaning: string;
}

export interface Song {
  id: string;
  title: string;
  hindiTitle: string;
  singer: string;
  duration: string;
  durationSec: number;
  youtubeId: string;
  youtubeUrl?: string;
  embedUrl?: string;
  coverImage: string;
  morningBackground: string;
  eveningBackground: string;
  description: string;
  tag: 'Morning Arghya' | 'Evening Arghya' | 'Kharna' | 'Nahay Khay' | 'Folk Classic';
  lyrics: LyricLine[];
  ragaOrMood: string;
}

export interface FloatingDiya {
  id: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (60 - 95)
  speed: number;
  scale: number;
  wish: string;
  senderName: string;
  glowColor: string;
  flameSize: number;
  wobbleOffset: number;
}

export interface RitualDay {
  dayNumber: number;
  title: string;
  hindiTitle: string;
  dayType: string;
  description: string;
  rituals: string[];
  prasad: string[];
  significance: string;
  mantra: string;
  mantraHindi: string;
}
