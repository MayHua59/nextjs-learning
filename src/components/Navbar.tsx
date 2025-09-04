// src/components/NavBar.tsx
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Navbar.module.css'

const navLinks = [
    {
        name: "Login", href: "/login"
    },
    {
        name: "Register", href: "/register"
    },
    {
name: "Forgot Password", href: "/forgot-password"
    }
]

export  function NavBar() {
    const pathName = usePathname();
    console.log(pathName)
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}>
        {navLinks.map(navLink => {
            const isActive = pathName === navLink.href || (pathName.startsWith(navLink.href) && navLink.href !== "/")
              return (
                  <li
                    key={navLink.name}
                    className={isActive ? styles.navActive : styles.navInactive}
                  >
                    <Link href={navLink.href}>{navLink.name}</Link>
                  </li>
              )
        })}
      </ul>
    </nav>
  );
}