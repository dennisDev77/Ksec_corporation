import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'
import styles from './Header.module.scss'
import { CiLight } from "react-icons/ci";

export default function Header() {
  return (
    <main className={`${styles.header} w-full text-zinc-200 px-10 py-1 flex justify-between items-center shadow-md shadow-zinc-900 backdrop-blur-sm bg-[#09090b]/50 z-50 sticky top-0`}>

        {/* Add Logotipo K */}
      <section className=''> <Logo /></section>

      <section className='flex justify-around items-center gap-4'>

        {/* Config: mode theme */}
        <div> <span className='text-xl'><CiLight /></span></div>
        
        {/* Navigate to navBar */}
        <nav className=' flex gap-2 items-center justify-center text-lg font-normal text-zinc-200 '>
            <Link href='/' className='transition-all duration-200 ease-in-out hover:text-zinc-300 hover:font-medium '>Home</Link>
            <Link href='/product' className='transition-all duration-200 ease-in-out hover:text-zinc-300 hover:font-medium'>Produto</Link>
            <Link href='/client' className='transition-all duration-200 ease-in-out hover:text-zinc-300 hover:font-medium'>Clientes</Link>
            <Link href='/parce' className='transition-all duration-200 ease-in-out hover:text-zinc-300 hover:font-medium'>Parceiros</Link>
            <Link href='/parce' className='transition-all duration-200 ease-in-out hover:text-zinc-300 hover:font-medium'>Sobre</Link>
        </nav>
      </section>

      {/* Add button to contact */}
      <section>
        <button className='text-lg text-zinc-200 bg-yellow-600 px-4 py-2 rounded-sm'>Contacte</button>
      </section>
    </main>
  )
}
