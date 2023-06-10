import React from 'react';
import { IoLogoYoutube } from 'react-icons/io';

import './AccordionCourses.css';
import { Accordion } from 'react-bootstrap';

function AccordionCourses() {
  return (
    <Accordion style={{ textAlign: "right" }} >
      <Accordion.Item style={{ marginBottom: "10px" }} eventKey="0">
        <Accordion.Header>معرفی دوره</Accordion.Header>
        <Accordion.Body>
          <div className='accordion-course'>
            <div className='accordionCourses-desc'>
              <span className='accordionCourses-desc-count'>1</span>
              <IoLogoYoutube />
              <span>آموزش کتابخانه باحال Aos + استفاده از آن در پروژه لندینگ پیج</span>
            </div>
            <div className='accordion-course-during'>
              20:00
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{ marginBottom: "10px" }} eventKey="1">
        <Accordion.Header>آموزش کتابخانه Sweet Alert 1 – استفاده از آن در پروژه واقعی </Accordion.Header>
        <Accordion.Body>
          <div className='accordion-course'>
            <div className='accordionCourses-desc'>
              <span className='accordionCourses-desc-count'>1</span>
              <IoLogoYoutube />
              <span>
                تشریح لایبرری Sweet Alert 1 از روی داکیومنت
              </span>
            </div>
            <div className='accordion-course-during'>
              17:00
            </div>
          </div>
          <div className='accordion-course'>
            <div className='accordionCourses-desc'>
              <span className='accordionCourses-desc-count'>2</span>
              <IoLogoYoutube />
              <span>
                آموزش کتابخانه Parallax – پیاده سازی پروژه Planets با افکت Parallax
              </span>
            </div>
            <div className='accordion-course-during'>
              33:00
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{ marginBottom: "10px" }} eventKey="2">
        <Accordion.Header>آموزش کتابخانه Lodash </Accordion.Header>
        <Accordion.Body>
          <div className='accordion-course'>
            <div className='accordionCourses-desc'>
              <span className='accordionCourses-desc-count'>1</span>
              <IoLogoYoutube />
              <span>1
                تشریح لایبرری جذاب Lodash از روی داکیومنت + مثال
              </span>
            </div>
            <div className='accordion-course-during'>
              22:00
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{ marginBottom: "10px" }} eventKey="3">
        <Accordion.Header>آموزش کتابخانه Axios – پیاده سازی پروژه CMS به کمک دیتابیس Firebase </Accordion.Header>
        <Accordion.Body>
          <div className='accordion-course'>
            <div className='accordionCourses-desc'>
              <span className='accordionCourses-desc-count'>1</span>
              <IoLogoYoutube />
              <span>
                تشریح لایبرری Axios از روی مستندات گیتهاب
              </span>
            </div>
            <div className='accordion-course-during'>
              48:00
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionCourses