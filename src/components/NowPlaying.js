// src/components/NowPlaying.js
import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause, FaHeart, FaStepBackward, FaStepForward, FaShare } from 'react-icons/fa';import { useState, useRef, useEffect } from 'react';

const NowPlayingContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 1rem;
  padding: 1.5rem;
  position: sticky;
  top: 2rem;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TrackImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const TrackDetails = styled.div`
  h3 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    color: #aaa;
    margin: 0.2rem 0;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    color: #888;
    cursor: default;
  }
`;

const BigPlayButton = styled(ControlButton)`
    font-size: 1.5rem;
    padding: 0.8rem;
    background-color: #c01111;
    &:hover {
        background-color: #a30e0e;
    }
`;

const TimeLine = styled.div`
  height: 4px;
  background-color: #333;
  border-radius: 2px;
  margin: 0.5rem 0;
  cursor: pointer;
  position: relative;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #c01111;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Time = styled.div`
  font-size: 0.8rem;
  color: #aaa;
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const ActionButton = styled(ControlButton)`
    margin-right: 0.5rem;
`;

const NowPlaying = ({ track }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(258);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;

    setCurrentTime(newTime);
    if (audioRef.current) {
        audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <NowPlayingContainer>
      <audio ref={audioRef} src="" style={{ display: 'none' }} />
      <TrackInfo>
        <TrackImage src={track.image} alt={track.title} />
        <TrackDetails>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
        </TrackDetails>
      </TrackInfo>
      <TimeLine ref={progressRef} onClick={handleProgressClick}>
          <Progress style={{ width: `${(currentTime / duration) * 100}%` }} />
      </TimeLine>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Time>{formatTime(currentTime)}</Time>
        <Time>{formatTime(duration)}</Time>
      </div>
      <Controls>
        <ActionButton>
            <FaHeart />
        </ActionButton>
          <ActionButton disabled={currentTime === 0} onClick={() => setCurrentTime(0)}>
              <FaStepBackward />
          </ActionButton>
        <BigPlayButton onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </BigPlayButton>
          <ActionButton onClick={() => setCurrentTime(duration)}>
                <FaStepForward />
            </ActionButton>
          <ActionButton>
            <FaShare />
          </ActionButton>
      </Controls>
    </NowPlayingContainer>
  );
};

// Remove the duplicate export default statement
export default NowPlaying;