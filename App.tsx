import React from 'react';
import { ThemeProvider } from './src/themes/ThemeContext';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <WelcomeScreen />
    </ThemeProvider>
  );
};
export default App;
