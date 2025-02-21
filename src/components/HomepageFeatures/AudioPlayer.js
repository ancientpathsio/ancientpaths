import React, { useState, useRef, useEffect } from "react";

const AudioPlayer = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const playlist = [
    { title: "Song 1", src: "/audio/00_introduction.mp3" },
    { title: "Song 2", src: "/audio/01_exercise1.mp3" },
  ];

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  if (!isClient) {
    return null;
  }

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

      <div
        style={{
          maxHeight: "150px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          background: "#0078D4",
          textAlign: "left",
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
              background: index === currentTrack ? "#000" : "#fff",
              color: index === currentTrack ? "#fff" : "#000",
              borderRadius: "5px",
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
