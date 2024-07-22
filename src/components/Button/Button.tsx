import { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = HtmlHTMLAttributes<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = (props) => {
  return <button className={`button ${props.className}`}>Button</button>;
};

export default Button;
