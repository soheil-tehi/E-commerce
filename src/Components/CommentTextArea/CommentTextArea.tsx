import React from 'react';
import MyButton from '../Button/Button';
import "./CommentTextArea.css"

function CommentTextArea() {

    const isLogin = false;

    if (!isLogin) {
        return (
            <>
                <div className='comment-logout borderBasic'>
                    <p className='comment-logout-title'>دیدگاهتان را بنویسید </p>
                    <div className='comment-logout-body'>
                        <p>برای نوشتن دیدگاه باید</p>
                        <MyButton variant='contained'>وارد شوید</MyButton>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className='comment-login borderBasic'>
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