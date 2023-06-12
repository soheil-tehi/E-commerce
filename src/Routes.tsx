import { ArticleInfo, Category, CourseInfo, MainPage, FrontProducts, ContactUs } from './Pages/index';

const routes = [
    { path: "/", element: < MainPage /> },
    { path: "/:courseInfo/:courseid", element: < CourseInfo /> },
    { path: "/category/:categoryName", element: < Category /> },
    { path: "/articleInfo/articleInfoName", element: < ArticleInfo /> },
    { path: "/frontproducts", element: < FrontProducts /> },
    { path: "/contact-us", element: < ContactUs /> },
]

export default routes;