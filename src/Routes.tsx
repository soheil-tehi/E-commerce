import {
    ArticleInfo, Category, CourseInfo, MainPage, FrontProducts, ContactUs, Articles, Login, Register
} from './Pages/index';

const routes = [
    { path: "/", element: < MainPage /> },
    { path: "/:courseInfo/:courseid", element: < CourseInfo /> },
    { path: "/category/:categoryName", element: < Category /> },
    // { path: "/articleInfo/articleInfoName", element: < ArticleInfo /> },
    { path: "/frontproducts", element: < FrontProducts /> },
    { path: "/contact-us", element: < ContactUs /> },
    { path: "/articles", element: < Articles /> },
    { path: "/articles/:id", element: < ArticleInfo /> },
    { path: "/login", element: < Login /> },
    { path: "/Register", element: < Register /> },
]

export default routes;