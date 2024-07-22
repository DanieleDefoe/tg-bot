import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps & PropsWithChildren> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
