import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      App
      <button onClick={onClose}>Exit</button>
    </div>
  );
};

export default App;
