import React, { memo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './headLineAccordionItem.css';
import AccordionItemBody from './AccordionItemBody/AccordionItemBody';

interface HeadLineAccordionItemprops {
  eventKey: number;
  title: string;
  descriptionsList: any[];
}

const HeadLineAccordionItem = memo(function HeadLineAccordionItem({ eventKey, title, descriptionsList }: HeadLineAccordionItemprops) {

  return (
    <Accordion.Item eventKey={eventKey.toString()} className='HeadLine-AccordionItem'>
      <Accordion.Header><em className='me-5'>{eventKey})</em> {title}</Accordion.Header>
      <Accordion.Body className='HeadLine-AccordionItem-body'>
        <ul>
          {descriptionsList.map(item => (
            <AccordionItemBody key={item.id} {...item} />
          ))}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
});

export default HeadLineAccordionItem;