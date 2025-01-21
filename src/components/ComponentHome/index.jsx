// import Carousel from './components/Carousel/index.jsx'
import './style.css'
import Carousel from '../Carousel/index.jsx'

export default function ComponentHome() {
    const data = [
        {
            image: "../../assets/fotomascarelofrente1080.jpg",
            title: "Bem-vindo ao Nosso Sistema",
            description: "A solução completa para transporte e inovação.",
        },
        {
            image: "../../assets/fotocontact.png",
            title: "Notícias Recentes",
            description: "Fique por dentro das vagas disponiveis.",
        },
        {
            image: "../../assets/foto-equipe-parceiros.jpg",
            title: "Equipe Dedicada",
            description: "Conheça nossa equipe e parceiros de sucesso.",
        },
        {
            image: "../../assets/foto-internabus1080.jpg",
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