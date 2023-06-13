import React from 'react'
import MiniMenuItem from './MiniMenuItem'

//get data from DB
const APIFront = [
    { id: 1, title: "آموزش 20 کتابخانه کار" },
    { id: 2, title: "آموزش 20 کتابخانه کار" },
    { id: 3, title: "آموزش 20 کتابخانه کار" },
    { id: 4, title: "آموزش 20 کتابخانه کار" },
    { id: 5, title: "آموزش 20 کتابخانه کار" },
    { id: 6, title: "آموزش 20 کتابخانه کار" },
    { id: 7, title: "آموزش 20 کتابخانه کار" },
    { id: 8, title: "آموزش 20 کتابخانه کار" },
    { id: 9, title: "آموزش 20 کتابخانه کار" },
]
const APIback = [
    { id: 1, title: "node api ", },
    { id: 2, title: "node api ", },
    { id: 3, title: "node api ", },
    { id: 4, title: "node api ", },
    { id: 5, title: "node api ", },
    { id: 6, title: "node api ", },
    { id: 7, title: "node api ", },
    { id: 8, title: "node api ", },
    { id: 9, title: "node api ", },
]
const APISecurity = [
    { id: 1, title: "security ", },
    { id: 2, title: "security ", },
    { id: 3, title: "security ", },
    { id: 4, title: "security ", },
    { id: 5, title: "security ", },
    { id: 6, title: "security ", },
    { id: 7, title: "security ", },
    { id: 8, title: "security ", },
    { id: 9, title: "security ", },
]


function ArticleInfo() {
    return (
        <>
            <p>دوره های آموزشی</p>
            <MiniMenuItem title={"فرانت اند"} coursePath={"frontEnd"} allData={APIFront} />
            <MiniMenuItem title={"بک اند"} coursePath={"backEnd"} allData={APIback} />
            <MiniMenuItem title={"امنیت"} coursePath={"security"} allData={APISecurity} />

        </>
    )
}

export default ArticleInfo