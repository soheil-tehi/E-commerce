import React, { memo } from 'react'

interface AvatarProps {
    className?: string;
    src: string;
    alt?: string;
}

const Avatar = memo(function Avatar({ className, src, alt }: AvatarProps) {

    return (
        <div className={`${className} avatar`}>
            <img src={src} alt={alt} />
        </div>
    )
});

export default Avatar;