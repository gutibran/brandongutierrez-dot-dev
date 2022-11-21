import Image from "next/image"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { GrDocumentText } from "react-icons/gr"
import seo from "../seo.config.js"

export default function Index() {
    return (
        <>
            <Head>
                <title>{seo.siteName}</title>
                <meta name="description" content="Brandon Gutierrez's portfolio website." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mx-6 my-24 grid lg:mx-32 xl:mx-48">
                <section id="about" className="h-screen">
                    <h1 className="text-5xl text-center">Brandon Gutierrez</h1>
                    <h2 className="text-2xl text-center underline p-4">I work with technology efficiently and effectively.</h2>
                    <Image
                        className="rounded-lg m-auto my-4 block border-2 border-yellow-300 drop-shadow-lg"
                        src="/images/me.webp"
                        alt="Brandon Gutierrez eating beef liver"
                        width="250"
                        height="250"
                    />
                    <p className="my-8 md:mx-24 lg:mx-44 2xl:mx-96 leading-6 font-mono">I am currently studying for a B.S. in Electrical Engineering at Texas State University in San Marcos, TX. I dabble in software engineering and cybersecurity. I have built some projects to apply what I've learned from self studying various topics within web development, computer science, computer networking, and cybersecurity. I am interested in robotics and artificial intelligence. It is what I aim on specializing in. If you would like to contact me, send a DM via LinkedIn, send me an email, or call me if you can find my number on this site. I like competitive programming and participating in CTFs on the internet on sites such as TryHackMe, HackTheBox, PicoCTF, LeetCode, and CodeChef. I am working on making this site better. The image is highly compressed.</p>
                    <ul className="flex gap-4 flex-wrap justify-center items-center">
                        <li>
                            <a className="flex flex-row justify-center items-center border-2 border-gray-800 gap-2 w-32 p-2 hover:bg-yellow-300" href="https://linkedin.com/in/branguti" target="_blank" noreferrer="true">
                                <AiFillLinkedin className="h-8 w-8" />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-row justify-center items-center border-2 border-gray-800 gap-2 w-32 p-2 hover:bg-yellow-300" href="https://github.com/gutibran" target="_blank" noreferrer="true">
                                <AiFillGithub className="h-8 w-8" />
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-row justify-center items-center border-2 border-gray-800 gap-2 w-32 p-2 hover:bg-yellow-300" href="mailto:bran09123@gmail.com" target="_blank" noreferrer="true">
                                <AiOutlineMail className="h-8 w-8" />
                                <span>E-mail</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-row justify-center items-center border-2 border-gray-800 gap-2 w-32 p-2 hover:bg-yellow-300" href="/brandonGutierrezResume.pdf" target="_blank" noreferrer="true">
                                <GrDocumentText className="h-8 w-8" />
                                <span>Résumé</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
}