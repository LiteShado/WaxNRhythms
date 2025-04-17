// src/hooks/useAudio.js
import { Howl } from 'howler';
import { useEffect, useRef } from 'react';

export default function useAudio(src, options = {}) {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      ...options,
    });

    return () => {
      soundRef.current.unload(); // Clean up when component unmounts
    };
  }, [src]);

  const play = () => soundRef.current?.play();
  const pause = () => soundRef.current?.pause();
  const stop = () => soundRef.current?.stop();

  return { play, pause, stop };
}