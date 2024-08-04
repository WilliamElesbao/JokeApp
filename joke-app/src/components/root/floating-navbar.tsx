'use client';

import {
  IconBrandGithub,
  IconHome
} from '@tabler/icons-react';
import { FloatingNav } from '../ui/floating-navbar';
export function FloatingNavi() {
  const navItems = [
    // {
    //   name: 'Home',
    //   link: '/',
    //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
    {
      name: 'About',
      link: 'https://github.com/williamelesbao',
      icon: (
        <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-auto">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
