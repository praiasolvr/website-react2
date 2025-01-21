import { useState } from 'react'
import './style.css'

export default function Funcionários() {
    const [employees, setEmployees] = useState([
        { matricula: 1, nome: "Chawan", funcao: "Bilhete" },
        { matricula: 2, nome: "Yuri", funcao: "CCT" },
        { matricula: 3, nome: "Arthur", funcao: "TI" }
    ])
    return (
        <div>
            <h1>
                Funcionários
            </h1>
            {employees.map((emp) => {
                return (
                    <div className='row'>
                        matricula:
                        <p>
                            {emp.matricula}
                        </p>
                        nome:
                        <p>
                            {emp.nome}
                        </p>
                        função:
                        <p>
                            {emp.funcao}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}