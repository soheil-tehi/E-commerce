import React, { ReactNode, memo } from 'react'
import './iconButton.css'

interface IconButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode;
    className?: string;
}

function IconButton({ children, className, ...otherProps }: IconButtonProps) {
    return (
        <a {...otherProps}
            className={`${className} buttonIcon`}>
            {children}
        </a>
    )
}

export default memo(IconButton);