import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-screen max-w-4xl mx-auto bg-white pt-5">
            <header>
                <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Welcome to suwako.me!</h1>
            </header>
            <main className="mt-5">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">About suwako.me</h2>
                    <p className="leading-7 not-first:mt-6">This site is intended to be a site for Suwako fans, by Suwako fans, and for Suwako fans.</p>
                </section>
                <article>
                    <p>GitHub repository for suwako.me : <a href="https://github.com/midorin-Linux/suwako" className="text-blue-500 hover:underline">https://github.com/midorin-Linux/suwako</a></p>
                </article>
            </main>
            <footer className="mt-5">
                <p className="leading-7 not-first:mt-6">© 2025 midorin-linux</p>
            </footer>
        </div>
  );
}
