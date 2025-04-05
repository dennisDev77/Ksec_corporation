"use client"
import React from 'react'
import EquipeComponent from '@/components/ui/equipe'


interface EquipeProps{
        quote: string,
        name: string,
        designation: string,
        src: string,
        linkedin:string,
        insta:string
    }
export default function Equipe(){
    
    const testimonials:EquipeProps[] = [
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Joao Lopes", designation: "CO | Analista de Seguranca", src:"/images/equipe/CEO.jpg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
    
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Lucas Pacavira", designation: "Analista de Seguranca", src:"/images/equipe/CO-FOUNDER.jpg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
    
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "David Ferreira", designation: "Analista de seguranca", src:"/images/equipe/David.jpeg", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis"},
    
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Dennis Camela", designation: "Dev FullStack |Designer UI", src:"/images/equipe/DevDennis.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },

            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Mario Matias", designation: "Frontend Deloper", src:"/images/equipe/DevMatias.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
            
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Kumbris Designer", designation: "Designer Grafico", src:"/images/equipe/Kiala.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
           
            { quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum itaque facilis architecto modi fugit laboriosam possimus similique veniam", name: "Carlos Avelino", designation: "Analista de Sistema", src:"/images/equipe/Analista.png", linkedin:"linkedi/in/dinisdev", insta:"instagram/denis" },
          ]

    return(
        <>
          <section className='flex-grow mb-16'>
                    <EquipeComponent testimonials={testimonials} autoplay/>
            </section>
        </>
    )
}