/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
  const { tg } = useTelegram();
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data',
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

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
      <select className="select">
        <option value="physical">Physical</option>
        <option value="legal">Legal</option>
      </select>
    </form>
  );
};

export default Form;
