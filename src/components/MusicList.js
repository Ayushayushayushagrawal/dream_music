// src/components/MusicList.js
import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';

const MusicTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    text-align: left;
    padding: 0.8rem;
    border-bottom: 1px solid #333;
  }

  th {
    color: #aaa;
    font-weight: normal;
  }

  td {
      vertical-align: middle;
  }
`;

const PlayIcon = styled(FaPlay)`
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    color: #c01111;
  }
`;

const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #aaa;
  margin-left: 1rem;
  &:hover {
      color: #fff;
  }
`;

const TrackImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 1rem;
`;

const TrackTitle = styled.div`
  display: flex;
  align-items: center;
`;

const MusicList = ({ musicData }) => {
  return (
    <MusicTable>
      <thead>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>PLAYING</th>
          <th>TIME</th>
          <th>ALBUM</th>
        </tr>
      </thead>
      <tbody>
        {musicData.map((track, index) => (
          <tr key={track.id} className={index === 1 ? 'active-track' : ''}>
            <td>{track.id}</td>
            <td>
              <TrackTitle>
                <TrackImage src={track.image} alt={track.title} />
                {track.title}
              </TrackTitle>
            </td>
            <td>{track.playing}</td>
            <td>{track.time}</td>
            <td>{track.album}</td>
          </tr>
        ))}
      </tbody>
    </MusicTable>
  );
};

export default MusicList;