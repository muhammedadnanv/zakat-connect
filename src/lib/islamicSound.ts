// Islamic-inspired pleasant chime sound using Web Audio API
export const playIslamicChime = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

    const playTone = (freq: number, startTime: number, duration: number, gain: number) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2000, startTime);

      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(gain, startTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    // A gentle ascending chime pattern (pentatonic scale - peaceful)
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      playTone(freq, now + i * 0.18, 1.2 - i * 0.15, 0.12);
    });

    // Soft sustained tone underneath
    playTone(261.63, now, 2.0, 0.06); // C4 pad

    setTimeout(() => ctx.close(), 3000);
  } catch {
    // Audio not supported, silently ignore
  }
};
