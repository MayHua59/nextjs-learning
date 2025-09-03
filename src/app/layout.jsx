
export const metadata = {
    title: 'Nextjs',
    description: "Tutorial"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
            {children}
        
      </body>
    </html>
  );
}