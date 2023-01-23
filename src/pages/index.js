import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] });

import NavBar from "@/components/layout/nav/NavBar";
import { Hero } from "@/components/modules"

export default function Home() {
  return (
    <>
      <Head>
        <title>Felipe Boni</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className="snap-y snap-proximity">
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
      </main>
    </>
  )
}
