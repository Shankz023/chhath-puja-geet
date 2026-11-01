# Project Overview: Chhath Puja Geet (Lumina Festival)

## 1. Summary
**Chhath Puja Geet** is an immersive, devotional web application dedicated to the ancient Hindu festival of **Chhath Puja** (worshipping the Sun God Surya and Chhathi Maiya). The app blends traditional Bhojpuri folk songs, interactive devotional experiences, and atmosphere-setting audio-visual effects.

---

## 2. Tech Stack & Architecture

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool / Bundler**: Vite 6 (`@vitejs/plugin-react`)
- **Language**: TypeScript (`~5.8.2`)
- **Animation**: Framer Motion (`^12.23.24`)
- **Icons**: Lucide React (`lucide-react`)
- **Audio & Media**:
  - YouTube Iframe Player API for song streaming
  - Web Audio API (custom Tanpura/Bhairav drone synth in `src/services/devotionalSynth.ts`)
  - HTML5 Audio for local sound effects (`sankhSound.mp3`, `splashWaterEffect.mp3`)
- **Styling**: Tailwind CSS / utility classes with rich gradients, glow effects, and responsive layouts
- **AI Integration**: `@google/genai` (prepared for Gemini API integration)

---

## 3. Directory Structure

```text
├── components/                     # Reusable UI & interactive feature components
│   ├── AnimatedDevotionalBackground.tsx # Dynamic sun, river waves, ghat backdrop
│   ├── AudioAtmosphere.tsx         # Ambient sounds (river, bells, conch / shankh, chanting)
│   ├── DevotionalAura.tsx          # Sacred radiating light / particle aura
│   ├── FloatingDiyas.tsx           # Floating diya simulation with prayer/wishes & audio
│   ├── FlyingBirds.tsx             # Animated sunrise/sunset birds across the sky
│   ├── HeroBanner.tsx              # Banner with quotes, festival countdown & arghya times
│   ├── LyricsViewer.tsx            # Multi-language lyrics (Hindi, Transliteration, English meaning)
│   ├── MorningEveningToggle.tsx    # Mode switcher: Morning Arghya / Evening Arghya / Kharna
│   ├── MusicPlayer.tsx             # YouTube-backed audio player, tanpura drone, controls
│   ├── RitualsGuide.tsx            # 4-day festival ritual explanation & mantras
│   └── VirtualArghya.tsx           # Interactive virtual Arghya offering ritual
├── public/
│   └── sounds/                     # Sound assets (sankhSound.mp3, splashWaterEffect.mp3)
├── src/
│   ├── assets/images/              # Wallpapers, festival artwork, rituals photos
│   ├── data/
│   │   └── songsData.ts            # Chhath songs list, lyrics, timestamps, festival quotes
│   └── services/
│       └── devotionalSynth.ts      # Web Audio API Raag Bhairav / Tanpura synth generator
├── App.tsx                         # Main container layout, state management, mode toggles
├── index.css                       # Global styles & font bindings
├── index.html                      # HTML entry with font imports & meta tags
├── index.tsx                       # React DOM root entry
├── types.ts                        # Core TypeScript interfaces (Song, LyricLine, FloatingDiya, etc.)
└── vite.config.ts                  # Vite build configuration
```

---

## 4. Key Features & Modules

### 4.1 Theme Modes (`ThemeMode`)
- **`morning` (Bhorva Arghya / Sunrise)**: Dawn golden hues, rising sun, morning songs.
- **`evening` (Sanjhiya Arghya / Sunset)**: Dusky orange/amber tones, sunset ghat vibe.
- **`kharna`**: Devotional night/kheer prasad atmosphere, starlit glow.

### 4.2 Audio & Music Player
- Streams iconic Chhath Puja geet (Sharda Sinha, Anuradha Paudwal, etc.) via YouTube Iframe API.
- Synchronized lyrics viewing with Hindi text, English transliteration, and English meanings.
- Built-in **Devotional Tanpura Drone** synthesized directly in-browser using Web Audio oscillators.
- Ambient sounds bar: Shankh (Conch), Ganga river water waves, and temple bells.

### 4.3 Interactive Rituals
- **Virtual Arghya (`VirtualArghya.tsx`)**: Allows users to offer milk and water to Surya Dev with traditional mantras, sound effects, and animations.
- **Floating Diyas (`FloatingDiyas.tsx`)**: Devotees can light and float virtual earthen lamps (diyas) with custom prayers and wishes on the sacred river.
- **Rituals Guide (`RitualsGuide.tsx`)**: Day 1 (Nahay Khay) to Day 4 (Usha Arghya) step-by-step traditions, prasad recipes, and significance.

---

## 5. Scripts & Local Development

| Command | Description |
|---|---|
| `npm run dev` | Runs the Vite development server locally |
| `npm run build` | Builds the production bundle to `/dist` |
| `npm run preview` | Previews the production build locally |

---

## 6. Development Notes & Key Dependencies
- Requires `GEMINI_API_KEY` in `.env.local` for AI-powered features.
- YouTube player requires internet access to stream audio/video through embedded player ID.
- Web Audio API requires user interaction before autoplaying audio contexts.

