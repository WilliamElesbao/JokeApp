'use client';

import { SidebarNav } from '@/components/joke/sidebar';
import { NextUIProvider } from '@nextui-org/system';
import { cn } from '@nextui-org/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider className="">
        <div
          className={cn(
            'mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md bg-black md:h-screen md:min-w-full md:flex-row',
            'h-full', // for your use case, use `h-screen` instead of `h-[60vh]`
          )}
        >
          <SidebarNav />
          <div className="">{children}</div>
        </div>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
