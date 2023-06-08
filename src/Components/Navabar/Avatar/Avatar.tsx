import React, { memo } from 'react'
import avatar from '../../../Asset/Images/avatar.jpg';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
}

const Avatar = memo(function Avatar({ className, src, alt }: AvatarProps) {

    return (
        <div className={`${className} avatar`}>
            <img src={avatar} alt={alt} />
        </div>
    )
});

export default Avatar;