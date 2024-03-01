import {
    createBrowserRouter
} from "react-router-dom";
import App from "./App";
import Popular from "./components/Popular";
import Toprated from "./components/Toprated";
import Upcomming from "./components/Upcoming";
import Pagenotfound from "./components/Pagenotfound";
import Searchbox from "./components/Searchbox";
import Singlemovie from "./components/Singlemovie";
import Fakestore from "./components/Fakestore";
import Fakestore1 from "./components/Fakestore1";
import Form1 from "./components/Form1";
import Formik from "./components/Formik";
import Comp1 from "./components/Comp1";
import Class1 from "./components/Class1";
import Class2 from "./components/Class2";
import Class3 from "./components/Class3";
import Class4 from "./components/Class4";
import Class5 from "./components/Class5";
import Class6 from "./components/Class6";
import Class7 from "./components/Class7";
import Class8 from "./components/Class8";
import Class9 from "./components/Class9";
import QrCode from './components/Qrcode'
import ClassA from "./components/ClassA";
import Show from "./components/Show";
import Add from "./components/Add";
import Edit from "./components/Edit";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Popular />
            },
            {
                path: 'top-rated-movies',
                element: <Toprated />
            },
            {
                path: 'upcoming-movies',
                element: <Upcomming />
            },
            {
                path: '*',
                element: <Pagenotfound />
            },
            {
                path: 'search-box/:moviename',
                element: <Searchbox />
            },
            {
                path: '/single-movie/:movieid',
                element: <Singlemovie />
            },
            {
                path: 'fakestore',
                element: <Fakestore />
            },
            {
                path: 'allproducts',
                element: <Fakestore1 />
            },
            {
                path: 'form',
                element: <Form1 />
            },
            {
                path: 'Formik',
                element: <Formik />
            },
            {
                path: 'redux',
                element: <Comp1 />
            },
            {
                path: 'class1',
                element: <Class1 uname='ajay' uage='20' />
            },
            {
                path: 'class2',
                element: <Class2 />
            },
            {
                path: 'class3',
                element: <Class3 />
            },
            {
                path: 'class4',
                element: <Class4 />
            },
            {
                path: 'class5',
                element: <Class5 />
            },
            {
                path: 'class6',
                element: <Class6 />
            },
            {
                path: 'class7',
                element: <Class7 />
            },
            {
                path: 'class8',
                element: <Class8 />
            },
            {
                path: 'Qrcode',
                element: <QrCode />
            },
            {
                path: 'props drilling',
                element: <ClassA />
            },
            {
                path: 'Show',
                element: <Show />
            },
            {
                path: 'add',
                element: <Add />
            },
            {
                path: 'edit/:userid',
                element: <Edit />
            }
        ]
    }
])


export default router