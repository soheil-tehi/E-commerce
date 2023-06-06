import { ArticleInfo, Category, CourseInfo, MainPage } from './Pages/index';

const routes = [
    { path: "/", element: < MainPage /> },
    { path: "/courseInfo/:courseName", element: < CourseInfo /> },
    { path: "/category/:categoryName", element: < Category /> },
    { path: "/articleInfo/articleInfoName", element: < ArticleInfo /> },
]

export default routes;