import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { use } from 'react'

import ButtonLinkedin from '../../assets/ButtonLinkedin.png'
import ButtonInstagram from '../../assets/ButtonInstagram.png'
import FotoGranvia from '../../assets/fotomascarelofrente.jpg'
import FotoGranviaInterno from '../../assets/foto-internabus.jpg'

import CalendarIcon from '../../assets/calendarIcon.jpg'

import { CiCalendarDate } from "react-icons/ci";

export default function DetailsNews() {

    return (
        <div>
            <h1 className='titulo'>Viação Praia Sol recebe as suas primeiras unidades do novo Mascarello GranVia 2024</h1>

            <div id='data-publicacao-noticia' className='container-data-publicacao'>
                {/* <img src={CalendarIcon} alt="icone calendário" /> */}
                <CiCalendarDate color='black'/>
                <strong className='subtitulonoticias'>15 de novembro de 2023</strong>
            </div>

            <div className='rodape'>
                <img src={FotoGranvia} alt="foto principal da noticia" />

                <p className='texto-noticia'>Novidade na Frota! 🚍
                    <br /><br />
                    Estamos sempre pensando no seu conforto e segurança!
                    A nossa empresa acaba de receber novos ônibus para oferecer uma experiência de viagem ainda melhor.

                    Destaques dos novos veículos:
                    <br /> <br />
                    Conforto: Poltronas estofadas.
                    Acessibilidade: Os veículos possuem plataforma de acessibilidade para auxiliar no embarque e desembarque de pessoas com deficiência física ou mobilidade reduzida.
                    Tecnologia: Wi-Fi gratuito.
                    Sustentabilidade: Veículos mais econômicos e com menor emissão de poluentes.
                    Segurança: Equipados com tecnologia de ponta para garantir sua tranquilidade. <br />
                    <br />
                    Venha conhecer a nossa nova frota e viaje com mais qualidade e eficiência!</p>

                <img className='fotointernamascarello' src={FotoGranviaInterno} alt="Foto interna do mascarello" />
            </div>
        </div>
    )
}