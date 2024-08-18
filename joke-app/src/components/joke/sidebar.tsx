'use client';

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';

export function SidebarNav() {
  const links = [
    {
      label: 'Github',
      href: 'https://github.com/williamelesbao',
      icon: (
        <IconBrandGithub className="h-5 w-5 flex-shrink-0 text-neutral-200" />
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/william-elesbao/',
      icon: (
        <IconBrandLinkedin className="h-5 w-5 flex-shrink-0 text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 bg-black/80 backdrop-blur-lg">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: `William Elesbão`,
              href: 'https://github.com/williamelesbao',
              icon: (
                <Image
                  src="/profile.jpeg"
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="flex items-center justify-center">
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-violet-900 via-indigo-900 to-pink-500 p-1">
          <div
            className="relative h-full w-full rounded-full bg-white"
            style={{
              backgroundImage: `url('https://www.svgheart.com/wp-content/uploads/2023/10/creepy-joker_313-430-min.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-white"
      >
        Joke App
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <>
      <Link href="#" className="relative z-20 flex items-center">
        <div className="flex items-center justify-center">
          <div className="relative h-7 w-7 rounded-full bg-gradient-to-br from-violet-900 via-indigo-900 to-pink-500 p-[0.2rem]">
            <div
              className="relative h-full w-full rounded-full bg-white"
              style={{
                backgroundImage: `url('https://www.svgheart.com/wp-content/uploads/2023/10/creepy-joker_313-430-min.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </Link>
    </>
  );
};
