import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import { Outlet } from '@tanstack/react-router';

const App = () => {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div>
      <Header />
      <Button onClick={onToggleButton}>Toggle</Button>
      <Outlet />
    </div>
  );
};

export default App;
