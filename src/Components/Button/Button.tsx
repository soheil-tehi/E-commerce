import React, { CSSProperties, ReactNode, memo } from 'react'
import Button from 'react-bootstrap/Button';
import './Button.css';

interface ButtonProps {
  children?: ReactNode;
  variant: 'contained' | 'outlined' | 'simple';
  onClick?: (data?: any) => void;
  className?: string;
  style?: CSSProperties;
}

const MyButton =  memo(function MyButton({ variant, className, children, ...otherBtnProps }: ButtonProps) {

  return (
    <Button
      {...otherBtnProps}
      className={`${variant !== 'simple' ? variant === 'contained' ? 'sweepToLeft containedBg' : 'sweepToLeft outlinedBg' : ''} ${className} btn`}>
      {children}
    </Button>
  );
});

export default MyButton;