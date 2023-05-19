import React from 'react';
import { HiHome } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineTable, AiFillBell } from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'DashBoard',
    Path: '/',
    icon: <HiHome size={25} className='text-white' />,
    cName: 'nav-text',
  },
  {
    title: 'Profile',
    Path: '/',
    icon: <CgProfile size={25} className='text-white' />,
    cName: 'nav-text',
  },
  {
    title: 'Table',
    Path: '/',
    icon: <AiFillBell size={25} className='text-white' />,
    cName: 'nav-text',
  },
  {
    title: 'Notification',
    Path: '/',
    icon: <AiOutlineTable />,
    cName: 'nav-text',
  },
];
