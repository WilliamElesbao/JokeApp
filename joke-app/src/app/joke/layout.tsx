import { SidebarNav } from '@/components/joke/sidebar';
import { NextUIProvider } from '@nextui-org/system';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <SidebarNav>
        <section className="bg-black">{children}</section>
      </SidebarNav>{' '}
    </NextUIProvider>
  );
}
