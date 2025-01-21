import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import { CiCalendarDate } from "react-icons/ci";


import FotoNoticia1 from '../../assets/fotonoticia1.png'
import FotoNoticia2 from '../../assets/fotonoticia2.png'
// import fotoNoticia1 from '../../../public/FotoNoticia1.png'
// import fotoNoticia2 from '../../../public/FotoNoticia2.png'

export default function News() {

    const [noticias, setNoticias] = useState([
        {
            id: 1,
            titulo: 'Viação praia sol recebe as suas primeiras unidades do novo mascarello granvia 2024',
            dataPublicacao: '15 de novembro de 2023',
            urlImagem: FotoNoticia1
        },
        {
            id: 2,
            titulo: 'Vagas abertas para Motorista com experiencia na função',
            dataPublicacao: '15 de novembro de 2023',
            urlImagem: FotoNoticia2
        },
        {
            id: 3,
            titulo: 'Vagas abertas para Motorista com experiencia na função',
            dataPublicacao: '15 de novembro de 2023',
            urlImagem: FotoNoticia2
        }
    ])
    return (
        <div>
            <h1 className='titulo'>NOTÍCIAS</h1>
            <h2 className='subtitulo'>Veja todas as notícias</h2>

            <div className='list-noticias'>
                {noticias.map((noticia) => {
                    return <div key={noticia.id} className='container-noticias'>
                        <Link to={`/news/${noticia.id}`} >
                            <div className='noticiaImg'>
                                <img src={noticia.urlImagem} />

                                <div>
                                    <div className='container-data-publicacao'>
                                        <CiCalendarDate color='black' />
                                        <strong>{noticia.dataPublicacao}</strong>
                                    </div>
                                    <div className='titulo-noticia'>
                                        {noticia.titulo}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}