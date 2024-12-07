import React, { useState, useEffect, useRef } from "react";
import { Howl } from "howler";

const BackgroundAudio = () => {
  const soundRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Handle mute/unmute
  const toggleMute = () => {
    if (soundRef.current) {
      soundRef.current.mute(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  // Initialize audio on mount
  useEffect(() => {
    soundRef.current = new Howl({
      src: ["https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"],
      autoplay: true,
      loop: true,
      volume: 0, // Start at 0 volume instead of muted
      crossorigin: "anonymous",
      onload: () => {
        soundRef.current.volume(0.4); // Set to desired volume once loaded
      },
      onloaderror: (id, error) => {
        console.error("Failed to load audio:", error);
      },
    });

    {
      /*
      soundRef.current = new Howl({
      src: ["/public/music/Schneit.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.4, // Default volume set to 50%
      mute: true, // Start muted to avoid autoplay
    });
    */
    }

    soundRef.current.play();

    // Clean up on unmount
    return () => {
      soundRef.current?.stop();
      soundRef.current = null;
    };
  }, []);

  return (
    <div className="audioControl">
      <button
        className="audio-button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default BackgroundAudio;
