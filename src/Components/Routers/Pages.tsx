import { RoutesString } from './routesString';
import Home from '../Pages/Home/Home';



const pages = [
    /* home */
    {
        path: RoutesString.Home,
        component: Home,
        exact: true,
    },
];

export default pages;