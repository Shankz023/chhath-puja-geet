/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Web Audio API Devotional Synth for Ambient Chhath Atmosphere
class DevotionalSynth {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play sacred Tanpura drone in Sa-Pa (Raag Bhairav / Chhath Scale)
  public startDrone(volume: number = 0.15) {
    if (this.isPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(volume, this.ctx.currentTime + 2);
    this.gainNode.connect(this.ctx.destination);

    // Root notes: C#3 (138.59 Hz), G#3 (207.65 Hz), C#4 (277.18 Hz), C#2 (69.30 Hz)
    const freqs = [69.3, 138.59, 207.65, 277.18, 415.3];

    this.oscillators = freqs.map((f, i) => {
      const osc = this.ctx!.createOscillator();
      const oscGain = this.ctx!.createGain();
      
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f + (Math.random() * 0.4 - 0.2), this.ctx!.currentTime);
      
      // Gentle shimmer LFO
      const lfo = this.ctx!.createOscillator();
      const lfoGain = this.ctx!.createGain();
      lfo.frequency.setValueAtTime(0.2 + i * 0.1, this.ctx!.currentTime);
      lfoGain.gain.setValueAtTime(0.05, this.ctx!.currentTime);
      lfo.connect(oscGain.gain);
      lfo.start();

      oscGain.gain.setValueAtTime(0.2 / freqs.length, this.ctx!.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.gainNode!);
      osc.start();
      return osc;
    });

    this.isPlaying = true;
  }

  public stopDrone() {
    if (!this.isPlaying || !this.ctx || !this.gainNode) return;
    try {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        this.oscillators.forEach(o => {
          try { o.stop(); o.disconnect(); } catch (e) {}
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1600);
    } catch (e) {
      this.isPlaying = false;
    }
  }

  // Play a sacred temple bell strike
  public ringBell() {
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5 Bell
    osc.frequency.exponentialRampToValueAtTime(440, now + 1.5);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 2.5);
  }
}

export const devotionalSynth = new DevotionalSynth();
