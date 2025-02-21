import React, { useState, useRef } from "react";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    { title: "Introduction", src: "/audio/00_introduction.mp3" },
    { title: "Exercise 1", src: "/audio/01_exercise1.mp3" },
    { title: "Exercise 2", src: "/audio/02_exercise2.mp3" },
    { title: "Exercise 3", src: "/audio/03_exercise3.mp3" },
  ];

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>{playlist[currentTrack].title}</h3>
      <audio
        ref={audioRef}
        controls
        src={playlist[currentTrack].src}
        onEnded={playNext}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Scrollable Playlist */}
      <div
        style={{
          maxHeight: "150px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          background: "#f9f9f9",
        }}
      >
        {playlist.map((track, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrack(index)}
            style={{
              padding: "10px",
              margin: "5px 0",
              cursor: "pointer",
              background: index === currentTrack ? "#8C6F42" : "#fff",
              color: index === currentTrack ? "#fff" : "#000",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            {track.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;
