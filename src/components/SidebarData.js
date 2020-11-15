import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons  from "react-icons/fc";
import { MdFolderShared } from "react-icons/md";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FcIcons.FcHome />,
        cName: 'nav-text home'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FcIcons.FcBusinessman />,
        cName: 'nav-text about'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <AiIcons.AiFillFilePdf />,
        cName: 'nav-text resume'
    },
    {
        title: 'Portfolios',
        path: '/portfolios',
        icon: <MdFolderShared />,
        cName: 'nav-text portfolios'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FcIcons.FcContacts />,
        cName: 'nav-text contact'
    },
]