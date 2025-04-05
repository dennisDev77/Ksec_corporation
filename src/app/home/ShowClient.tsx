import React from 'react'
import Image from 'next/image'

export default function ShowClient(){

    return(

        <section className='flex flex-wrap justify-center items-center gap-20'>

            <div className=' '>
                <Image src="/images/client/cloud.png" alt="Client 1" width={150} height={50} className="object-contain w-60"/>
            </div>

            <div className=' '>
                 <Image src="/images/client/mambo.png" alt="Client 2" width={150} height={50} className="object-contain w-60"/>
            </div>

            <div className=' '>
                <Image src="/images/client/ANGOHOST-AZUL.png" alt="Client 3" width={150} height={50} className="object-contain w-60"/>
            </div>
            
            
        </section>
    )
}