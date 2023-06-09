import React from 'react';

const EllipsisPraghraph = React.memo(function EllipsisPraghraph({ className, children, ...otherProps }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p {...otherProps} className={`${className} multiline-ellipsis text-end`}>
            {children}
        </p>
    )
});

export default EllipsisPraghraph;