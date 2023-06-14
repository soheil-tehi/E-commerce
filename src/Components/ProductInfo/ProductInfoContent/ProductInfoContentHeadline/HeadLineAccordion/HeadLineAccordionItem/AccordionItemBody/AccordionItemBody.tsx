import React, { memo } from 'react';
import { FaGenderless } from 'react-icons/fa';

interface AccordionItemBodyprops {
    descId: number;
    descTitle: string;
}

const AccordionItemBody = memo(function AccordionItemBody({ descTitle }: AccordionItemBodyprops) {

    return (
        <li>
            <FaGenderless className='me-5' />
            {descTitle}
        </li>
    );
});

export default AccordionItemBody;