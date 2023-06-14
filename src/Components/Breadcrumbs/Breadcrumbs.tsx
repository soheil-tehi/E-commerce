import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './Breadcrumbs.css'

interface BreadcrumbsProps {
  secondPath: string,
  secondTitle: string,
  endTitle: string,
}

function Breadcrumbs({ secondPath, secondTitle, endTitle }: BreadcrumbsProps) {
  return (
    <div className='Breadcrumbs-wrapper borderBasic'>
      <div className='Breadcrumbs-logo'>
        <AiFillHome />

      </div>

      <Breadcrumb className='Breadcrumb-custom'>
        <Breadcrumb.Item >
          <Link to="/">
            خانه

          </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          <Link to={secondPath}>
            {secondTitle}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {endTitle}
        </Breadcrumb.Item>
      </Breadcrumb >
    </div>

  )
}

export default Breadcrumbs;