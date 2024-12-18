//version: 3
import { useRef, useState } from "react";
import styled from "styled-components";

const SoundcloudPlayer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  z-index: 1;
`;

const PlayPauseButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  text-align: center;
  color: transparent;
  -webkit-text-fill-color: #e1d1db;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid #e1d1db;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    transition: background-color 0.3s ease;
  }
`;

const Soundcloud = () => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const widget = SC.Widget(iframeRef.current);
    if (isPlaying) {
      widget.pause();
    } else {
      widget.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SoundcloudPlayer>
      <iframe
        ref={iframeRef}
        style={{ display: "none" }}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/iniwanko/sets/approachingtheunknown&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false"
      ></iframe>
      <PlayPauseButton onClick={togglePlayPause}>
        {isPlaying ? "pause" : "play"}
      </PlayPauseButton>
    </SoundcloudPlayer>
  );
};

export default Soundcloud;

{
  /*
import React, { useRef, useEffect, useState } from "react";

const Soundcloud = () => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const widget = SC.Widget(iframeRef.current);

    // Update play state when the player starts/stops
    widget.bind(SC.Widget.Events.PLAY, () => setIsPlaying(true));
    widget.bind(SC.Widget.Events.PAUSE, () => setIsPlaying(false));

    // Cleanup listeners on unmount
    return () => {
      widget.unbind(SC.Widget.Events.PLAY);
      widget.unbind(SC.Widget.Events.PAUSE);
    };
  }, []);

  // Handle Play/Pause
  const togglePlayPause = () => {
    const widget = SC.Widget(iframeRef.current);

    if (isPlaying) {
      widget.pause();
    } else {
      widget.play();
    }
  };

  return (
    <div className="soundcloud-player">
      {/* Hidden iframe for SoundCloud widget */
}
{
  /*}
      <iframe
        ref={iframeRef}
        style={{ display: "none" }} // Hide the default player
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/iniwanko/sets/approachingtheunknown&auto_play=false"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
      ></iframe>

      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default Soundcloud;
*/
}

{
  /*
import React, { useRef, useEffect } from "react";

// SoundCloud Embed Component
const Soundcloud = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Load the SoundCloud Widget API
    const SC = window.SC;

    if (iframeRef.current && SC) {
      const widget = SC.Widget(iframeRef.current);

      // Event Listeners for SoundCloud widget
      widget.bind(SC.Widget.Events.READY, () => {
        console.log("SoundCloud Widget is ready");
        widget.setVolume(50); // Set initial volume to 50%
      });

      widget.bind(SC.Widget.Events.PLAY, () => {
        console.log("Playlist is playing");
      });

      widget.bind(SC.Widget.Events.PAUSE, () => {
        console.log("Playlist is paused");
      });

      widget.bind(SC.Widget.Events.FINISH, () => {
        console.log("Playback finished");
      });
    }
  }, []);

  return (
    <div className="audioControl">
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/iniwanko/sets/approachingtheunknown&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      ></iframe>
    </div>
  );
};

export default Soundcloud;
*/
}
