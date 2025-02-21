import React, { useState, useRef } from "react";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const playlist = [
    { title: "Song 1", src: "/audio/00_introduction.mp3" },
    { title: "Song 2", src: "/audio/01_exercise1.mp3" },
  ];

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>{playlist[currentTrack].title}</h3>
      <audio
        ref={audioRef}
        controls
        src={playlist[currentTrack].src}
        onEnded={playNext}
      />
      <div style={{ marginTop: "10px" }}>
        {playlist.map((track, index) => (
          <button
            key={index}
            onClick={() => setCurrentTrack(index)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              background: index === currentTrack ? "#0078D4" : "#ddd",
              color: index === currentTrack ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            {track.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;
