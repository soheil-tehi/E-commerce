import React, { CSSProperties, ReactNode } from 'react'
import MaterialButton from '@mui/material/Button';
import './Button.css';

interface ButtonProps {
  children?: ReactNode;
  variant: 'contained' | 'outlined';
  onClick?: (data?: any) => void;
  className?: string;
  style?: CSSProperties;
}

function Button({ variant, className, children, ...otherBtnProps }: ButtonProps) {

  return (
    <MaterialButton {...otherBtnProps} className={`customBtn ${variant === 'contained' ? 'containedBg' : 'outlinedBg'} ${className}`}>
        {children}
    </MaterialButton>
  );
}

export default Button;