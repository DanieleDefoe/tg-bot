import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

const App = () => {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
};

export default App;
