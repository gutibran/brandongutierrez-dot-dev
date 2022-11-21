import Link from "next/link";
import Image from "next/image";
import { SiCanonical } from "react-icons/si"

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <Link href="/">
                <Image
                    className="rounded-lg"
                    src="/images/icon.webp" 
                    alt="Brandon Gutierrez icon"
                    height="50"
                    width="50"
                />
            </Link>
            <nav>
                <ul className="flex">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/public/brandonGutierrezResume.pdf">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}