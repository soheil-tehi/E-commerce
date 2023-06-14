import React, { ReactNode, memo } from 'react';
import './jumbotron.css'


interface JumbotronProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}

const Jumbotron = memo(function Jumbotron({ children, className, ...otherProps }: JumbotronProps) {

    return (
        <div {...otherProps} className={`${className ? className : ''} Jumbotron-custom mt-4 p-5 rounded-3`} >
            {children}
        </div>
    )
})

export default Jumbotron;