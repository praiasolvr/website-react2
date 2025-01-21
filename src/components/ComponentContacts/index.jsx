
import './style.css'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

export default function ComponentContacts() {

    return (
        <div>
            <h1 className='titulo'>CONTATOS</h1>
            <h2 className='subtitulo'>Entre em contato conosco em:</h2>
            <div className='subtitu-contacts'>
                <h2>Email: <MdEmail />
                    <ul>
                        <li key='Email'><a href="mailto:sac@viacaopraiasol.com.br?subject=Me chamo <seu_nome> e gostaria de: &body=Por favor nos mande um email">sac@viacaopraiasol.com.br</a></li>
                    </ul>
                </h2>
                <h2>Telefone: <MdPhone />
                    <ul>

                        <li key='Telefone'><a href="tel:552733200511">(27) 3320-0511</a></li>
                    </ul>
                </h2>
            </div>
        </div>
    )
}