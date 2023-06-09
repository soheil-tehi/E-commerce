import React, { CSSProperties, ReactNode, memo } from 'react'
import Button from 'react-bootstrap/Button';
import './Button.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children?: ReactNode;
  variant: 'contained' | 'outlined' | 'simple';
  onClick?: (data?: any) => void;
  className?: string;
  style?: CSSProperties;
}

const MyButton =  memo(function MyButton({ variant, className, children, ...otherBtnProps }: ButtonProps) {

  return (
    <a
      {...otherBtnProps}
      className={`${variant !== 'simple' ? variant === 'contained' ? 'sweepToLeft containedBg' : 'sweepToLeft outlinedBg' : ''} ${className} btn`}>
      {children}
    </a>
  );
});

export default MyButton;