// src/App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import GlobalStyle from './styles/GlobalStyle';

const AppContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <MainContent />
      </div>
    </AppContainer>
  );
}

export default App;