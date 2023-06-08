import React, { memo } from 'react'
import './logo.css'

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
}

const Logo = memo(function Logo({ className, ...otherProps }: LogoProps) {

    return (
        <a {...otherProps} className={`${className} logoWrapper`}>
            <img src="images/logo.png" alt="logo" />
        </a>
    )
});

export default Logo;