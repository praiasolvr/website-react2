import './style.css'

import React, { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";

export default function MenuBoxModel() {
    const [isOpen, setIsOpen] = useState(true);

    function fecharModal(event) {
        event.stopPropagation();
        console.log("Botão clicado, fechando modal...")
        setIsOpen(false); // Verificar se está sendo chamado corretamente
    }

    console.log("isOpen no render:", isOpen);

    return (
        <>
            {isOpen && (
                <div className="menu-box-model"
                    onClick={() => setIsOpen(false)} // Fecha ao clicar fora
                    >
                    <div className="container-menu-hamburguer" onClick={(e) => e.stopPropagation()}>
                        <div className="button-fechar-menu" onClick={fecharModal}>
                            <IoCloseOutline />
                        </div>
                        <div>
                            <ul className="lista-menu-box-model">
                                <li className="item-lista-menu"><a href="/">Início</a></li>
                                <li className="item-lista-menu"><a href="/news">Notícias</a></li>
                                <li className="item-lista-menu"><a href="/us">Quem Somos</a></li>
                                <li className="item-lista-menu"><a href="/contacts">Contatos</a></li>
                                <li className="item-lista-menu"><a href="/work-with-us">Trabalhe Conosco</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

