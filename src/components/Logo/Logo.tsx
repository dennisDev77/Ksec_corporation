import React from 'react'
import Image from 'next/image'

export default function Logo(){

  return(
    <>
     <section>
        <Image src='/images/logo.png' alt='Carregando a logo' width={500} height={500} style={{width:"4rem"}}/>
     </section>
    </>
  )
}