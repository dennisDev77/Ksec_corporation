import React from 'react'
import Image from 'next/image'

export default function Banner(){

    return(
        <>
        <section>
            <Image alt='Carregando Banner Home' src='/images/banner.png' width={500} height={500}/>
        </section>
        </>
    )
}