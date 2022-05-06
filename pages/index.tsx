
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Link from "next/link";
import styles from '../styles/Home.module.css'



const Home = () => {

  return (
    <>
      <div>
        <Head>
          <title>Nikko Parin - Portfolio</title>
          <meta name="description" content="Portfolio - Next.js Learning" />
          <link rel="icon" href="/nikko-parin-work-favicon.png" />
        </Head>
        <div className="w-full min-h-screen bg-dark-blue relative">
          <Header />
          <main className="py-5 px-8 mx-auto max-w-screen xl:max-w-7xl ">
            <div className="flex items-center flex-wrap">
              <div className="w-full sm:w-1/2 2xl:w-2/5">
                <img className="drop-shadow-2xl" src="../nikko-silhoutte.png" />
              </div>
              <div className="w-full sm:w-1/2 2xl:w-3/5 text-right pb-10">
                <h1 className="pt-10 text-center sm:text-right text-5xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-white"><span className="leading-snug"><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-900 relative inline-block"><span className="relative text-white">Helping brands</span></span> to accomplish a market visibility on the Internet.</span></h1>
                
                <div className="pt-12 flex justify-center sm:justify-end">
                  <Link href="/clients-projects">
                    <button className="animate-pulse ease-in duration-300 py-4 px-12 font-medium tracking-wide text-xl text-neutral-50 bg-emerald-900 border-2 border-emerald-800 hover:bg-gray-900 hover:border-gray-800 rounded-md drop-shadow-2xl">See my work</button>
                  </Link>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  )
}



export default Home
