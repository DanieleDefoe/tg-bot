import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';

const App = () => {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
};

export default App;
