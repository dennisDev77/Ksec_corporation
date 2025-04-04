import React from "react";

//Import components
import BackgroundHome from './home/BackgroundHome'
// import Banner from './home/Banner'
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
        <div className=" Container relative flex items-center justify-center text-zinc-200 z-20 w-full md:gap-0 gap-4">

          <div className='md:pt-32 pt-16 md:max-w-4xl flex flex-col gap-4 items-center justify-center'>
              <h2 className="text-5xl font-bold text-zinc-200 text-center"> Sua Seguranca <span className={styles.textDestaque}>Online</span> é a Chave da Sua Tranquilidade <span className={styles.textDestaque}>Offline</span>.</h2>

              <p className='text-lg text-zinc-400 text-center font-light'>Proteger a sua empresa, dolor sit amet consectetur adipisicing elit. Incidunt illum repudiandae, suscipit harum, atque recusandae voluptas earum quidem ipsum expedita iste! Amet quae possimus fugiat dolore! Dolores necessitatibus consectetur labore quidem ipsum expedita iste! Amet quae possimus fugiat dolore! Dolores necessitatibus consectetur labore!</p>
  

              <div className='pt-4 flex flex-wrap justify-start gap-10 items-center'>
                <Button className={` ${styles.button1} `}>Saber Mais</Button>
                <Button className={` ${styles.button}`}> Contacte-nos </Button>
              </div>
          </div>
        </div>
       </section>

      {/* sections Solutions */}
       <section className="Container">

        <div className='flex flex-col items-center justify-center'>
            <h2 className='subTitle'>Confira Abaixo as Nossas Solucoes</h2>
            <p className='text-center text-zinc-400 font-lg'>Tecnologias Avancadas para a protecao de ameacas Digitais</p>
        </div>
       </section>

      {/* sections Diferenciais */}
       <section className="Container">

        <div className='flex flex-col items-center justify-center'>
            <h2 className='subTitle'>Porque Escolher-Nos</h2>
            <p className='text-center text-zinc-400 font-lg'>Transformamos desafios de seguranca em oportunidades extrategica</p>
        </div>
       </section>

      {/* sections Clients */}
       <section className="Container">

        <div className='flex flex-col items-center justify-center'>
            <h2 className='subTitle'>Nossos Clients</h2>
            <p className='text-center text-zinc-400 font-lg'>Empresas que confiam com a nossa Solucao</p>
        </div>
       </section>

      {/* sections Parceiros */}
       <section className="Container">

        <div className='flex flex-col items-center justify-center'>
            <h2 className='subTitle'>Parceiros Extrategico</h2>
            <p className='text-center text-zinc-400 font-lg'>Parceiros que fortalecem a nossa secguranca cibernetica</p>
        </div>
       </section>

      {/* sections Parceiros */}
       <section className="Container">

        <div className='flex flex-col items-center justify-center'>
            <h2 className='subTitle'>Nossa Equipe</h2>
            <p className='text-center text-zinc-400 font-lg'>Confira os especialista por tras de toda magica</p>
        </div>
       </section>
    </main>
  );
}