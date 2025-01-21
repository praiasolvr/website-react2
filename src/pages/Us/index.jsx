import './style.css'

import fotoGar from '../../assets/foto_sobre.png'
import LogoMissaoVisaoValores from '../../assets/logo-missao-visao-valores.png'

import fotoDepartamento from "../../assets/foto_organograma.png"

export default function Us() {
    return (
        <div>
            <h1 className='titulo'>SOBRE A VIAÇÃO PRAIA SOL</h1>

            <h2 className='subtitulo'>Conheça a <br />Viação Praia Sol</h2>

            <div className='container-empresa'>
                <img src={fotoGar} alt='foto da garagem' />
                <p id='texto-sobre-viacao-praia-sol'><strong>A VIAÇÃO PRAIA SOL NASCEU DA VIAÇÃO ALVORADA, QUANDO ESTA QUE OPERAVA NO TRANSPORTE RODOVIÁRIO DE PASSAGEIROS DECIDIU OPERAR TAMBÉM NO TRANSPORTE COLETIVO INTERMUNICIPAL DA GRANDE VITÓRIA.  ASSIM, FOI CRIADA A VIAÇÃO PRAIA SOL, VOLTADA INTEIRAMENTE AO TRANSPORTE COLETIVO INTERMUNICIPAL DE PASSAGEIROS EM 01 DE JANEIRO 1989.
                    <br /><br />
                    TRABALHAMOS PARA OFERECER SEGURANÇA, CONFORTO, PONTUALIDADE E CORDIALIDADE NO TRANSPORTE COLETIVO DE PASSAGEIROS.</strong></p>
            </div>

            <div id='container-departamentos'>
                <img className="imagem-departamento" src={fotoDepartamento} alt="foto organograma departamento" />
            </div>

            <div className="containerQuemSomos">
                <img src={LogoMissaoVisaoValores} alt="" />
                <p>Missão: Promover mobilidade urbana de qualidade com segurança, pontualidade e bom atendimento.</p>
                <br />
                <p>Visão: Reconhecimento público, privado e governamental pela excência no transporte de passageiros.</p>
                <br />
                <p>Valores: Profissionalismo, Ética, Respeito Compromisso com a qualidade, Valorização do ser humano e Responsabilidade social.</p>
                <br />

            </div>
        </div>
    )
}