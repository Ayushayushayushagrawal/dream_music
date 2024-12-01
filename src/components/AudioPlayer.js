import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <PlayerContainer>
      <audio ref={audioRef} src={audioUrl} />
      <PlayButton onClick={togglePlay}>
        {isPlaying ? '⏸️' : '▶️'}
      </PlayButton>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  padding: 1rem;
`;

const PlayButton = styled.button`
  background: #c01111;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

export default AudioPlayer;
