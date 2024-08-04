'use client';

import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import {
  Avatar,
  Checkbox,
  CheckboxGroup,
  NextUIProvider,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import { InputFilter } from './input';
import { JokeCards } from './joke-cards';
import { RadioCategoryGroup } from './radio-group-category';

export function SidebarNav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      label: 'Github',
      href: 'https://github.com/williamelesbao',
      icon: (
        <IconBrandGithub className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/william-elesbao/',
      icon: (
        <IconBrandLinkedin className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <NextUIProvider>
        <div
          className={cn(
            'mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 md:flex-row',
            'h-full', // for your use case, use `h-screen` instead of `h-[60vh]`
          )}
        >
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
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
          {children}
        </div>
      </NextUIProvider>
    </>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image
        className=""
        src={`https://www.svgheart.com/wp-content/uploads/2023/10/creepy-joker_313-430-min.png`}
        alt={`Joker`}
        height={30}
        width={30}
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-black dark:text-white"
      >
        Joke App
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <>
      <Link
        href="#"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
      >
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          src={`https://www.svgheart.com/wp-content/uploads/2023/10/creepy-joker_313-430-min.png`}
          alt={`Joker`}
          height={30}
          width={30}
        />
      </Link>
    </>
  );
};

// export const Dashboard = () => {
//   return (
//     <>
//         <div className="flex flex-1">
//           <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl bg-white p-2 dark:border-neutral-700 dark:bg-neutral-900 md:p-10">
//             <div className="flex gap-2">
//               {/* {[...new Array(3)].map((i) => (
//             <div
//               key={'first-array' + i}
//               className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))} */}
//               <div className="h-auto w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
//                 Category
//                 <RadioCategoryGroup />
//                 {/* if enable so show categories to select */}
//                 <CheckboxGroup
//                   label="Select some one or more categories"
//                   orientation="horizontal"
//                   color="danger"
//                 >
//                   <Checkbox value="programming">Programming</Checkbox>
//                   <Checkbox value="misc">Misc</Checkbox>
//                   <Checkbox value="dark">Dark</Checkbox>
//                   <Checkbox value="pun">Pun</Checkbox>
//                   <Checkbox value="spooky">Spooky</Checkbox>
//                   <Checkbox value="christmas">Christmas</Checkbox>
//                 </CheckboxGroup>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               {/* {[...new Array(3)].map((i) => (
//             <div
//               key={'first-array' + i}
//               className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))} */}
//               <div className="flex w-48 flex-col justify-center rounded-lg bg-gray-100 dark:bg-neutral-800">
//                 <Label>Select a language</Label>
//                 <Select className="max-w-xs" defaultSelectedKeys={['en']}>
//                   <SelectItem
//                     key="en"
//                     startContent={
//                       <Avatar
//                         alt="english"
//                         className="h-6 w-6"
//                         src="https://flagcdn.com/us.svg"
//                       />
//                     }
//                   >
//                     English
//                   </SelectItem>
//                   <SelectItem
//                     key="pt"
//                     startContent={
//                       <Avatar
//                         alt="Brazil"
//                         className="h-6 w-6"
//                         src="https://flagcdn.com/br.svg"
//                       />
//                     }
//                   >
//                     Portuguese
//                   </SelectItem>
//                   <SelectItem
//                     key="de"
//                     startContent={
//                       <Avatar
//                         alt="Germany"
//                         className="h-6 w-6"
//                         src="https://flagcdn.com/de.svg"
//                       />
//                     }
//                   >
//                     German
//                   </SelectItem>
//                 </Select>
//               </div>
//               <div className="h-auto w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
//                 <Label>Select flags to blacklist</Label>
//                 <CheckboxGroup orientation="horizontal" color="danger">
//                   <Checkbox value="nsfw">NSFW</Checkbox>
//                   <Checkbox value="religious">Religious</Checkbox>
//                   <Checkbox value="political">Political</Checkbox>
//                   <Checkbox value="racist">Racist</Checkbox>
//                   <Checkbox value="sexist">Sexist</Checkbox>
//                   <Checkbox value="explicit">Explicit</Checkbox>
//                 </CheckboxGroup>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               {/* {[...new Array(3)].map((i) => (
//             <div
//               key={'first-array' + i}
//               className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))} */}
//               <div
//                 key={'first-array_4'}
//                 className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
//               >
//                 Select at least one joke type:
//               </div>
//               <div
//                 key={'first-array_5'}
//                 className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
//               >
//                 Search for a joke in this ID range:
//               </div>
//               <div
//                 key={'first-array_6'}
//                 className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
//               >
//                 amount of jokes
//               </div>
//             </div>
//             <div className="flex flex-1 gap-2">
//               <InputFilter />
//             </div>
//             <div className="flex h-[50rem]">
//               {/* {[...new Array(1)].map((i) => (
//             <div
//               key={'second-array' + i}
//               className="=items-center flex w-full justify-center rounded-lg bg-transparent dark:bg-neutral-800"
//             >
//               <Image
//                 src={`https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdu86hteesc92zhfae4q2.gif`}
//                 alt="Pikachu dancing"
//                 height={100}
//                 width={300}
//                 className="rounded-lg"
//               ></Image>
//             </div>
//           ))} */}
//               <JokeCards />
//             </div>
//           </div>
//         </div>
//     </>
//   );
// };
