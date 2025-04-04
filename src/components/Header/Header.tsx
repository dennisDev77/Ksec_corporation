import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

//import components
import { CiLight } from "react-icons/ci";
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Forms/Button'

export default function Header() {
  return (
    <main className={`${styles.header} w-full text-zinc-200 px-10 py-1 flex justify-between items-center shadow-md shadow-zinc-900 backdrop-blur-md bg-[#09090b]/80 z-50 sticky top-0`}>

        {/* Add Logotipo K */}
      <section className=''> <Logo /></section>

      <section className='flex justify-around items-center gap-4'>

        {/* Config: mode theme */}
        <div> <span className='text-xl'><CiLight /></span></div>
        
        {/* Navigate to navBar */}
        <nav className=' flex gap-2 items-center justify-center text-lg font-normal text-zinc-200 '>
            <Link href='/' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Home</Link>
            <Link href='/product' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Produto</Link>
            <Link href='/client' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Clientes</Link>
            <Link href='/parce' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Parceiros</Link>
            <Link href='/parce' className='transition-all duration-300 ease-in-out hover:text-zinc-300 hover:scale-105'>Sobre</Link>
        </nav>
      </section>

      {/* Add button to contact */}
      <section>
        <Button className={`${styles.button} rounded-sm `}>Contacte</Button>
      </section>
    </main>
  )
}
