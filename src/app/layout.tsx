import type { ReactNode } from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
title: {
    default: "Hello world",
    template: "%s | Apple",
    
},
description: 'fjlsfssdfljsdlkfsdfjd'
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
