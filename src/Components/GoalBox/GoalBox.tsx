import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FcApproval } from "react-icons/fc";
import './GoalBox.css';

interface GoalBoxProps {
    title: string,
    desc: string,
}

function GoalBox({ title, desc }: GoalBoxProps) {
    return (
        <>
            <div className='goal-box'>
                <div className="goal-icon">
                    <FcApproval />
                </div>
                <div className='goal-info'>
                    <span>{title}</span>
                    <span className='goal-info-description'>{desc}</span>
                </div>
            </div>
        </>
    )
}

export default GoalBox