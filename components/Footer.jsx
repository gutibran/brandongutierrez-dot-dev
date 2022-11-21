import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <p>Built by {" "}
            <a className="hover:underline" href="https://github.com/gutibran" noreferrer="true" target="_blank">Brandon Gutierrez
            </a>
            </p>

        </footer>
    )
}