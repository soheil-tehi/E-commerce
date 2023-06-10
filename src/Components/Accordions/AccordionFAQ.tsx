import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function AccordionFAQ() {
    return (
        <Accordion style={{ textAlign: "right" }} >
            <Accordion.Item style={{ marginBottom: "10px" }} eventKey="0">
                <Accordion.Header>نحوه مشاهده دوره‌ چگونه است؟</Accordion.Header>
                <Accordion.Body>
                    این دوره در یک پلیر اختصاصی قابل مشاهده است، بعد از شروع دوره کلید لایسنس اختصاصی در پنل کاربری شما قرار دارد و از طریق راهنمای مشاهده محصولات محافظت شده می‌توانید این دوره را به راحتی ملاحظه نمایید.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item style={{ marginBottom: "10px" }} eventKey="1">
                <Accordion.Header>پشتیبانی دوره‌های نیک آموز به چه صورت است؟</Accordion.Header>
                <Accordion.Body>
                    پس ثبت و نهایی شدن سفارش شما در سایت نیک‌آموز، تیم پشتیبانی طی 24 تا 72 ساعت کاری با شما تماس خواهند گرفت تا فرایند عضو شدن شما در گروه پشتیبانی تلگرامی هر دوره انجام شود.

                    در صورت وجود هر گونه سوال و ابهامی می‌توانید با شماره‌های شرکت تماس حاصل فرمایید و یا از طریق بخش چت پشتیبانی سایت، سوالات خود را مطرح نمایید
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item style={{ marginBottom: "10px" }} eventKey="2">
                <Accordion.Header>آیا امکان برگزاری کلاس‌ها به صورت حضوری وجود دارد؟</Accordion.Header>
                <Accordion.Body>
                    با همه‌گیری بیماری کووید در سراسر دنیا در سال 1398، مجموعه نیک‌آموز برگزاری کلاس‌های حضوری را متوقف کرده و پس از آن تمامی دوره‌های آموزشی به صورت وب‌کستی و آنلاین برگزار شده است.

                    با توجه به بازخورد‌های مثبت دانشجویان، کلاس‌های حضوری صرفاً در صورت برگزاری بوت‌کمپ‌ها و مستر‌کلاس‌ها خواهد بود و دوره‌های آموزشی زین پس به همان صورت آنلاین و وب‌کستی برگزار می‌شود.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item style={{ marginBottom: "10px" }} eventKey="3">
                <Accordion.Header>نحوه اطلاع‌رسانی جشنواره‌های نیک‌آموز چگونه است؟</Accordion.Header>
                <Accordion.Body>
                    تمام جشنواره‌ها از یک الی دو هفته قبل از طریق شبکه‌های اجتماعی اینستاگرام  وبسایت مجموعه  و همچنین ایمیل‌های ارسالی به کاربران اطلاع‌رسانی می‌گردد.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item style={{ marginBottom: "10px" }} eventKey="4">
                <Accordion.Header>صدور فاکتور رسمی چگونه است؟</Accordion.Header>
                <Accordion.Body>
                    در صورت تمایل به دریافت فاکتور رسمی، پیش از خرید خود با واحد فروش مجموعه (17 00 07 91 – 021) تماس حاصل نمایید.

                    شایان ذکر است، امکان صدور فاکتور رسمی پس از خرید آنلاین از سایت مجموعه به هیچ عنوان وجود نخواهد داشت.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionFAQ;