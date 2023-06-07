import React, { CSSProperties, ReactNode } from 'react'
import MaterialButton from '@mui/material/Button';
import './Button.css';

interface ButtonProps {
  href?: string;
  isPreventDefault?: boolean;
  children?: ReactNode;
  variant: 'contained' | 'outlined';
  onClick?: (data?: any) => void;
  target?: '_blank' | '_parent' | '_self' | '_top';
  className?: string;
  style?: CSSProperties;
}

function Button({ href, target, variant, className, children, ...otherBtnProps }: ButtonProps) {

  return (
    <MaterialButton {...otherBtnProps} className={`customBtn ${variant === 'contained' ? 'containedBg' : 'outlinedBg'} ${className}`}>
      <a href={href} target={target}>
        {children}
      </a>
    </MaterialButton>
  );
}

export default Button;