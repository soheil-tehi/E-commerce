import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FcApproval } from "react-icons/fc";
import './GoalBox.css';

function GoalBox() {
    return (
        <>
            <div className='goal-box'>
                <div className="goal-icon">
                    <FcApproval />
                </div>
                <div className='goal-info'>
                    <span>دوره پولی و رایگان</span>
                    <span className='goal-info-description'>براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده</span>
                </div>
            </div>
        </>
    )
}

export default GoalBox