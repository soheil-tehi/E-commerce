import { ArticleInfo, Category, CourseInfo, MainPage, FrontProducts } from './Pages/index';

const routes = [
    { path: "/", element: < MainPage /> },
    { path: "/:courseInfo/:courseid", element: < CourseInfo /> },
    { path: "/category/:categoryName", element: < Category /> },
    { path: "/articleInfo/articleInfoName", element: < ArticleInfo /> },
    { path: "/frontproducts", element: < FrontProducts /> },
]

export default routes;