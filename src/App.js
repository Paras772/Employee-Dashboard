import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Dashboard from './components/Dashboard';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f2f5;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Dashboard />
    </AppContainer>
  );
};

export default App;
