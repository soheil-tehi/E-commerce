import React from 'react';
import MyButton from '../Button/Button';
import "./CommentTextArea.css"

function CommentTextArea() {

    const isLogin = true;

    if (!isLogin) {
        return (
            <>
                <div>
                    <p>لطفا برای ثبت دیدگاه ابتدا وارد حساب کاربری خود شوید.</p>
                </div>
            </>
        )
    } else {
        return (
            <div className='comment borderBasic'>
                <div className='comment-info'>
                    <p>ثبت دیدگاه</p>
                    <textarea className='borderBasic' id="w3review" name="w3review" rows={4} cols={100} />
                </div>
                <MyButton variant='contained'>ارسال دیدگاه</MyButton>
            </div>
        )
    }
}

export default CommentTextArea