// src/components/MainContent.js
import React from 'react';
import styled from 'styled-components';
import { musicData } from '../data';
import michael from '../assets/michael.jpg';
import { FaPlay,  FaHeart, FaEllipsisH } from 'react-icons/fa';
import MusicList from './MusicList';
import NowPlaying from './NowPlaying';

const MainContentContainer = styled.main`
  margin-left: 250px; /* Same as sidebar width */
  padding: 2rem;
  background-color: #121212;
  color: #fff;
  display: flex;
  height: 100vh;
`;

const ArtistHero = styled.div`
  background-image: url(${michael});
  background-size: cover;
  background-position: center;
  height: 250px;
  border-radius: 1rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ArtistInfo = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
  color: white;
`;

const ArtistName = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

const ArtistDetails = styled.p`
  font-size: 0.9rem;
  margin: 0.2rem 0;
`;

const VerifiedArtist = styled.span`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #2196F3;
    margin-bottom: 0.5rem;

    svg {
        margin-right: 0.3rem;
        fill: #2196F3;
    }
`;

const PopularTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
  }

  a {
    color: #aaa;
    text-decoration: none;
    font-size: 0.9rem;
    &:hover {
      color: #fff;
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1; /* Take remaining space */
  margin-right: 2rem;
  overflow-y: auto; /* Enable vertical scroll if content overflows */
  max-height: calc(100vh - 4rem); /* Subtract padding top and bottom */
  padding-right: 1rem; /* Add some padding to prevent content from touching scrollbar */

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const NowPlayingWrapper = styled.div`
  width: 300px;
`;

const MainContent = () => {
  const nowPlayingTrack = musicData[1];
  return (
    <MainContentContainer>
      <ContentWrapper>
      <ArtistHero>
        <ArtistInfo>
                <VerifiedArtist>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10.0001 2.25L4.75008 7.5L2.00008 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.00008 10.5C8.07115 10.5 9.75008 8.82107 9.75008 6.75C9.75008 4.67893 8.07115 3 6.00008 3C3.92902 3 2.25008 4.67893 2.25008 6.75C2.25008 8.82107 3.92902 10.5 6.00008 10.5Z" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                    Verified Artist
                </VerifiedArtist>
          <ArtistName>Michael Jackson</ArtistName>
          <ArtistDetails>27,852,501 monthly listeners</ArtistDetails>
        </ArtistInfo>
      </ArtistHero>
      <PopularTitle>
        <h2>Popular</h2>
        <a href="/">See All</a>
      </PopularTitle>
      <MusicList musicData={musicData} />
      </ContentWrapper>
      <NowPlayingWrapper>
        <NowPlaying track={nowPlayingTrack} />
      </NowPlayingWrapper>
    </MainContentContainer>
  );
};

export default MainContent;