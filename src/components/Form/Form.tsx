import { FormEvent, useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
  const { tg } = useTelegram();
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject, tg]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data',
    });
  }, [tg.MainButton]);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street, tg.MainButton]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3>Input your data</h3>
      <input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="input"
        placeholder="Country"
      />
      <input
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        className="input"
        placeholder="Street"
      />
      <select className="select" onChange={(e) => setSubject(e.target.value)}>
        <option value="physical">Physical</option>
        <option value="legal">Legal</option>
      </select>
    </form>
  );
};

export default Form;
