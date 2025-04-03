import React from "react";

//Import components
import BackgroundHome from './home/BackgroundHome'
import Banner from './home/Banner'
import Button from '@/components/Forms/Button'
import styles from '@/components/Header/Header.module.scss'

export default function Home() {

  return (
    <main className=" h-lvh w-full z-1">

       <section className='relative w-full h-full'>
        
        {/* Add Delay */}
        <div className='bg-[#09090b]/80 z-10 absolute top-0 left-0 w-full h-full backdrop-blur-sm'></div>
        
        {/* Add background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundHome className="w-full h-full" />
        </div>

          {/* Content Home */}
        <div className=" Container relative flex md:flex-row flex-col justify-between items-center text-zinc-200 z-20 w-full md:gap-0 gap-4">

          <div className='pt-20 md:max-w-2xl flex flex-col gap-4 items-start justify-center'>
              <h2 className="text-5xl font-bold text-zinc-200"> Sua Seguranca <span className='text-[#078a42]'>Online</span> e a Chave da Sua Tranquilidade <span className='text-[#078a42]'>Offline</span>.</h2>

              <p className='text-base text-zinc-400 text-justify font-light'>Proteger a sua empresa, dolor sit amet consectetur adipisicing elit. Incidunt illum repudiandae, suscipit harum, atque recusandae voluptas earum quidem ipsum expedita iste! Amet quae possimus fugiat dolore! Dolores necessitatibus consectetur labore!</p>
  

              <div className='pt-4 flex flex-wrap justify-start gap-10 items-center'>
                <Button className={` ${styles.button1} `}>Saber Mais</Button>
                <Button className={` ${styles.button}`}> Contacte-nos </Button>
              </div>
          </div>

          <div className="pt-20 md:max-w-xl">
                <Banner/>
          </div>
        </div>
       </section>

      {/*  */}
       <section>
        <h2>Em Desenvolvimento</h2>
       </section>
    </main>
  );
}