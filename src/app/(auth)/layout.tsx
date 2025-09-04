import type { ReactNode } from 'react';
import { Metadata } from 'next';
import {NavBar} from '@/components/Navbar';
import '@/app/globals.css'
export const metadata: Metadata = {
title: {
    default: "Book",
    template: "%s | Auth",
    
},
description: 'fjlsfssdfljsdlkfsdfjd'
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
