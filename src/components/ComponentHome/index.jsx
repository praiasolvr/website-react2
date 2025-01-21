// import Carousel from './components/Carousel/index.jsx'
import './style.css'
import Carousel from '../Carousel/index.jsx'

import foto1 from '../../assets/fotomascarelofrente1080.jpg'
import foto2 from '../../assets/fotocontact.png'
import foto3 from '../../assets/foto-equipe-parceiros.jpg'
import foto4 from '../../assets/foto-internabus1080.jpg'

export default function ComponentHome() {
    const data = [
        {
            image: foto1,
            title: "Bem-vindo ao Nosso Sistema",
            description: "A solução completa para transporte e inovação.",
        },
        {
            image: foto2,
            title: "Notícias Recentes",
            description: "Fique por dentro das vagas disponiveis.",
        },
        {
            image: foto3,
            title: "Equipe Dedicada",
            description: "Conheça nossa equipe e parceiros de sucesso.",
        },
        {
            image: foto4,
            title: "Inovação em Movimento",
            description: "Transformando o transporte para um futuro melhor.",
        },
    ]
    const slides = data;
    return (
        <div className='component-home'>
            <h1 className='titulo'>BEM VINDO</h1>
            <h2 className='subtitulo'>Acompanhe nossas novidades:</h2>
            <Carousel slides={slides} />
        </div>
    )
}