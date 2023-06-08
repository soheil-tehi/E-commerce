import React, { memo } from 'react'
import './logo.css'
import logoImg from '../../../Asset/Images/logo.png';

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
}

const Logo = memo(function Logo({ className, ...otherProps }: LogoProps) {

    return (
        <a {...otherProps} className={`${className} logoWrapper`}>
            <img src={logoImg} alt="logo" />
        </a>
    )
});

export default Logo;