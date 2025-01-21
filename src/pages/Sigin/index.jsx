import './style.css'

import PhoneLogo from '../../assets/phone-logo.png'
import LogoPsol from '../../assets/logo.svg'

export default function Singin() {
    return (
        <div className='container-login'>
            <div className='area-esquerda'>
                <h1>Bem-vindo!</h1>
                <img src={PhoneLogo} alt="logo telefone" />
                <div className='logo-empresa'>
                    <img src={LogoPsol} alt="logo sol ps" />
                    <strong>VIAÇÃO PRAIA SOL</strong>
                </div>
            </div>

            <div className='area-direita'>
                <div className='formulario-login'>
                    <h1>Login</h1>
                    <div className='formulario'>
                        <input className='input-login' type="text" placeholder='Login' />
                        <input type="password" placeholder='Senha' />
                        <div className='buttonAcessar'>Acessar</div>
                    </div>
                </div>

            </div>
        </div>
    )
}