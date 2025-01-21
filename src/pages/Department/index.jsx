import fotoDepartamento from "../../assets/foto_organograma.png"
import './style.css'

export default function Department() {
    return (
        <div>
            <img className="imagem-departamento" src={fotoDepartamento} alt="foto organograma departamento" />
        </div>
    )
}