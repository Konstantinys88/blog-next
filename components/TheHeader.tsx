
import "./theHeader.scss"
import Link from "next/link"
import { Navigation } from './Navigation';

const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
]


const TheHeader = () => {
    return (
        <header className="header">
            <Navigation navLinks={navItems} />
        </header>
    )
}

export { TheHeader }