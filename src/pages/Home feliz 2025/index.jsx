import { Link } from 'react-router-dom'

import './style.css'

import LogoPS from '../../assets/logo ps sem fundo.jpg'
import LogoVR from '../../assets/logo vr sem fundo.jpg'
import Balão from '../../assets/balão.png'

import FotoFeliz2025 from '../../assets/feliz2025.png'


export default function Home() {
    return (
        <div>
            <img className='baloes' src={Balão} alt="balão do conteudo" />
            <div className='container-home'>
                <div className="foto">
                    <img className='foto-ano-novo' src={FotoFeliz2025} />
                    <p id='frase-feliz-2025'>A Praia Sol e Vereda deseja a todos um Feliz e Próspero Ano Novo, repleto de realizações e sucessos!</p>
                </div>
                <div className='conteudo'>
                    <p className='title-happy-new-year'>
                        Feliz Ano Novo para Todos!
                        <br /><br />
                    </p>
                    <p>
                        À medida que o ano se encerra, queremos dedicar um momento para agradecer a todos os nossos colaboradores, parceiros, amigos e suas famílias pelo empenho, dedicação e trabalho árduo durante este ano. Juntos, alcançamos grandes conquistas, superamos desafios e vivemos momentos de aprendizado e crescimento.
                        Neste novo ano, renovamos nosso compromisso com o sucesso coletivo e com o bem-estar de todos. Que 2025 seja um ano de muitas realizações, saúde, alegrias e prosperidade. Que as energias positivas nos acompanhem em cada passo e que possamos continuar construindo um futuro melhor, juntos!
                        Desejamos a todos um Ano Novo cheio de felicidade, amor, harmonia e novas oportunidades.
                        <br /><br />Com carinho,
                    </p>
                    <img src={LogoPS} alt="logo praia sol" />
                    <img src={LogoVR} alt="logo vereda" />
                </div>
                {/* <Link to="/news"><p>Todas as notícias</p></Link> */}
            </div>
        </div >
    )
}