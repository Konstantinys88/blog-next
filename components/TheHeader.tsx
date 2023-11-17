import "./theHeader.scss"
import Link from "next/link"


const TheHeader = () => {
    return (
        <header className="header">
            <Link className="header__link" href="/">HOME</Link>
            <Link className="header__link" href="/blog">BLOG</Link>
            <Link className="header__link" href="/about">ABOUT</Link>
        </header>
    )
}

export { TheHeader }